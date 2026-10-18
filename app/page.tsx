import Link from "next/link";
import { NailIllustration } from "@/components/nail-illustration";
import { WaitlistForm } from "@/components/waitlist-form";

const problems = [
  { title: "レジ・POS", body: "会計画面のボタンが爪先では反応せず、指の腹に持ち替えるたびに手が止まる。" },
  { title: "オーダー用iPad", body: "忙しい時間帯ほどタップミス。ネイルを傷つけないよう気をつかう。" },
  { title: "スマホ", body: "文字入力や小さなボタンは、爪を立てても認識されない。" },
];

const audiences = [
  {
    title: "ネイルサロンのお客様",
    body: "長さのあるジェルネイルでも、スマホやタッチパネルを爪先でそのまま操作したい方に。仕込むのはお好きな指の1本だけ。",
  },
  {
    title: "バー・飲食店スタッフ",
    body: "POSやハンディ、オーダー用iPadを一日中タップする方に。ネイルをあきらめない働き方を。",
  },
  {
    title: "ネイリスト・サロン",
    body: "いつものジェル施術に追加できるメニューとして準備中。テスト施術にご協力いただけるサロンも募集予定です。",
  },
];

const faqs = [
  {
    q: "もう買えますか？",
    a: "いいえ。現在は開発中で、販売・予約・決済は一切行っていません。登録は無料のお知らせ受け取りのみです。",
  },
  {
    q: "どうして爪先だと反応しないの？",
    a: "スマホやiPadの画面は、指の肌を通る微弱な電気の変化でタッチを検知します。ジェルや爪は電気を通しにくいため、爪先では反応しません。",
  },
  {
    q: "ネイルは傷つきませんか？",
    a: "金のラインはクリアジェルの中に封入し、オフもいつものジェルと同じ方法を想定しています。耐久性や仕上がりはテスト施術で確認していきます。",
  },
  {
    q: "金属アレルギーがあっても大丈夫？",
    a: "金でもアレルギーが出る方はいます。施術前にネイリストへご相談ください。肌に触れる部分はごく小さくする設計で、テストでも肌の状態を確認していきます。",
  },
  {
    q: "登録すると何が届きますか？",
    a: "テスト施術の募集、対応サロンの情報、提供開始時期などのお知らせです。頻繁な配信はしません。",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-16 sm:max-w-2xl">
      <header className="flex items-center justify-between py-5">
        <span className="text-lg font-bold tracking-wide">
          ツメタップ <span className="text-sm font-medium text-muted">TsumeTap</span>
        </span>
        <a href="#waitlist" className="rounded-full border border-rose px-4 py-1.5 text-sm font-bold text-rose">
          登録する
        </a>
      </header>

      {/* Hero */}
      <section className="pt-4 text-center">
        <p className="inline-block rounded-full bg-blush px-3 py-1 text-xs font-bold text-rose-dark">
          開発中・ウェイトリスト受付中
        </p>
        <h1 className="mt-5 text-[1.9rem] font-bold leading-snug sm:text-4xl">
          ジェルネイルのまま、
          <br />
          爪先でタップ。
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-8 text-muted">
          ジェルネイルの施術中に、ネイリストがお好きな1本の爪へ金の導電ラインを封入。その指の爪先だけで、レジ、オーダー用iPad、スマホをいつでも操作できるようにします。
        </p>
        <NailIllustration className="mx-auto mt-6 w-72 sm:w-80" />
        <a
          href="#waitlist"
          className="mt-6 inline-block w-full rounded-full bg-rose px-6 py-3.5 font-bold text-white shadow-sm sm:w-auto"
        >
          テスト施術のお知らせを受け取る
        </a>
        <p className="mt-4 text-xs text-muted" lang="en">
          During your gel appointment, a nail artist seals a gold conductive strip into one nail of your choice, so that fingertip always works on touchscreens. Join the waitlist.
        </p>
      </section>

      {/* Problem */}
      <section className="mt-16">
        <h2 className="text-xl font-bold">ネイルの日の「反応しない」</h2>
        <p className="mt-2 text-sm leading-7 text-muted">
          タッチパネルは指の肌に反応するしくみ。ジェルネイルの爪先では、画面が反応しません。
        </p>
        <ul className="mt-5 grid gap-3">
          {problems.map((p) => (
            <li key={p.title} className="rounded-2xl border border-line bg-white p-4">
              <p className="font-bold">{p.title}</p>
              <p className="mt-1 text-sm leading-7 text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Concept */}
      <section className="mt-16 rounded-3xl bg-blush p-6">
        <h2 className="text-xl font-bold">しくみはシンプル</h2>
        <ol className="mt-5 grid gap-4">
          {[
            ["1", "1本を選ぶ", "ジェル施術のとき、タッチ用にしたい指を1本お選びいただきます。"],
            ["2", "金のラインを封入", "ネイリストが金の導電ラインをジェルの中に仕込み、爪先と指の肌をつなぐ電気の通り道をつくります。"],
            ["3", "爪先でタップ", "画面に当たるのは爪先の金の部分。次のオフまで、指の腹に持ち替えずに操作できます。"],
          ].map(([n, t, b]) => (
            <li key={n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose text-sm font-bold text-white">
                {n}
              </span>
              <div>
                <p className="font-bold">{t}</p>
                <p className="mt-1 text-sm leading-7 text-ink/75">{b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Demo video placeholder */}
      <section className="mt-16" id="demo">
        <h2 className="text-xl font-bold">デモ動画</h2>
        <div className="mt-4 flex aspect-video w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-nude bg-white text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blush text-rose" aria-hidden="true">
            ▶
          </span>
          <p className="mt-3 font-bold">近日公開</p>
          <p className="mt-1 px-6 text-xs leading-6 text-muted">
            テスト施術したネイルで実際のレジ・iPadを操作する様子をお見せする予定です。
          </p>
        </div>
      </section>

      {/* Audience */}
      <section className="mt-16">
        <h2 className="text-xl font-bold">こんな方のために</h2>
        <ul className="mt-5 grid gap-3">
          {audiences.map((a) => (
            <li key={a.title} className="rounded-2xl border border-line bg-white p-4">
              <p className="font-bold">{a.title}</p>
              <p className="mt-1 text-sm leading-7 text-muted">{a.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Waitlist */}
      <section className="mt-16 scroll-mt-6" id="waitlist">
        <h2 className="text-xl font-bold">ウェイトリストに登録</h2>
        <p className="mt-2 mb-5 text-sm leading-7 text-muted">
          テスト施術の募集や対応サロンの情報をメールでお知らせします。登録は無料、販売や決済はありません。
        </p>
        <WaitlistForm />
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-xl font-bold">よくある質問</h2>
        <div className="mt-4 divide-y divide-line rounded-2xl border border-line bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-4">
              <summary className="cursor-pointer list-none font-bold marker:hidden">
                <span className="mr-2 text-rose">Q.</span>
                {f.q}
              </summary>
              <p className="mt-2 text-sm leading-7 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="mt-16 border-t border-line pt-6 text-center text-xs leading-6 text-muted">
        <p>
          <Link href="/privacy" className="underline">プライバシーについて</Link>
        </p>
        <p className="mt-2">ツメタップ（仮称）は開発中のプロジェクトです。販売は行っていません。</p>
        <p lang="en">TsumeTap is in development. Waitlist only, nothing for sale.</p>
      </footer>
    </main>
  );
}
