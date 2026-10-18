import { test } from "node:test";
import assert from "node:assert/strict";
import { buildRecord, parseSignup, signupPathname } from "./waitlist";

test("valid email without role", () => {
  assert.deepEqual(parseSignup({ email: " Test@Example.com " }), {
    kind: "ok",
    email: "test@example.com",
    role: null,
  });
});

test("valid role is kept", () => {
  const r = parseSignup({ email: "a@b.co", role: "bar_restaurant" });
  assert.equal(r.kind, "ok");
  if (r.kind === "ok") assert.equal(r.role, "bar_restaurant");
});

test("unknown role is rejected", () => {
  assert.deepEqual(parseSignup({ email: "a@b.co", role: "admin" }), {
    kind: "invalid",
    field: "role",
  });
});

test("bad email and bad body are rejected", () => {
  assert.equal(parseSignup({ email: "nope" }).kind, "invalid");
  assert.equal(parseSignup(null).kind, "invalid");
  assert.equal(parseSignup([]).kind, "invalid");
  assert.equal(parseSignup({ email: `${"a".repeat(250)}@b.co` }).kind, "invalid");
});

test("honeypot marks bots", () => {
  assert.deepEqual(parseSignup({ email: "a@b.co", website: "x" }), { kind: "bot" });
});

test("record and pathname shape", () => {
  const now = new Date("2026-10-18T08:00:00.123Z");
  const rec = buildRecord("a@b.co", "salon", now, "x".repeat(500));
  assert.equal(rec.createdAt, "2026-10-18T08:00:00.123Z");
  assert.equal(rec.userAgent?.length, 200);
  assert.equal(signupPathname(now, "abc"), "signups/2026-10-18T08-00-00-123Z-abc.json");
});
