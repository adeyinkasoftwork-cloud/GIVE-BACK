import Container from "./Container";

export default function PreFooter() {
  return (
    <section className="bg-primary px-4 pb-sp-lg pt-sp-lg">
      <Container className="!px-0">
        <div className="relative mx-auto overflow-hidden rounded-[24px] border border-white/10 sm:rounded-[28px]"
          style={{ background: "radial-gradient(120% 140% at 0% 100%, rgba(124,92,255,0.25) 0%, rgba(10,12,11,0.98) 45%, #060807 100%)" }}>
          {/* gradient arc */}
          <div className="pointer-events-none absolute right-[6%] top-[8%] h-[420px] w-[420px] rounded-full"
            style={{ background: "conic-gradient(from 200deg, #20C854, #6AFF9E, #f0c000, transparent 60%)", filter: "blur(2px)", opacity: 0.5, mask: "radial-gradient(closest-side, transparent 78%, #000 80%)", WebkitMask: "radial-gradient(closest-side, transparent 78%, #000 80%)" }} />

          <div className="relative grid grid-cols-1 items-center gap-6 p-6 sm:p-10 md:p-16 lg:grid-cols-2 lg:gap-8">
            {/* Left copy */}
            <div>
              <h2 className="font-saans text-[32px] font-bold leading-[1.02] tracking-[-1.4px] text-white sm:text-[44px] md:text-[64px]">
                Join the Movement
              </h2>
              <p className="mt-4 max-w-[440px] font-body text-[15px] leading-[1.6] text-white/65 sm:mt-5 sm:text-[18px]">
                Become part of a global community committed to feeding families, supporting shelters, and responding to crises with full transparency.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a href="/pages/how-to-buy" className="flex min-h-[48px] items-center justify-center rounded-full bg-white px-7 py-3.5 font-body text-[15px] font-bold text-primary transition-transform duration-300 hover:-translate-y-0.5 sm:min-h-0 sm:text-[16px]">
                  Buy $GBACK
                </a>
                <a href="/pages/impact" className="flex min-h-[48px] items-center justify-center rounded-full btn-glass px-7 py-3.5 font-body text-[15px] font-bold text-white sm:min-h-0 sm:text-[16px]">
                  Explore Impact
                </a>
              </div>
            </div>

            {/* Right: spinning dotted globe (desktop only) */}
            <div className="relative hidden h-[360px] items-center justify-center lg:flex">
              <div className="dotted-globe" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
