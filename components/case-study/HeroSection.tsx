import { CaseData } from "@/types/case";
import BookHero from "../cases/BookHero";
import BrochureHero from "../cases/BrochureHero";
import CrowdHero from "../cases/CrowdHero";

export default function HeroSection({ data }: { data: CaseData }) {
  const isBookDesign = data.id === "c02";
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center" style={{ padding: "90px 75px" }}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10" style={{ backgroundColor: `${data.themeColor}CC` }} />
      </div>
      <div className="relative z-20 w-full flex flex-col gap-1 mb-10 text-left">
        <h2 className="text-white text-[48px] font-bold leading-[1.1] tracking-tight uppercase">
          {data.titleEn || "PROJECT"}
        </h2>
        <h3 className="text-black text-[40px] font-bold opacity-90">{data.title}</h3>
      </div>
      <div className="relative z-30 flex-1 flex items-center justify-center w-full ">
        {isBookDesign ? (
          <BookHero
            mainImage={data.mainImage || ""}
            hoverImage={data.hoverImage}
          />
        ) : (
          data.heroElement || <img src={data.firstViewImage} className="h-[70vh] object-contain" alt="" />
        )}
      </div>
    </section>
  );
}