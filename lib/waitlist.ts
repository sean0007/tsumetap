export const ROLES = ["salon", "bar_restaurant", "other"] as const;
export type Role = (typeof ROLES)[number];

export const ROLE_LABELS: Record<Role, string> = {
  salon: "ネイルサロン（お客様・ネイリスト）",
  bar_restaurant: "バー・飲食店スタッフ",
  other: "その他",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ParsedSignup =
  | { kind: "bot" }
  | { kind: "invalid"; field: "email" | "role" }
  | { kind: "ok"; email: string; role: Role | null };

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/** Validate a raw signup body. `website` is a hidden honeypot field. */
export function parseSignup(body: unknown): ParsedSignup {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { kind: "invalid", field: "email" };
  }
  const record = body as Record<string, unknown>;
  if (str(record.website)) return { kind: "bot" };

  const email = str(record.email).toLowerCase();
  if (!EMAIL.test(email) || email.length > 254) {
    return { kind: "invalid", field: "email" };
  }

  const rawRole = str(record.role);
  if (!rawRole) return { kind: "ok", email, role: null };
  if (!(ROLES as readonly string[]).includes(rawRole)) {
    return { kind: "invalid", field: "role" };
  }
  return { kind: "ok", email, role: rawRole as Role };
}

export type SignupRecord = {
  email: string;
  role: Role | null;
  createdAt: string;
  source: "tsumetap-waitlist";
  userAgent: string | null;
};

export function buildRecord(
  email: string,
  role: Role | null,
  now: Date,
  userAgent: string | null,
): SignupRecord {
  return {
    email,
    role,
    createdAt: now.toISOString(),
    source: "tsumetap-waitlist",
    userAgent: userAgent ? userAgent.slice(0, 200) : null,
  };
}

/** One private blob per signup: no read-modify-write, so no lost writes. */
export function signupPathname(now: Date, random: string): string {
  const stamp = now.toISOString().replace(/[:.]/g, "-");
  return `signups/${stamp}-${random}.json`;
}

export const copy = {
  saved: "登録しました。試作品の準備ができたら、このメールアドレスにお知らせします。",
  invalidEmail: "メールアドレスを確認してください。",
  invalidRole: "お立場の選択肢が正しくありません。",
  storageMissing:
    "現在、登録を保存できません（保存先が未設定）。お手数ですが時間をおいて再度お試しください。",
  storageFailed:
    "保存に失敗しました。登録は完了していません。時間をおいて再度お試しください。",
  network: "通信できませんでした。登録は完了していません。",
} as const;
