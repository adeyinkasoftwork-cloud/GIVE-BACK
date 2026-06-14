import Container from "./Container";
import CountUp from "./CountUp";
import { LogoMark, ArrowUpRight } from "./icons";

function ProductCard({ title, copy, children, className = "", colSpan = "" }) {
  return (
    <div
      className={`products__grid-item group relative z-[10] flex flex-col justify-between overflow-hidden rounded-card p-6 transition-transform duration-300 hover:-translate-y-1.5 lg:p-sp-sm ${colSpan} ${className}`}
      style={{
        background: "linear-gradient(150deg, rgba(255,255,255,0.75) 0%, rgba(220,255,232,0.55) 100%)",
        backdropFilter: "blur(18px) saturate(160%)",
        WebkitBackdropFilter: "blur(18px) saturate(160%)",
        border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "0 12px 40px rgba(13,35,43,0.10), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary/20 blur-[50px]" />
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-[8px]">
            <LogoMark className="h-[18px] w-auto" fill="#0D232B" />
            <h3 className="font-saans text-[22px] font-bold leading-[110%] tracking-[-0.6px] text-off-black sm:text-[26px]">
              {title}
            </h3>
          </div>
          <p className="mt-[10px] max-w-[300px] text-[15px] leading-[155%] tracking-[-0.2px] text-body-copy sm:text-[16px]">
            {copy}
          </p>
        </div>
        <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-cyber-blue-2 text-white">
          <ArrowUpRight className="h-[18px] w-[18px]" stroke="white" />
        </span>
      </div>
      <div className="mt-[24px]">{children}</div>
    </div>
  );
}

function SwapBox({ topLabel, topVal, topCur, botLabel, botVal, botCur, sub }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="rounded-[14px] bg-white p-[16px]">
        <p className="text-[13px] text-body-copy">{topLabel}</p>
        <div className="mt-[4px] flex items-center justify-between">
          <span className="text-[24px] font-medium text-off-black">{topVal}</span>
          <span className="flex items-center gap-1 rounded-full bg-pearl px-[12px] py-[6px] text-[14px] font-medium text-off-black">
            {topCur} ▾
          </span>
        </div>
      </div>
      <div className="rounded-[14px] bg-white p-[16px]">
        <p className="text-[13px] text-body-copy">{botLabel}</p>
        <div className="mt-[4px] flex items-center justify-between">
          <span className="text-[24px] font-medium text-off-black">{botVal}</span>
          <span className="flex items-center gap-1 rounded-full bg-pearl px-[12px] py-[6px] text-[14px] font-medium text-off-black">
            {botCur} ▾
          </span>
        </div>
        {sub && <p className="mt-[6px] text-[12px] text-body-copy">{sub}</p>}
      </div>
    </div>
  );
}

export default function ProductsGrid() {
  return (
    <section id="impact" className="products__grid bg-white py-sp-lg lg:py-sp-xxxl">
      <Container>
        {/* Centered header */}
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="font-saans text-[32px] font-bold leading-[100%] tracking-[-1.4px] text-off-black sm:text-[44px] md:text-[60px] lg:text-[70px]">
            Real Impact, In Real Time
          </h2>
          <p className="mx-auto mt-4 max-w-[460px] text-[16px] leading-[150%] tracking-[-0.2px] text-body-copy sm:text-[18px] lg:mt-[20px]">
            Impact that's visible, verifiable, and happening right now.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-[34px] lg:mt-sp-lg">
          <ProductCard
            title="People Helped worldwide"
            copy="Direct aid delivered through meals, shelter, relief support, and through presence, care, and connection."
          >
            <CountUp end={5200} suffix="+" className="font-saans text-[52px] font-bold leading-none text-cyber-blue-2 sm:text-[64px]" />
          </ProductCard>

          <ProductCard
            title="Meals Provided"
            copy="Partnering across communities to feed families, uplift lives, and build a culture of care."
          >
            <CountUp end={7200} suffix="+" className="font-saans text-[52px] font-bold leading-none text-cyber-blue-2 sm:text-[64px]" />
          </ProductCard>

          <ProductCard
            title="Disaster Responses"
            copy="Rapid emergency assistance funded by $GBACK contributions."
          >
            <p className="font-saans text-[34px] font-bold leading-none text-cyber-blue-2 sm:text-[40px]">
              We Stand Ready
            </p>
          </ProductCard>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:mt-sp-lg">
          <a
            href="/pages/impact"
            className="rounded-button bg-off-black px-[30px] py-[16px] text-center text-[18px] font-bold leading-[110%] tracking-[-0.2px] text-white transition-opacity hover:opacity-90 sm:py-[18px] sm:text-[20px]"
          >
            Explore Impact
          </a>
        </div>
      </Container>
    </section>
  );
}
