import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { allCasesData } from "@/lib/data"; 
import { notFound } from "next/navigation";

// 💡 必须使用 async，因为 Next.js 15 的 params 是一个 Promise
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const data = allCasesData[id];

  // 如果 data.ts 里找不到对应的 key，就返回 404
  if (!data) {
    return notFound();
  }

  return <CaseStudyTemplate data={data} />;
}