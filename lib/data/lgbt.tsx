import { CaseData } from "@/types/case";
import LgbtHero from "@/components/cases/LgbtHero";

export const lgbtData: CaseData = {
  id: "b02",
  group: "b",
  title: "RAINBOW+",
  titleEn: "LGBT ORGANIZATION APP",
  subtitleEn: "SOCIAL SUPPORT",
  themeColor: "#7640EC",
  firstViewImage: "/images/lgbt/lgbt-product.png",
  heroElement: <LgbtHero mainImage="/images/lgbt/lgbt-first.png" />,

  analysis: {
    product: "RAINBOW+ は、LGBTQ関連のボランティアやNPO組織、企業に対して組織管理、オンライン学習、コミュニティ連絡などのサービスを提供する総合サービスプラットフォームである。",
    problem: "LGBTQ団体や関連企業のメンバーがイベントの作成や実施にあたっては、経験やリソースの不足により、組織管理、イベント企画で多くの挑戦に直面している。",
    goal: "LGBTQ団体や関連企業すべてに学習と情報共有のリソースプラットフォームを構築し、各方面へのエンパワーメントを通じて社会的な価値とビジネス価値のウィンウィンを実現する。このアプリは団体や企業が情報をより効率的に取得し、チームを構築し、イベントを作成することを容易にする。一般の個人がこれらのNGOやLGBTコミュニティを理解し、社会のダイバーシティの発展を促進する。",
    role: "UXUIデザイナー",
    timeline: "2023.06-2023.10",
    tools: "ps,figma,chatgpt"
  },

  steps: [
    {
      number: "01",
      title: "UNDERSTAND",
      jpTitle: "理解",
      points: ["ユーザー調査：自身経験とアンケートで九州であるLGBTQ組織リーダーとメンバーからリサーチ"],
      sections: [
        {
          subTitle: "USER RESEARCH |  ユーザー調査", // 卡片内标题
          description: (
            <div className="flex flex-col gap-6 text-left">
              <p>私は九州のあるLGBT団体で支部長としての経験を通じて、自団体のリーダーやメンバーにアンケート調査を行い、LGBTボランティア活動を支援した外資系大手企業の従業員にインタビューをした。</p>
              <p>ダイバーシティへの認識増加とインターネットの普及により、日本では様々な規模のボランティアやNPOなどの団体が自発的にLGBTに関する活動を行っている。これらの団体は多様な目標を持ち、同性婚の合法化、地方マイノリティーの認知度向上、職場での性的マイノリティーの平等への注目などを推進している。団体のメンバーは主に中学生から大学生のZ世代やα世代で、多くはLGBT当事者ではなく、アライとして自由、平等、多様性を尊重する価値観から参加している。このようなイベントは常に社会のダイバーシティ価値を関心している企業と緊密な繋がりがある。</p>
            </div>
          ),
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/lgbt/01/1-1.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    },
    {
      number: "02",
      title: "EMPATHIZE",
      jpTitle: "共感",
      points: ["ペルソナ(persona)", "ペインポイント(painpoint)", "ユーザージャーニーマップ(user journey map)"],
      sections: [
        {
          subTitle: "PERSONA |  ペルソナ",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/lgbt/02/2-1.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "USER JOURNEY MAP |  ユーザージャニーマップ",
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/lgbt/02/2-2.png" className="w-full rounded-2xl" />
            </div>
          )
        },
      ]
    },
    {
      number: "03",
      title: "DESIGN",
      jpTitle: "設計",
      points: ["情報アーキテクチャ（IA）", "ワイヤーフレーム(wireframe)", "ハイファイ・プロトタイプ（high fidelity prototype）"],
      sections: [
        {
          subTitle: "INFORMATION ARCHITECTURE |  情報アーキテクチャ",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/lgbt/03/3-1.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "WIREFRAME |  ワイヤーフレーム",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/lgbt/03/3-2.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "HIGH FIDELITY PROTOTYPE |  ハイファイプロトタイプ",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/lgbt/03/3-3.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    },
    {
      number: "04",
      title: "TEST",
      jpTitle: "テスト",
      points: ["ユーザビリティテスト（usability test）", "改善(revamp)"],
      sections: [
        {
          subTitle: "USABILITY STUDY: NEW FINDINGS |  ユーザビリティ　スタディ",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/lgbt/04/4-1.png" className="w-full rounded-2xl" />
            </div>
          )
        },
        {
          subTitle: "REVAMP |  改善",
          description: ["", ""],
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/lgbt/04/4-2.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    }
  ],

  learningData: [
    {
      title: "複数のユーザーコミュニティの共通点を見つけ、社会価値を高め",
      desc: "当初はLGBT団体のユーザーだけを考えていたが、関連企業まで拡張した。これは、イベントに深く関わった後に得た認識であり、異なるコミュニティでも共通の社会的価値があれば、良好な価値連鎖を実現できると感じた。それも、このアプリをデザインしていた期間時心躍る瞬間であった。"
    },
    {
      title: "ユーザーシナリオは具体的でなければならない",
      desc: "カスタマージャーニーによれば、ユーザーグループの行動パターンは固定されたイメージに留まるわけではない。たとえばLGBT団体に対するイメージはイベント主催である場合、イベント関連だけで良いと見えるが、実際には、個々の活動以外のコミュニケーション、学習、社交などの具体的なシナリオも、団体やコミュニティ関係を維持する上で重要な部分である。これも製品価値を向上させる上で非常に重要だと考える。"
    }
  ],
  relatedCases: [
    { title: "Rainbow+", image: "/images/cases/rainbow.jpg", link: "/case/rainbow" }
  ],
  prototypeUrl: "https://www.figma.com/proto/NYNaEpU2c2oZeYW3qTJu3i/rainbow%2B?type=design&node-id=124-3&t=rUOYQXVUClgqMJFs-1&scaling=scale-down&page-id=124%3A2&starting-point-node-id=132%3A8&show-proto-sidebar=1&mode=design",
};