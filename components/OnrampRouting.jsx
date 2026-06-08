import Container from "./Container";

const TAGS = [
  "Payment method",
  "Amount",
  "Cryptocurrency",
  "KYC",
  "Country",
  "Fiat currency",
  "User risk profile",
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
      <div className="onramp flex min-h-[100vh] items-center py-sp-xxl">
        <Container>
          <div className="onramp_lottie-content-wrap mx-auto max-w-[820px] text-center">
            {/* 2x badge */}
            <div className="mx-auto mb-[28px] flex h-[120px] w-[120px] items-center justify-center rounded-card bg-off-black">
              <span className="font-saans text-[56px] font-medium leading-none tracking-[-1.8px] text-white">
                2x
              </span>
            </div>

            {/* heading */}
            <h2 className="font-saans text-[40px] font-medium leading-[105%] tracking-[-1.2px] text-off-black md:text-[56px] lg:text-[64px]">
              your volumes with smart APM and ramp recommendations
            </h2>
            <p className="mx-auto mt-[24px] max-w-[560px] text-[18px] leading-[150%] tracking-[-0.2px] text-body-copy">
              Serve the best ramps to each individual user, with dynamic
              recommendations based on conversion, price, and KYC friction.
            </p>

            {/* signal tags */}
            <div className="mt-[36px] flex flex-wrap items-center justify-center gap-[12px]">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-button border border-[#dcdce4] bg-white px-[20px] py-[12px] text-[16px] font-medium tracking-[-0.2px] text-off-black"
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
