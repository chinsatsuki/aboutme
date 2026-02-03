import { CaseData } from "@/types/case";
import SalonHero from "@/components/cases/SalonHero";

export const salonsiteData: CaseData = {
  id: "a01",
  group: "a",
  title: "サロンサイトのリニューアル",
  titleEn: "SALON SITE RENEWAL",
  subtitleEn: "ParisDeSkin",
  themeColor: "#44834D",
  heroElement: <SalonHero mainImage="/images/salon/salon-first.png" />,
  analysis: {
    product: "本Webサイトは、全国に展開するエステ＆アイラッシュサロン(パリスデスキン)のブランドとしての統一感と信頼感を強化し、既存のお客様への情報提供と、新規のお客様の獲得につなげるためのオフィシャルサイトとしてリニューアルします。",
    goal: (
      <div>
        <p>①ブランドとしての統一感あるデザイン--------全店共通で“洗練された・安心感ある”世界観を演出</p>
        <p>② 店舗別の詳細ページと導線------------------各店独自の情報も掲載しつつ、一貫性を保つ</p>
        <p>③ 予約ボタンの導線強化--------既存の予約管理システム（Hotpepper/LINE/その他）へ自然に誘導</p>
        <p>④スマホファースト対応----------------------主要ユーザーがスマホ閲覧のため、レスポンシブ対応は必須</p>
        <p>⑤SEO対策とSNS連携	-----------------------ブランド名・地域名で検索された際に上位表示を狙う＋LINEとの連携強化</p>
      </div>
    ),
    role: "UXUIデザイナー",
    timeline: "2025.06.02-2025.06.27",
    tools: "ps,figma,chatgpt"
  },

  steps: [
    {
      number: "01",
      title: "UNDERSTAND",
      jpTitle: "理解",
      points: ["旧HPの課題特定", "３C分析（Company、Customer、Competitor）"],
      sections: [
        {
          subTitle: "PAIN POINT |  ペインポイント",
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/salon/01/1-1.png" className="w-full rounded-2xl" />
              <img src="/images/salon/01/1-2.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: " 3C ANALYSIS|３C分析",
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/salon/01/1-3.png" className="w-full rounded-2xl" />
              <img src="/images/salon/01/1-4.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    },
    {
      number: "02",
      title: "DESIGN",
      jpTitle: "設計",
      points: ["情報アーキテクチャ(IA)", "デザインシステム（design system）"],
      sections: [
        {
          subTitle: "INFORMATION ARCHITECTURE |  情報アーキテクチャ",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/salon/02/2-1.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "DESIGN  SYSTEM |  デザインシステム",
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/salon/02/2-2.png" className="w-full rounded-2xl" />
              <img src="/images/salon/02/2-3.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    },
  ],

  learningData: [
    {
      title: "ブランドイメージとユーザーの定着化",
      desc: "旧サイトは複数のブランドロゴや情報の階層が混乱しているため、「古く感じる」という印象を与えていました。実際、ユーザーの誘導やブランド印象の定着がうまくいっていませんでした。ですので、デザインの過程で、すべてのデザイン要素（色、フォント、画像）がブランドのコアバリューや感情的な体験に一致するようにすることが重要です。ブランドイメージを改善するために、色調、画像スタイル、レイアウト、アイコンなど、すべてを統一することが必要です。"
    }
  ],
  relatedCases: [
    { title: "Rainbow+", image: "/images/cases/rainbow.jpg", link: "/case/rainbow" }
  ],
  prototypeUrl: "https://paris-de-skin.jp/",
};