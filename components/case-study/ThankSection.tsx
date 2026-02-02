// components/case-study/ThankSection.tsx
import { CaseData } from "@/types/case";

export default function ThankSection({ data }: { data: CaseData }) {
  const { themeColor } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-40 flex flex-col items-center justify-center text-center">
      {/* 1. 核心文案：使用主题色 */}
      <div className="mb-16">
        <h2
          className="text-[32px] font-black tracking-widest mb-4"
          style={{ color: themeColor }}
        >
          THANK YOU FOR VIEWING !
        </h2>
        <p
          className="text-[24px] font-bold"
          style={{ color: themeColor }}
        >
          ご覧いただきありがとうございます。
        </p>
      </div>

      {/* 2. BACK TO TOP 按钮 */}
      <button
        onClick={scrollToTop}
        className="group flex flex-col items-center gap-4 transition-transform hover:-translate-y-2"
      >
        <span className="text-[14px] font-bold tracking-tighter text-black">
          BACK TO TOP
        </span>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
          style={{ color: themeColor }}
        >
          {/* 使用简单的 SVG 向上箭头 */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4l-8 8h6v8h4v-8h6l-8-8z" />
          </svg>
        </div>
      </button>
    </section>
  );
}