import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーについて｜ツメタップ",
  description: "ツメタップのウェイトリストで登録されたメールアドレスの取り扱いについて。",
};

export default function Privacy() {
  return (
    <main className="mx-auto max-w-xl px-5 py-10 text-sm leading-8">
      <Link href="/" className="text-rose underline">← トップへ戻る</Link>
      <h1 className="mt-6 text-2xl font-bold">プライバシーについて</h1>
      <p className="mt-4 text-muted">
        ツメタップ（仮称）のウェイトリストで登録いただいた情報の取り扱いは以下のとおりです。
      </p>

      <h2 className="mt-8 font-bold">お預かりする情報</h2>
      <ul className="mt-2 list-disc pl-5">
        <li>メールアドレス</li>
        <li>お立場（任意：ネイルサロン／バー・飲食店／その他）</li>
        <li>登録日時と、ご利用のブラウザの種類</li>
      </ul>

      <h2 className="mt-8 font-bold">利用目的</h2>
      <ul className="mt-2 list-disc pl-5">
        <li>試作品の完成、テスト参加の募集、発売時期などのお知らせ</li>
        <li>どのような方に必要とされているかの把握（お立場の集計）</li>
      </ul>
      <p className="mt-2">上記以外の目的には使用しません。</p>

      <h2 className="mt-8 font-bold">第三者への提供</h2>
      <p className="mt-2">
        法令に基づく場合を除き、第三者に提供・販売することはありません。データは非公開設定のクラウドストレージ（Vercel）に保存しています。
      </p>

      <h2 className="mt-8 font-bold">配信停止・削除</h2>
      <p className="mt-2">
        お知らせメールに返信いただければ、配信停止と登録情報の削除をいたします。
      </p>

      <h2 className="mt-8 font-bold">アクセス解析</h2>
      <p className="mt-2">
        サイト改善のため、Cookieを使用しない匿名のアクセス解析（Vercel Web Analytics）を利用しています。
      </p>

      <p className="mt-10 text-xs text-muted">制定日：2026年10月18日</p>
    </main>
  );
}
