import { CaseData } from "@/types/case";
import SoohomeHero from "@/components/cases/SoohomeHero";

export const soohomeData: CaseData = {
  id: "b03",
  group: "b",
  title: "SooHome",
  titleEn: "THE FACTORY WEBSITE",
  subtitleEn: "Soohome INDUSTRY",
  themeColor: "#E29F2F",
  firstViewImage: "/images/soohome/soohome-first.png",
  heroElement: <SoohomeHero mainImage="/images/soohome/soohome-first.png" />,

  analysis: {
    product: "SooHomeは中国安徽省に位置するダウン・フェザー製品工場である。工場の主な事業内容は、中国国内からダウン・フェザーの原料を購入し、洗浄した後、国内外の企業に販売することである。SooHomeの会社オフィシャルウェブサイトは、工場と海外の顧客との架け橋となっており、海外の顧客様に最新の製品情報や工場動向を展示している。",
    problem: "海外顧客は輸出事業を持っている「SooHome」というダウン・フェザー工場に魅了されることができない。",
    goal: "ダウン・フェザー製品を探している海外顧客のニーズを応える競争力を表現し、見積を得るために中国工場のBtoBオフィシャルウェブサイトをデザインする。",
    role: "UXUIデザイナー",
    timeline: "2023.10-2023.11",
    tools: "ps,xd"
  },

  steps: [
    {
      number: "01",
      title: "UNDERSTAND",
      jpTitle: "理解",
      points: ["クライアント概要", "ユーザー調査", "SWOT分析", "クライアント・ユーザーニーズとのバランス"],
      sections: [
        {
          subTitle: "SooHome", // 卡片内标题
          description: (
            <div className="flex flex-col gap-6 text-left">
              <p>SooHomeは、白シナガチョウの故郷である中国安徽省六安市に位置し、約22,440平方メートルの敷地面積を持っている。供給業者として、主要な業務はダウン＆フェザー洗浄と販売であり、加工、販売、および海外輸出貿易を統合した羽毛企業である。</p>
              <p>ダウンとフェザーはそのSooHomeの主要製品で、ダウンは主にアパレル産業に、フェザーはホームテキスタイル産業に販売されている。現在、中国国内を含め、北米、ブラジル、ヨーロッパなどの地域がその工場の取引地域である。</p>
            </div>
          ),
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/soohome/01/1-1.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "ユーザー調査",
          description: (
            <div className="flex flex-col gap-6 text-left">
              <p>私はSooHome（SHUNHE）の通訳担当として、2018年のドイツ・フランクフルトのホームテキスタイル展示会と2023年の日本・FaW東京展示会の2回の国際展示会に参加した。その間、様々な国の顧客がSooHomeに対して持っているのニーズを知る機会があった。</p>
            </div>
          ),
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/soohome/01/1-2.png" className="w-full rounded-2xl" />
              <img src="/images/soohome/01/1-3.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "ニーズのバランス",
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/soohome/01/1-4.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    },
    {
      number: "02",
      title: "DESIGN",
      jpTitle: "設計",
      points: ["情報アーキテクチャ(IA)", "デザインシステム（design system）", "ローファーイプロトタイプ（low fidelity prototype）", "ハイファイ・プロトタイプ（high fidelity prototype）"],
      sections: [
        {
          subTitle: "INFORMATION ARCHITECTURE |  情報アーキテクチャ",
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/soohome/02/2-1.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "DESIGN  SYSTEM |  デザインシステム",
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/soohome/02/2-2.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "LOW FIDELITY PROTOTYPE |  ローファーイプロトタイプ",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/soohome/02/2-3.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "HIGH FIDELITY PROTOTYPE |  ハイファイプロトタイプ",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/soohome/02/2-4.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    }
  ],

  learningData: [
    {
      title: "クライアントとエンドユーザーのニーズのバランスが必要",
      desc: "BtoBのクライアントから依頼をいただいても、実際のニーズがユーザーのニーズと合うかどうかは必ずしも明確ではない。両者のワークフローとカスタマージャーニーを深く調査・理解・分析し、真の課題をバランスして抽出する必要がある。"
    }
  ],
  relatedCases: [
    { title: "Rainbow+", image: "/images/cases/rainbow.jpg", link: "/case/rainbow" }
  ],
  prototypeUrl: "https://xd.adobe.com/view/5dbc28a0-7b95-4a86-a5ee-9f2b7054b92",
};