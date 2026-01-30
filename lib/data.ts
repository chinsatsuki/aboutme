// lib/data.ts
export const allCasesData: Record<string, any> = {
  "marine-world": {
    title: "Marine World",
    themeColor: "#00A3FF",
    firstViewImage: "/images/marine-first.jpg",
    analysis: {
      product: "水族館予約ミニプログラム",
      problem: "チケット購入プロセスが複雑...",
      goal: "予約体験の簡略化と再来館率の向上"
    },
    steps: [
      { number: "01", title: "User Research", description: "...", image: "/images/step1.jpg" },
      { number: "02", title: "UI Design", description: "...", image: "/images/step2.jpg" }
    ],
    learning: "...",
    relatedCases: []
  },

  "washoku": {
  title: "WASHOKU",
  themeColor: "#BE7643",
  // ... 其他内容
}
  // 之后可以在这里增加 "washoku", "lgbt" 等案例数据
};