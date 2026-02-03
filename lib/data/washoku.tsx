import { CaseData } from "@/types/case";
import WashokuHero from "@/components/cases/WashokuHero";

export const washokuData: CaseData = {
  id: "b01",
  group: "b",
  title: "和食通",
  titleEn: "WASHOKU",
  subtitleEn: "和食通",
  themeColor: "#027F75",
  firstViewImage: "/images/washoku/washoku-product.png",
  heroElement: <WashokuHero mainImage="/images/washoku/washoku-first.png" />,

  analysis: {
    product: "WASHOKU（和食通）は、中国のWeChatプラットフォームを基盤としたミニプログラムであり、中国人観光客が日本のレストランを簡単に電話で予約できるようサポートすることを目的としています。このミニプログラムは、言語の壁、インターネットの制限、日本の飲食文化への理解不足など、中国の観光客が直面しがちな課題に対して、効率的かつ便利なソリューションを提供します。",
    problem: "言語の壁やインターネットの制限、文化の違いにより、中国のお客様が日本のレストラン予約において情報収集やコミュニケーションに困難を感じることが多く、さらに事前の電話予約という日本特有の習慣に十分対応できていないケースが見られます。",
    goal: "中国ユーザーに安心感を提供するための事前カウンセリングや情報共有を実現するとともに、迅速かつ便利な電話予約代行サービスを通じて、希望する日本のレストランの予約プロセスをスムーズにサポートします。また、レストランとユーザー双方に対してリアルタイムで確認情報を提供することで、円滑な予約体験と全体的なユーザー満足度の向上を目指します。",
    role: "UXリサーチャー、UXUIデザインナー",
    timeline: "2023.10-2023.12",
    tools: "ps,figma,chatgpt"
  },

  steps: [
    {
      number: "01",
      title: "UNDERSTAND",
      jpTitle: "理解",
      points: ["調査背景", "ユーザー調査", "ニーズ現状", "リスクと挑戦"],
      sections: [
        {
          subTitle: "RESEARCH BACKGROUND |  調査背景",
          description: (
            <div className="flex flex-col gap-6 text-left">
              <p>日本政府観光局（JNTO）の発表によると、2024年の中国人観光客数は、698万1,200人でした。これは2023年と比較して、187.9％の伸び率です。日本が中国人観光客にとって人気の旅行先となる中、本格的な日本料理を味わうことが旅行の重要な体験の一つになっています。しかし、言語の壁や文化の違い、予約方法の分散などが原因で、特にミシュランやおまかせ料理店といった高級レストランの電話予約は、観光客にとって大きな課題となっています。</p>
            </div>
          )
        },
        {
          subTitle: "USER RESEARCH |  ユーザー調査",
          description: (
            <div className="flex flex-col gap-6 text-left">
              <p>上記の状況を踏まえ、私は2023年10月から12月にかけて、中国の副業APP「XIANYU」で「電話予約代理」として、100人以上の中国人観光客を対象に予約行動やニーズに関する調査を実施し、データ分析を行いました。本調査では、予約の情報源、予約希望時期、料理のカテゴリーなど、主要な要素を網羅しています。</p>
            </div>
          ),
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/washoku/01/1-1.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "NEEDS ANALYSIS |  ニーズ現状",
          description: (
            <div className="flex flex-col gap-6 text-left">
              <p>調査結果から、日本レストランの予約需要は主に中国の一線都市や沿海部の経済発展地域に集中しています。これらの地域のユーザーは、小紅書（中国のSNS）や大众点评（グルメサイト）を活用して情報を収集し、焼肉、すき焼き、Omakaseといった高級レストランに高い関心を示しています。</p>
            </div>
          ),
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/washoku/01/1-2.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "RISK and CHALLENGE |  リスクと挑戦",
          description: (
            <div className="flex flex-col gap-6 text-left">
              <p>1．情報源の限界：中国のネット上の情報は不完全または不正確で、予約の難易度を上げています。</p>
              <p>2．オンライン予約の障壁：TabelogやOmakaseなど予約サイトは存在するものの、言語対応の不足や支払い手段の制限（中国では支付宝や微信が主流）で電話予約に求め</p>
              <p>予約時期の偏り：予約は当日や1週間前に集中しているため、時間的制約で予約確保が困難し、スケジュール変更によるキャンセルや遅刻の可能性増加</p>
            </div>
          )
        }
      ]
    },
    {
      number: "02",
      title: "EMPATHIZE",
      jpTitle: "共感",
      points: ["ペルソナ(persona)", "ユーザージャニーマップ（User journey map) ", "ペインポイント(painpoint)", "ビジネスゴール（Business goal）"],
      sections: [
        {
          subTitle: "PERSONA |  ペルソナ",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/washoku/02/2-1.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "USER JOURNEY MAP |  ユーザージャニーマップ",
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/washoku/02/2-2.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "PAIN POINT |  ペインポイント",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/washoku/02/2-3.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "BUSINESS GOALS |  ビジネスゴール",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/washoku/02/2-4.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    },
    {
      number: "03",
      title: "DESIGN",
      jpTitle: "設計",
      points: ["情報設計（Information Architecture）", "ハイファイ・プロトタイプ（high fidelity prototype）"],
      sections: [
        {
          subTitle: "INFORMATION ARCHITECTURE |  情報アーキテクチャ",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/washoku/03/3-1.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "HIGH FIDELITY PROTOTYPE |  ハイファイプロトタイプ",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/washoku/03/3-2.png" className="w-full rounded-2xl" />
              <img src="/images/washoku/03/3-3.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    }
  ],

  learningData: [
    {
      title: "プロダクト・市場・運営は分離できない",
      desc: "WeChatミニプログラムの予約システムでは、プロダクト（UX）、市場（ユーザー & レストラン）、運営（プラットフォーム管理） の3つが密接に関連し、相互に依存しています。プロダクトのUXを最適化しても、市場（ユーザーやレストラン）が受け入れなければ、予約モデルは普及しません。また、市場の受け入れがあっても、運営管理が不十分であれば、ユーザー体験や信頼性に影響を与えます。そのため、ユーザー体験の向上、市場適応性、運営効率を同時に最適化する必要があります。例えば、予約システムによるコミュニケーションコストの削減、デポジット+残金支払いによるキャンセルリスクの低減、透明なキャンセルポリシーによるユーザーとプラットフォームの保護などが挙げられます。この3つのバランスが取れて初めて、持続可能なビジネスモデルを構築できます。"
    }
  ],
  relatedCases: [
    { title: "Rainbow+", image: "/images/cases/rainbow.jpg", link: "/case/rainbow" }
  ],
};