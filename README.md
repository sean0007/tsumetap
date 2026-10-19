# ツメタップ / TsumeTap — waitlist

Japanese waitlist page for a gold conductive strip a nail artist seals into one gel nail during the appointment, so that fingertip works on touchscreens.
Waitlist only: no prices, no payments, no Stripe.

Live: https://tsumetap.vercel.app

## Where signups go

`POST /api/waitlist` writes one JSON file per signup to the **private** Vercel Blob store
`tsumetap-waitlist` (team grokbot-v1, region hnd1) at `signups/<timestamp>-<id>.json`.
If the store token is missing or the write fails, the API returns 503/502 and the form
shows an error. Success is only shown after the write is confirmed.

`GET /api/health` → `{ ok, storageConfigured }`.

## Reading signups

- Dashboard: Vercel → grokbot-v1 → Storage → `tsumetap-waitlist` → Browser → `signups/`.
- CSV: `vercel link` (project tsumetap), `vercel env pull .env.local`, then `npm run signups > signups.csv`.

## Dev

```
npm install
npm run dev
npm test && npm run lint && npm run build
```

Pushing to `main` deploys to production (Vercel Git integration).
