import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import type React from "react";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "【公式】サブスク解約くん - Netflix・Spotify・Huluの解約ページへ",
		template: "%s | サブスク解約くん",
	},
	description:
		"Netflix、Spotify、Hulu、Amazonプライム、YouTube Premiumなどのサブスク解約方法を完全ガイド。無料で解約リンクへアクセスできます。",
	applicationName: "サブスク解約くん",
	authors: [{ name: "サブスク解約くん運営", url: "https://www.kaiyakun.com" }],
	generator: "Next.js",
	keywords: [
		"サブスク解約",
		"Netflix解約",
		"Spotify解約",
		"Amazonプライム退会",
		"YouTube Premium解約",
		"Hulu解約",
		"Disney+退会",
		"解約方法",
		"定額サービスキャンセル",
	],
	referrer: "origin-when-cross-origin",
	viewport: "width=device-width, initial-scale=1.0",
	creator: "サブスク解約くん運営",
	publisher: "サブスク解約くん",
	robots: "index, follow",
	// alternates: {
	// 	canonical: "https://www.kaiyakun.com",
	// 	hreflang: {
	// 		ja: "https://www.kaiyakun.com",
	// 		en: "https://www.kaiyakun.com/en",
	// 	},
	// },
	// icons: {
	// 	icon: "/favicon.ico",
	// 	apple: "/apple-touch-icon.png",
	// },
	// manifest: "/site.webmanifest",
	// openGraph: {
	// 	type: "website",
	// 	url: "https://www.kaiyakun.com",
	// 	title: "サブスク解約くん - Netflix・Spotify・Huluの簡単な解約方法",
	// 	description:
	// 		"Netflix、Spotify、Hulu、Amazonプライム、YouTube Premiumなどのサブスク解約方法を完全ガイド。無料で解約リンクへアクセスできます。",
	// 	siteName: "サブスク解約くん",
	// 	images: [
	// 		{
	// 			url: "https://www.kaiyakun.com/og-image.jpg",
	// 			width: 1200,
	// 			height: 630,
	// 			alt: "サブスク解約くん - 簡単に解約",
	// 		},
	// 	],
	// },
	// twitter: {
	// 	card: "summary_large_image",
	// 	site: "@your_twitter_handle",
	// 	creator: "@your_twitter_handle",
	// 	title: "サブスク解約くん - Netflix・Spotify・Huluの簡単な解約方法",
	// 	description:
	// 		"Netflix、Spotify、Hulu、Amazonプライム、YouTube Premiumなどのサブスク解約方法を完全ガイド。",
	// 	images: ["https://www.kaiyakun.com/twitter-card.jpg"],
	// },
	// verification: {
	// 	google: "your-google-site-verification-code",
	// },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body className={`${notoSansJP.className} bg-orange-50`}>{children}</body>
		</html>
	);
}
