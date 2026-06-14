import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? new URL(process.env.NEXT_PUBLIC_BASE_URL)
  : new URL("https://koshi-nakano.vercel.app");

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    template: "%s | Koshi Nakano",
    default: "Koshi Nakano | AI-native full-stack engineer",
  },
  description: "要件定義からフロント・バック・インフラ・MLまで、分業なしで一人で完結させるAIネイティブなフルスタックエンジニア。",
  keywords: [
    "フルスタックエンジニア",
    "AIエンジニア",
    "フリーランス",
    "Next.js",
    "FastAPI",
    "RAG",
    "LightGBM",
    "AWS",
    "GCP",
    "Koshi Nakano",
    "中野康志",
  ],
  authors: [{ name: "Koshi Nakano" }],
  openGraph: {
    title: "Koshi Nakano | AI-native full-stack engineer",
    description: "要件定義から実装・MLまで一人で完結。AIプロダクトの開発や、経営層向けAIニュース配信など、ビジネスの課題をAI実装力で突破します。",
    type: "website",
    locale: "ja_JP",
    url: baseUrl,
    siteName: "Koshi Nakano Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koshi Nakano | AI-native full-stack engineer",
    description: "要件定義から実装・MLまで一人で完結。AIプロダクトの開発や、経営層向けAIニュース配信など、ビジネスの課題をAI実装力で突破します。",
    creator: "@koshi_nakano",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
