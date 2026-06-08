import Container from "./Container";
import { LogoMark, ArrowUpRight } from "./icons";

// .products__grid-item { flex column; justify-content:space-between }
function ProductCard({ title, copy, children, className = "", colSpan = "" }) {
  return (
    <div
      className={`products__grid-item relative z-[10] flex flex-col justify-between overflow-hidden rounded-card border border-pearl bg-pearl p-sp-sm ${colSpan} ${className}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-[8px]">
            <LogoMark className="h-[18px] w-auto" fill="#151515" />
            <h3 className="font-saans text-[26px] font-medium leading-[110%] tracking-[-0.6px] text-off-black">
              {title}
            </h3>
          </div>
          <p className="mt-[10px] max-w-[300px] text-[16px] leading-[140%] tracking-[-0.2px] text-body-copy">
            {copy}
          </p>
        </div>
        <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-cyber-blue-2 text-white">
          <ArrowUpRight className="h-[18px] w-[18px]" stroke="white" />
        </span>
      </div>
      <div className="mt-[28px]">{children}</div>
    </div>
  );
}

// Small fake widget swap row used inside Onramp/Offramp/Swaps cards
function SwapBox({ topLabel, topVal, topCur, botLabel, botVal, botCur, sub }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="rounded-[14px] bg-white p-[16px]">
        <p className="text-[13px] text-body-copy">{topLabel}</p>
        <div className="mt-[4px] flex items-center justify-between">
          <span className="text-[24px] font-medium text-off-black">
            {topVal}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-pearl px-[12px] py-[6px] text-[14px] font-medium text-off-black">
            {topCur} ▾
          </span>
        </div>
      </div>
      <div className="rounded-[14px] bg-white p-[16px]">
        <p className="text-[13px] text-body-copy">{botLabel}</p>
        <div className="mt-[4px] flex items-center justify-between">
          <span className="text-[24px] font-medium text-off-black">
            {botVal}
          </span>
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
    // .products__grid { padding: spacing-xxxl (180px) 0; background:white }
    <section className="products__grid bg-white py-sp-xxxl">
      <Container>
        {/* Centered header */}
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="font-saans text-[44px] font-medium leading-[100%] tracking-[-1.4px] text-off-black md:text-[60px] lg:text-[70px]">
            On and Off and everything in between.
          </h2>
          <p className="mx-auto mt-[20px] max-w-[460px] text-[18px] leading-[150%] tracking-[-0.2px] text-body-copy">
            Go to market lightning-fast with industry-leading flows, from
            onramps to offramps and swaps.
          </p>
        </div>

        {/* .products__grid-items { grid-template-columns:1fr 1fr; gap:34px } */}
        <div className="mt-sp-lg grid grid-cols-1 gap-[34px] md:grid-cols-2">
          <ProductCard
            title="Onramp"
            copy="Hit the ground running with our plug-and-play widget"
          >
            <SwapBox
              topLabel="You spend"
              topVal="200"
              topCur="EUR"
              botLabel="You get"
              botVal="0.072055"
              botCur="ETH"
            />
          </ProductCard>

          <ProductCard
            title="Offramp"
            copy="Offer effortless cash-outs globally"
          >
            <SwapBox
              topLabel="You send"
              topVal="0.001"
              topCur="BTC"
              botLabel="You get"
              botVal="94.4952"
              botCur="USD"
            />
          </ProductCard>

          <ProductCard
            title="Swaps"
            copy="Integrate cross-chain swaps effortlessly"
          >
            <SwapBox
              topLabel="You send"
              topVal="500"
              topCur="DAI"
              botLabel="You get"
              botVal="498.066668"
              botCur="USDT"
              sub="Swap by XOSwap"
            />
          </ProductCard>

          <ProductCard
            title="Terminal"
            copy="Get unique conversion insights across your entire stack"
          >
            <div
              data-placeholder="terminal-dashboard"
              className="flex h-[170px] items-center justify-center rounded-[14px] bg-white text-[13px] uppercase tracking-[1px] text-steel"
            >
              [ analytics dashboard art ]
            </div>
          </ProductCard>

          {/* Headless Ramps spans full width */}
          <ProductCard
            title="Headless Ramps"
            copy="Build a fully native onramp experience with complete UI control"
            colSpan="md:col-span-2"
          >
            <div
              data-placeholder="headless-code"
              className="rounded-[14px] bg-off-black p-[20px] font-mono text-[13px] leading-[160%] text-vibrant-teal-1"
            >
              <p className="text-steel">{`// initialize`}</p>
              <p>OnramperSDK.init({`{`}</p>
              <p className="pl-[16px]">apiKey: <span className="text-white">"pk_live_…"</span>,</p>
              <p className="pl-[16px]">theme: <span className="text-white">"native"</span></p>
              <p>{`})`}</p>
            </div>
          </ProductCard>
        </div>

        {/* Centered CTA — .products__grid-cta */}
        <div className="mt-sp-lg flex justify-center">
          <a
            href="#"
            className="rounded-button bg-off-black px-[30px] py-[18px] text-[20px] font-medium leading-[110%] tracking-[-0.2px] text-white transition-opacity hover:opacity-90"
          >
            Try 14 days free
          </a>
        </div>
      </Container>
    </section>
  );
}
