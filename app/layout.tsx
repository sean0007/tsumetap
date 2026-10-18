import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const noto = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = "https://tsumetap.vercel.app";
const TITLE = "ツメタップ｜ジェルネイルのままタッチパネルを操作";
const DESCRIPTION =
  "ジェルネイルの爪先はレジやオーダー用iPad、スマホに反応しません。ジェル施術でお好きな1本に金の導電ラインを封入する「ツメタップ」を開発中。テスト施術のお知らせを受け取るウェイトリスト。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ja_JP",
    siteName: "ツメタップ TsumeTap",
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
  themeColor: "#fdf8f6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${noto.variable} antialiased`}>
      <body className="min-h-dvh">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
