import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import type React from "react";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "サブスク解約",
	description: "面倒なサブスクの解約ページに一瞬で。",
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
