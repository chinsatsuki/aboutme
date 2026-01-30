// lib/data.ts
import MarineHero from "@/components/cases/MarineHero";
import { CaseData } from "@/types/case";

export const allCasesData: Record<string, CaseData> = {
  "marine-world": {
    title: "水族館アプリ",
    titleEn: "THE AQUARIUM APP",
    subtitleEn: "MARINE WORLD",
    themeColor: "#0075C0",
    firstViewImage: "/images/marine/marine-first.png",
    heroElement: <MarineHero mainImage="/images/marine/marine-first.png" />,

    analysis: {
      product: "水族館予約ミニプログラム",
      problem: "国内外の来館者にとって、既存アプリの利用プロセスが煩雑で、チケット購入や訪問計画の策定が不便な状態でした。",
      goal: "利便性の高いチケット購入システムを構築し、来館者のスケジュール管理ニーズに応える直感的なアプリをデザインする。",
      role: "UXUIデザイナー",
      timeline: "2023.06-2023.10",
      tools: "ps,figma" // 建议用小写，方便 ToolIcon 匹配图片
    },

    // --- 重点：Process 专有数据部分 ---
    steps: [
      {
        number: "01",
        title: "UNDERSTAND",
        jpTitle: "理解", // 对应数字上方日语标题
        points: ["クライアント調査", "SWOT分析", "競合調査"], // 对应右侧分点
        subTitle: "マリンワールド水族館", // 卡片内标题
        description: (
          <div className="flex flex-col gap-6 text-left">
            <p>2017年に「大人も楽しめる水族館」としてリニューアルオープンした「マリンワールド海の中道」は、福岡県福岡市東区にある水族館。</p>
            <p>「海の中道」と呼ばれる砂州に位置する海の中道海浜公園の敷地内に立地している。周辺を海と公園に囲まれているため、福岡市内ではあるが市街地の喧騒から離れた自然豊かな環境にある。館内には、九州の海をテーマに、350種3万点の海の生き物が展示されている。</p>
          </div>
        ),
        image: (
          <div className="flex flex-col gap-8 w-full">
            <img src="/images/marine/01/1-1.jpg" className="w-full rounded-2xl" />
            <img src="/images/marine/01/1-2.jpg" className="w-full rounded-2xl" />
          </div>
        )
      },
      {
        number: "02",
        title: "RESEARCH",
        jpTitle: "調査",
        points: ["ユーザーインタビュー", "ペルソナ設定", "ジャーニーマップ"],
        subTitle: "ユーザーニーズの把握",
        description: ["", ""],
        image: (
          <div className="flex flex-col gap-8 w-full">
            <img src="/images/marine/01/1-1.jpg" className="w-full rounded-2xl" />
            <img src="/images/marine/01/1-2.jpg" className="w-full rounded-2xl" />
          </div>
        )
      },
      {
        number: "03",
        title: "DESIGN",
        jpTitle: "設計",
        points: ["ワイヤーフレーム", "スタイルガイド", "プロトタイプ"],
        subTitle: "直感的な操作性",
        description: "暗い館内でも見やすい高コントラストなUIを採用し、チケット購入までのステップを最小限に短縮しました。",
        image: "/images/marine/process-03.jpg"
      }
    ],

    learning: "このプロジェクトを通じて、BtoC向けミニプログラムにおける決済フローの簡略化がユーザー体験に与える影響の大きさを学びました。",
    relatedCases: [
      { title: "Rainbow+", image: "/images/cases/rainbow.jpg", link: "/case/rainbow" }
    ]
  },
};