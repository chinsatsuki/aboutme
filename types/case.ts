export interface DesignStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface CaseData {
  title: string;
  themeColor: string; // 例如: "#5D5FEF" (紫色) 或 "#00A3FF" (蓝色)
  firstViewImage: string;
  analysis: {
    product: string;
    problem: string;
    goal: string;
  };
  steps: DesignStep[];
  learning: string;
  relatedCases: { title: string; image: string; link: string }[];
}