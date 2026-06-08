import Container from "./Container";

// A single value card. .value_card { aspect-ratio:620/717; border-radius:24px }
// .value_card-content { padding:40px; justify-content:space-between }
function ValueCard({ title, bg, titleColor, children }) {
  return (
    <div
      className="value_card relative aspect-[620/717] overflow-hidden rounded-card"
      style={{ background: bg }}
    >
      <div className="value_card-content absolute inset-0 z-[5] flex flex-col justify-between p-sp-sm">
        <h3
          className="max-w-[280px] font-saans text-[32px] font-medium leading-[105%] tracking-[-0.8px]"
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
    // .section_value-cards lives on white background below the pearl hero
    <section className="bg-white py-sp-xxl">
      <Container>
        {/* .three_card-header { justify-content:space-between; align-items:flex-start; margin-bottom:80px } */}
        <div className="mb-sp-lg flex flex-col items-start justify-between gap-sp-sm text-off-black lg:flex-row">
          {/* heading-style-h2: 90px / 100% / -1.8px / 500 */}
          <h2 className="max-w-[640px] font-saans text-[48px] font-medium leading-[100%] tracking-[-1.8px] md:text-[72px] lg:text-[90px]">
            Double the volumes with a fraction of the effort
          </h2>
          <div className="max-w-[360px] shrink-0">
            <p className="text-[18px] leading-[150%] tracking-[-0.2px] text-body-copy">
              Get the best of every onramp. Onramper puts an expansive network
              of onramps at your customers’ fingertips, and seamlessly matches
              them with the one best suited to meet their needs.
            </p>
            <a
              href="#"
              className="mt-[24px] inline-block rounded-button bg-off-black px-[30px] py-[18px] text-[20px] font-medium leading-[110%] tracking-[-0.2px] text-white transition-opacity hover:opacity-90"
            >
              Book a demo
            </a>
          </div>
        </div>

        {/* .value_cards { grid-template-columns:1fr 1fr; gap:40px } */}
        <div className="grid grid-cols-1 gap-sp-sm md:grid-cols-2">
          <ValueCard
            title="30+ ramps in one integration"
            bg="#efeef3"
            titleColor="#151515"
          >
            <div
              data-placeholder="value-card-ramps"
              className="flex h-[180px] items-end justify-center rounded-[16px] bg-white/60 text-[13px] uppercase tracking-[1px] text-steel"
            >
              [ ramps stack art ]
            </div>
          </ValueCard>

          <ValueCard
            title="130 payment methods"
            bg="linear-gradient(135deg,#1f00ff 0%,#1600d3 100%)"
            titleColor="#ffffff"
          >
            <div
              data-placeholder="value-card-payments"
              className="flex flex-wrap items-center justify-center gap-[10px]"
            >
              {["A", "Pay", "Pay", "UPI", "R", "W", "Grab", "S€PA", "p4f"].map(
                (m, i) => (
                  <span
                    key={i}
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white text-[12px] font-medium text-off-black"
                  >
                    {m}
                  </span>
                )
              )}
            </div>
          </ValueCard>

          <ValueCard
            title="Smart routing to optimize volumes"
            bg="#efeef3"
            titleColor="#151515"
          >
            <div
              data-placeholder="value-card-routing"
              className="flex flex-col gap-[10px]"
            >
              {[
                ["Revolut", "Best price", "0.0042 ETH"],
                ["Stripe", "", "0.0040 ETH"],
                ["Banxa", "", "0.003998 ETH"],
              ].map(([name, tag, amt], i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-[12px] bg-white px-[16px] py-[12px] shadow-sm"
                >
                  <div className="flex items-center gap-[10px]">
                    <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-off-black text-[12px] font-medium text-white">
                      {name[0]}
                    </span>
                    <div className="leading-tight">
                      <p className="text-[14px] font-medium text-off-black">
                        {name}
                      </p>
                      {tag && (
                        <p className="text-[12px] text-vibrant-teal-1">{tag}</p>
                      )}
                    </div>
                  </div>
                  <span className="text-[14px] font-medium text-off-black">
                    {amt}
                  </span>
                </div>
              ))}
            </div>
          </ValueCard>

          <ValueCard
            title="Re-use KYC across ramps"
            bg="linear-gradient(135deg,#5460ff 0%,#1f00ff 100%)"
            titleColor="#ffffff"
          >
            <div
              data-placeholder="value-card-kyc"
              className="flex flex-col items-center gap-[14px]"
            >
              <div className="flex w-full justify-between gap-[10px]">
                <span className="flex-1 rounded-[10px] bg-white/15 px-[12px] py-[10px] text-center text-[12px] text-white">
                  KYC Providers
                </span>
                <span className="flex-1 rounded-[10px] bg-white/15 px-[12px] py-[10px] text-center text-[12px] text-white">
                  Financial Institutions
                </span>
              </div>
              <div className="flex w-full justify-between gap-[10px]">
                {["Onramp 1", "Onramp 2", "Onramp 3"].map((o) => (
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
