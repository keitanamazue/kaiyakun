"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";

const categories = [
	{ id: "video", name: "動画配信" },
	{ id: "music", name: "音楽ストリーミング" },
	{ id: "other", name: "生活・その他" },
	{ id: "food", name: "フードデリバリー" },
	{ id: "education", name: "教育" },
];

const subscriptionServices = [
	{
		name: "Netflix",
		logo: "/logos/netflix-logo.png",
		cancelUrl: "https://www.netflix.com/jp/cancelplan",
		description: "映画・ドラマ・アニメ見放題",
		category: "video",
	},
	{
		name: "Amazon Prime Video",
		logo: "/logos/amazon-prime.png",
		cancelUrl: "https://www.amazon.co.jp/gp/video/settings",
		description: "プライム会員なら映画・ドラマ見放題",
		category: "video",
	},
	{
		name: "Disney+",
		logo: "/logos/disney-plus.png",
		cancelUrl: "https://www.disneyplus.com/ja-jp/account/subscription",
		description: "ディズニー・マーベル・スターウォーズ作品",
		category: "video",
	},
	{
		name: "Hulu",
		logo: "/logos/hulu.png",
		cancelUrl: "https://www.hulu.jp/account",
		description: "国内ドラマ・バラエティが充実",
		category: "video",
	},
	{
		name: "U-NEXT",
		logo: "/logos/u-next.png",
		cancelUrl: "https://www.netflix.com/cancelplan",
		description: "映画・ドラマ・アニメに加えて雑誌も読める",
		category: "video",
	},
	{
		name: "ABEMAプレミアム",
		logo: "/logos/abema.png",
		cancelUrl: "https://abema.tv/my/premium",
		description: "ABEMAの限定コンテンツ見放題",
		category: "video",
	},
	{
		name: "Spotify",
		logo: "/logos/spotify.png",
		cancelUrl: "https://www.spotify.com/jp/account/subscription/",
		description: "無料でも聴けるが広告あり",
		category: "music",
	},
	{
		name: "Apple Music",
		logo: "/logos/apple-music.png",
		cancelUrl: "https://music.apple.com/jp/account",
		description: "iPhoneユーザーに人気",
		category: "music",
	},
	{
		name: "Amazon Prime",
		logo: "/logos/amazon-prime.png",
		cancelUrl: "https://www.amazon.co.jp/mm/pipeline/cancellation",
		description: "送料無料・動画・音楽・本の特典つき",
		category: "other",
	},
	{
		name: "ChatGPT Plus",
		logo: "/logos/chat-gpt.png",
		cancelUrl: "https://chat.openai.com/membership",
		description: "AIの応答が高速になる",
		category: "other",
	},
	{
		name: "NewsPicks プレミアム",
		logo: "/logos/news-picks.png",
		cancelUrl: "https://newspicks.com/settings/premium",
		description: "経済ニュースの解説付き",
		category: "other",
	},
	{
		name: "YouTube Premium",
		logo: "/logos/youtube-premium.png",
		cancelUrl: "https://www.youtube.com/paid_memberships",
		description: "広告なしでYouTubeを楽しめる",
		category: "video",
	},
	{
		name: "chochozap",
		logo: "/logos/choco-zap.svg",
		cancelUrl: "https://chochozap.com/mypage",
		description: "漫画や雑誌が読み放題",
		category: "other",
	},
	{
		name: "Amazon Music Prime",
		logo: "/logos/amazon-music.png",
		cancelUrl: "https://music.amazon.co.jp/settings",
		description: "Amazonプライム会員向け音楽ストリーミング",
		category: "music",
	},
	{
		name: "Figma",
		logo: "/logos/figma.png",
		cancelUrl: "https://www.figma.com/account",
		description: "デザインツール",
		category: "other",
	},
	{
		name: "Canva",
		logo: "/logos/canva.png",
		cancelUrl: "https://www.canva.com/account/billing/",
		description: "グラフィックデザインプラットフォーム",
		category: "other",
	},
	{
		name: "Uber Eats",
		logo: "/logos/uber-eats.png",
		cancelUrl: "https://www.ubereats.com/jp/account/eats-pass",
		description: "フードデリバリーサービス",
		category: "food",
	},
	{
		name: "出前館",
		logo: "/logos/demaekan.png",
		cancelUrl: "https://demae-can.com/mypage/premium/",
		description: "フードデリバリーサービス",
		category: "food",
	},
];

export default function Home() {
	const [activeCategory, setActiveCategory] = useState("video");

	return (
		<main className="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold text-center text-orange-800 mb-12">
					解約くん
				</h1>
				<p className="text-xl text-center text-orange-700 mb-12">
					面倒なサブスクの解約ページに一瞬で。
				</p>
				<Tabs defaultValue="video" className="w-full mb-8">
					<TabsList className="grid w-full grid-cols-3 sm:grid-cols-5">
						{categories.map((category) => (
							<TabsTrigger
								key={category.id}
								value={category.id}
								onClick={() => setActiveCategory(category.id)}
								className="data-[state=active]:bg-orange-200 data-[state=active]:text-orange-800"
							>
								{category.name}
							</TabsTrigger>
						))}
					</TabsList>
				</Tabs>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{subscriptionServices
						.filter((service) => service.category === activeCategory)
						.map((service) => (
							<Card
								key={service.name}
								className="hover:shadow-lg transition-shadow duration-300 bg-white"
							>
								<CardHeader className="bg-white rounded-t-lg">
									<div className="w-full h-24 relative mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
										<Image
											src={service.logo}
											alt={`${service.name}のロゴ`}
											layout="fill"
											objectFit="contain"
											priority
											onError={(e) => {
												const img = e.target as HTMLImageElement;
												img.onerror = null;
												img.src = "";
											}}
										/>
									</div>
									<CardTitle className="text-orange-800">
										{service.name}
									</CardTitle>
									<CardDescription className="text-orange-600">
										{service.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Button
										asChild
										className="w-full bg-orange-500 hover:bg-orange-600"
									>
										<a
											href={service.cancelUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											解約ページへ
										</a>
									</Button>
								</CardContent>
							</Card>
						))}
				</div>
				<div className="mt-12 text-center text-sm text-orange-700">
					<p>
						このサイトは情報提供のみを目的としています。各サービスの解約ポリシーは変更される可能性があります。
					</p>
					<p>
						このサイトは上記のサービスと正式に提携しているものではありません。
					</p>
				</div>
			</div>
		</main>
	);
}
