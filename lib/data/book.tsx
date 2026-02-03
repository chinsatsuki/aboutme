// lib/data/marineworld.ts
import BookHero from "@/components/cases/BookHero";
import { CaseData } from "@/types/case";

export const bookData: CaseData = {
  id: "c02",
  group: "c",
  title: "ブックデザイン",
  titleEn: "BOOK DESIGN",
  subtitleEn: "ブックデザイン",
  themeColor: "#6F7521",
  firstViewImage: "/images/book/book-product.png",
  mainImage: "/images/book/book-first.png",
  hoverImage: "/images/book/book-first-open.png",

  analysis: {
    product: "教育指導者として、私はとある学生（卢ちゃん）が小学校卒業までの6年間、彼女と共に歩んできた。彼女を見守った6年間の成長、喜びと感動をもらった。そして、その期間の作文、絵画、写真を集め、愛情を込めてこの97ページの回顧録を作った。",
    goal: "この回顧録は、彼女の貴重な思い出を大切にするだけでなく、彼女が優秀で可愛らしい女の子であることを感じてもらうことができるように願っている。",
    role: "教育指導者や友達としての観察、イラストデザイン、作品収集、作品集編集・デザイン",
    timeline: "2013.09-2019.05",
    tools: "ps,csp"
  },

  steps: [
    {
      sections: [
        {
          image: (
            <div className="flex flex-col gap-8 w-full">
              <img src="/images/book/1-1.png" className="w-full rounded-2xl" />
            </div>
          )
        }
      ]
    },
  ],

  learningData: [
    {
      title: "プロダクトの精神的な価値",
      desc: "BtoCプロダクトが提供できる価値特性は、機能価値、情緒価値、精神価値であり、これらは製品の種類や使用シーンによって異なる。この本を作る際に本人に対しての目的は、本の持ち主が自分の過去に自信と慰めを感じ、人生の最も暗い時でも手に取って心を癒し、勇気を与えることができるようにすることという精神価値である。"
    }
  ],
  relatedCases: [
    { title: "Rainbow+", image: "/images/cases/rainbow.jpg", link: "/case/rainbow" }
  ],
  prototypeUrl: "",

};