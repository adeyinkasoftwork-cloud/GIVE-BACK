import Container from "./Container";

function ValueCard({ title, bg, titleColor, children }) {
  return (
    <div
      className="value_card relative aspect-[620/717] overflow-hidden rounded-card"
      style={{ background: bg }}
    >
      <div className="value_card-content absolute inset-0 z-[5] flex flex-col justify-between p-6 lg:p-sp-sm">
        <h3
          className="max-w-[280px] font-saans text-[26px] font-bold leading-[102%] tracking-[-1px] sm:text-[32px]"
          style={{ color: titleColor }}
        >
          {title}
        </h3>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

export default function ValueCards() {
  return (
    <section id="why" className="bg-white py-sp-lg lg:py-sp-xxl">
      <Container>
        <div className="mb-8 flex flex-col items-start justify-between gap-6 text-off-black lg:mb-sp-lg lg:flex-row lg:gap-sp-sm">
          <h2 className="max-w-[640px] font-saans text-[32px] font-bold leading-[100%] tracking-[-1.8px] sm:text-[48px] md:text-[72px] lg:text-[90px]">
            Why People Believe in $GBACK
          </h2>
          <div className="w-full max-w-[360px] shrink-0">
            <p className="text-[16px] leading-[150%] tracking-[-0.2px] text-body-copy sm:text-[18px]">
              A system where every transaction creates real, visible change ,
              with every donation, wallet, and impact fully visible on-chain.
            </p>
            <a
              href="/pages/about"
              className="mt-5 inline-block w-full rounded-button bg-off-black px-[30px] py-[16px] text-center text-[18px] font-bold leading-[110%] tracking-[-0.2px] text-white transition-opacity hover:opacity-90 sm:w-auto sm:py-[18px] sm:text-[20px] lg:mt-[24px]"
>
              How It Works
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-sp-sm">
          <ValueCard
            title="50%+ to Humanitarian Aid"
            bg="#efeef3"
            titleColor="#151515"
          >
            <div
              data-placeholder="value-card-ramps"
              className="flex h-[140px] items-end justify-center rounded-[16px] bg-white/60 text-[12px] uppercase tracking-[1px] text-steel sm:h-[180px]"
            >
              Direct funding for meals, shelters, and disaster relief.
            </div>
          </ValueCard>

          <ValueCard
            title="Transparent on Chain"
            bg="linear-gradient(135deg,#20C854 0%,#159C40 100%)"
            titleColor="#ffffff"
          >
            <div
              data-placeholder="value-card-payments"
              className="flex flex-wrap items-center justify-center gap-[10px]"
            >
              <p className="text-[14px] leading-[150%] text-white/90 sm:text-[15px]">
                All donation wallets and reserves are publicly verifiable on the
                Solana blockchain.
              </p>
            </div>
          </ValueCard>

          <ValueCard
            title="Community Decisions"
            bg="#efeef3"
            titleColor="#151515"
          >
            <div
              data-placeholder="value-card-routing"
              className="flex flex-col gap-[10px]"
            >
              {[
                ["United Food Bank", "Funded"],
                ["Brothers 4 Hope", "Voting"],
                ["Healing Hearts", "Proposed"],
              ].map(([name, tag], i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-[12px] bg-white px-[16px] py-[12px] shadow-sm"
                >
                  <div className="flex items-center gap-[10px]">
                    <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-off-black text-[12px] font-medium text-white">
                      {name[0]}
                    </span>
                    <div className="leading-tight">
                      <p className="text-[13px] font-medium text-off-black sm:text-[14px]">{name}</p>
                      <p className="text-[12px] text-vibrant-teal-1">{tag}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ValueCard>

          <ValueCard
            title="Immediate & Long-Term Impact"
            bg="linear-gradient(135deg,#42A02A 0%,#20C854 100%)"
            titleColor="#ffffff"
          >
            <div
              data-placeholder="value-card-kyc"
              className="flex flex-col items-center gap-[14px]"
            >
              <div className="flex w-full justify-between gap-[10px]">
                <span className="flex-1 rounded-[10px] bg-white/15 px-[10px] py-[10px] text-center text-[12px] text-white">
                  Crisis Response
                </span>
                <span className="flex-1 rounded-[10px] bg-white/15 px-[10px] py-[10px] text-center text-[12px] text-white">
                  Housing Programs
                </span>
              </div>
              <div className="flex w-full justify-between gap-[10px]">
                {["Meals", "Shelter", "Relief"].map((o) => (
                  <span
                    key={o}
                    className="flex-1 rounded-[10px] bg-white/15 px-[8px] py-[10px] text-center text-[12px] text-white"
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </ValueCard>
        </div>
      </Container>
    </section>
  );
}
