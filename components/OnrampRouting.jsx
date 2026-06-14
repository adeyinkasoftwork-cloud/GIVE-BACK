import Container from "./Container";

const TAGS = [
  "On-chain wallets",
  "Public reserves",
  "Community votes",
  "Verified on Solana",
  "Liquidity locked",
  "1B total supply",
];

// The original pins this section and scrubs through several frames
// (badge → "Smart payment method recommendations" → live widget) via GSAP
// ScrollTrigger. We render the static first frame and mark the pin wrapper
// as a placeholder so the scroll animation can be wired up separately.
export default function OnrampRouting() {
  return (
    <div
      data-placeholder="gsap-scroll-pinned-section"
      className="pin-spacer relative bg-pearl"
    >
      <div className="onramp flex min-h-[100vh] items-center py-sp-lg lg:py-sp-xxl">
        <Container>
          <div className="onramp_lottie-content-wrap mx-auto max-w-[820px] text-center">
            {/* 2x badge */}
            <div className="mx-auto mb-[28px] flex h-[120px] w-[120px] items-center justify-center rounded-card bg-off-black">
              <span className="font-saans text-[40px] font-bold leading-none tracking-[-1.2px] text-white">
                50%+
              </span>
            </div>

            {/* heading */}
            <h2 className="font-saans text-[30px] font-bold leading-[102%] tracking-[-1.2px] text-off-black sm:text-[40px] md:text-[56px] lg:text-[64px]">
of every transaction goes to humanitarian aid
            </h2>
            <p className="mx-auto mt-[24px] max-w-[560px] text-[18px] leading-[150%] tracking-[-0.2px] text-body-copy">
              Direct funding for meals, shelters, and disaster relief, with
              every donation, wallet, and reserve fully visible on-chain.
            </p>

            {/* signal tags */}
            <div className="mt-[36px] flex flex-wrap items-center justify-center gap-[12px]">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-button border border-[#dcdce4] bg-white px-[20px] py-[12px] text-[15px] font-bold tracking-[-0.2px] text-off-black sm:text-[16px]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
