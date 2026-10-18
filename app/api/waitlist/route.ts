import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { buildRecord, copy, parseSignup, signupPathname } from "@/lib/waitlist";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = { ok: boolean; stored: boolean; message: string };

function json(body: Body, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  let raw: unknown = null;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, stored: false, message: copy.invalidEmail }, 400);
  }

  const parsed = parseSignup(raw);
  if (parsed.kind === "bot") {
    // Honeypot hit: answer like success but store nothing.
    return json({ ok: true, stored: false, message: copy.saved }, 200);
  }
  if (parsed.kind === "invalid") {
    return json(
      {
        ok: false,
        stored: false,
        message: parsed.field === "role" ? copy.invalidRole : copy.invalidEmail,
      },
      400,
    );
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("waitlist.storage_missing");
    return json({ ok: false, stored: false, message: copy.storageMissing }, 503);
  }

  const now = new Date();
  const record = buildRecord(
    parsed.email,
    parsed.role,
    now,
    request.headers.get("user-agent"),
  );

  try {
    await put(signupPathname(now, randomUUID().slice(0, 8)), JSON.stringify(record), {
      access: "private",
      contentType: "application/json",
      addRandomSuffix: false,
    });
  } catch (error) {
    console.error(
      "waitlist.storage_failed",
      error instanceof Error ? error.message : "error",
    );
    return json({ ok: false, stored: false, message: copy.storageFailed }, 502);
  }

  return json({ ok: true, stored: true, message: copy.saved }, 200);
}
