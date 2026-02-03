import { CaseData } from "@/types/case";
import CrowdHero from "@/components/cases/CrowdHero";

export const crowdData: CaseData = {
  id: "c01",
  group: "c",
  title: "PROJECT HEI",
  titleEn: "CROWDFUNDING PAGE DESIGN",
  subtitleEn: "PROJECT HEI",
  themeColor: "#44834D",
  heroElement: <CrowdHero mainImage="/images/crowd/crowd-first.png" />,
  analysis: {
    product: "PROJECT HEIは、2016年にローンチされたクラウドファンディングプロジェクトで、人間中心設計という原則に基づき、中国の伝統的な素材で作られ、中国風茶道体験を楽しめると同時に便利さを感じられる製品である。",
    problem: (
      <div className="flex flex-col gap-8 w-full">
        <img src="/images/crowd/1-1.png" className="w-full rounded-2xl" />
      </div>
    ),
    goal: (
      <div>
        <p>HEIのクラウドファンディングを通じて、世界中の人々がアジアの茶器の美しさを感じ、製品のデザイン思考や使用方法などをユーザーに理解してもらう。そして、最終的にクラウドファンディングの金額を達成するようにクラウドファンディングのページをデザインするのは、今後のビジネス展開に応用できるように製品価値とユーザーニーズを検証し、自社ブランドの認知度を向上させるためである。</p>
      </div>
    ),
    role: "私はこのプロジェクトの責任者として、クラウドファンディングのページデザイン（マーケット調査、競合調査、スケッチなど）、動画企画、SNS運営、広告運用やデータ分析などを行い。3ヶ月以内にこのプロジェクトをクラウドファンディングに成功させた（目標金額の三倍以上）。",
    timeline: "2016.10-2017.01",
    tools: "ps"
  },

  steps: [
    {
      number: "01",
      title: "EMPATHIZE",
      jpTitle: "共感",
      points: ["ユーザー調査：クラウドファンディングを利用しているユーザー特徴を絞る。", "プラットフォーム調査：Kickstarterとういクラウドファンディングのプラットフォームの特徴を調査、成功事例収集・分析。", "競合調査：Kickstarterでの類似製品を収集・分析"],
    },
    {
      number: "02",
      title: "DEFINE",
      jpTitle: "定義",
      points: ["ターゲティング：ユーザー特徴を分析し、ニーズを洗い出す。", "情報アーキテクチャ（IA）：ユーザーニーズを基づいて、製品のストーリーを完成し、情報やコンテンツを分類、構造化。"],
      sections: [
        {
          subTitle: "INFORMATION ARCHITECTURE |  情報アーキテクチャ",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/crowd/1-2.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    },
    {
      number: "03",
      title: "IDEATE",
      jpTitle: "アイデア化",
      points: ["ワイヤーフレーム：ページの内容をスケッチ。"],
      sections: [
        {
          subTitle: "WIREFRAME |  ワイヤーフレーム",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/crowd/1-3.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    },
    {
      number: "04",
      title: "DESIGN",
      jpTitle: "設計",
      points: ["デザイングループと一緒にデザインする"],
      sections: [
        {
          subTitle: "FINAL WORK |  最終成果",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/crowd/1-4.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    },
    {
      number: "05",
      title: "LAUNCH",
      jpTitle: "執行と検証",
      points: ["広告投入：Google adsでSNSと動画サイトに広告運用", "データ分析：Google analyticsで購入データを分析", "ユーザー分析：アンケートからユーザーの国籍など情報獲得"],
      sections: [
        {
          subTitle: "DATA ANALYSIS |  データ分析",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/crowd/1-5.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    }
  ],

  learningData: [
    {
      title: "コンセプトから製品になるまで磨きが必要",
      desc: "プロダクトデザインのライフサイクルはそんなに簡単には終わらない。単なる外形や機能のためだけでなく、ユーザー調査とフィードバックの受け入れを通じてユーザーの真のニーズを探求し、調整していく必要がある。これは、さまざまな分野の知識がUXデザイナーの成長に役立つことを実感した。面白いと感じたのは、Kickstarterのビジネスモデルが、クリエイターたちがプロトタイプを展示し、試行錯誤し、調整する機会を提供することである。"
    }
  ],
  relatedCases: [
    { title: "Rainbow+", image: "/images/cases/rainbow.jpg", link: "/case/rainbow" }
  ],
  prototypeUrl: "https://www.kickstarter.com/projects/defront-congo/project-hei-a-modern-way-to-enjoy-asian-tea-ceremo",
};