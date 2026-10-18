// Print all waitlist signups as CSV.
// Setup once: `vercel link` then `vercel env pull .env.local` (gives BLOB_READ_WRITE_TOKEN).
// Run: npm run signups            (CSV to stdout)
import { get, list } from "@vercel/blob";

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error("BLOB_READ_WRITE_TOKEN missing. Run: vercel env pull .env.local");
  process.exit(1);
}

const rows = [];
let cursor;
do {
  const page = await list({ prefix: "signups/", cursor, limit: 1000 });
  for (const blob of page.blobs) {
    const res = await get(blob.pathname, { access: "private" });
    if (!res) continue;
    const text = await new Response(res.stream).text();
    try {
      rows.push(JSON.parse(text));
    } catch {
      console.error(`unreadable: ${blob.pathname}`);
    }
  }
  cursor = page.hasMore ? page.cursor : undefined;
} while (cursor);

rows.sort((a, b) => String(a.createdAt).localeCompare(String(b.createdAt)));
const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
console.log("createdAt,email,role");
for (const r of rows) console.log([r.createdAt, r.email, r.role].map(esc).join(","));
console.error(`${rows.length} signup(s)`);
