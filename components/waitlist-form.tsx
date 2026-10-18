"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ROLES, ROLE_LABELS, copy } from "@/lib/waitlist";

type State =
  | { status: "idle" }
  | { status: "pending" }
  | { status: "saved"; message: string }
  | { status: "error"; message: string };

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const website = String(new FormData(event.currentTarget).get("website") ?? "");
    setState({ status: "pending" });
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, role, website }),
      });
      let body: { ok?: boolean; stored?: boolean; message?: string } = {};
      try {
        body = await res.json();
      } catch {
        body = {};
      }
      // Only show success when the server confirms the write.
      if (res.ok && body.ok && body.stored) {
        setState({ status: "saved", message: body.message || copy.saved });
        return;
      }
      if (res.ok && body.ok && body.stored === false) {
        // Honeypot path; real users never hit it.
        setState({ status: "saved", message: body.message || copy.saved });
        return;
      }
      setState({ status: "error", message: body.message || copy.storageFailed });
    } catch {
      setState({ status: "error", message: copy.network });
    }
  }

  if (state.status === "saved") {
    return (
      <div className="rounded-2xl border border-line bg-white p-6 text-center shadow-sm" role="status">
        <p className="text-sm font-bold tracking-widest text-rose">THANK YOU</p>
        <p className="mt-2 text-lg font-bold">ウェイトリストに登録しました</p>
        <p className="mt-2 text-sm leading-7 text-muted">{state.message}</p>
      </div>
    );
  }

  const pending = state.status === "pending";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6">
      <label className="block text-sm font-bold" htmlFor="email">
        メールアドレス <span className="text-rose">*</span>
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        inputMode="email"
        autoComplete="email"
        maxLength={254}
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-base outline-none focus:border-rose focus:ring-2 focus:ring-rose/20"
      />

      <fieldset className="mt-5">
        <legend className="text-sm font-bold">
          あなたについて <span className="font-normal text-muted">（任意）</span>
        </legend>
        <div className="mt-2 grid gap-2">
          {ROLES.map((value) => (
            <label
              key={value}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                role === value ? "border-rose bg-blush" : "border-line bg-paper"
              }`}
            >
              <input
                type="radio"
                name="role"
                value={value}
                checked={role === value}
                onChange={() => setRole(value)}
                className="accent-rose"
              />
              {ROLE_LABELS[value]}
            </label>
          ))}
        </div>
        {role ? (
          <button type="button" onClick={() => setRole("")} className="mt-2 text-xs text-muted underline">
            選択を解除
          </button>
        ) : null}
      </fieldset>

      {/* honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" ? (
        <p className="mt-4 rounded-lg bg-blush px-3 py-2 text-sm text-rose-dark" role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-5 w-full rounded-full bg-rose px-6 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-rose-dark disabled:opacity-60"
      >
        {pending ? "送信中…" : "ウェイトリストに登録（無料）"}
      </button>
      <p className="mt-3 text-xs leading-6 text-muted">
        販売・決済は行っていません。試作品やテスト参加のお知らせのみ。
        メールアドレスの扱いは<Link href="/privacy" className="underline">プライバシーについて</Link>をご覧ください。
      </p>
    </form>
  );
}
