// lib/data/brocuhure.tsx
import BrochureHero from "@/components/cases/BrochureHero";
import { CaseData } from "@/types/case";

export const BrochureData: CaseData = {
  id: "c03",
  group: "c",
  title: "会社パンフレット",
  titleEn: "BROCHURE DESIGN",
  subtitleEn: "会社パンフレット",
  themeColor: "#4288BD",
  firstViewImage: "/images/brochure/brochure-product.png",
  heroElement: <BrochureHero mainImage="/images/brochure/brochure-first.png" />,

  analysis: {
    product: "2004年に設立された中国金帝エネルギーグループは、上流（採掘）・中流（運輸）・下流（販売）までの天然ガス事業を拡大し続けている。中国浙江省のリーディング企業として、金帝エネルギーは自身のブランド影響力を追求している。このパンフレットでは金帝エネルギーグループの歴史、産業と企業文化を説明する。",
    goal: "シンプルなスタイルと読みやすいデータおよび図表を使用し、金帝エネルギーグループの実力をお客様にかつ明確に伝える。",
    role: "アルバイトとしてこのパンフレットの制作を担当、会社資料収集管理、デザイン会社・制作会社と相談",
    timeline: "2020.07-2021.01",
    tools: "ps"
  },

  steps: [
    {
      sections: [
        {
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/brochure/1-2.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    },
  ],

  learningData: [
    {
      title: "レス・イズ・モア（少ないほど良い）",
      desc: "2004年以降の会社の歴史や数多くの子会社の状況を調査した。資料とデータは膨大だが、企業のパンフレットの目的は、歴史書として読むことではなく、持ち運びやすく、一目で他人の目を引き、説得力を持たせることである。重要なポイントが多すぎるとポイントがなくなるため、読者が読みやすいように、シンプルなアプローチが必要である。"
    }
  ],
  relatedCases: [
    { title: "Rainbow+", image: "/images/cases/rainbow.jpg", link: "/case/rainbow" }
  ],
  prototypeUrl: "",

};