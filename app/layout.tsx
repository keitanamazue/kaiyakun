import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "サブスクリプション解約ハブ",
  description: "各種サブスクリプションサービスの解約ページへのクイックリンク",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} bg-orange-50`}>{children}</body>
    </html>
  )
}

