import Container from "./Container";

// Placeholder for the GSAP/Three.js 3D widget + floating coins on the right.
// Marked clearly so it can be wired up separately.
function HeroVisualPlaceholder() {
  return (
    <div
      data-placeholder="hero-3d-widget"
      className="relative flex aspect-[620/520] w-full items-center justify-center overflow-hidden rounded-card"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue-3/10 to-cyber-blue-2/5" />
      <span className="relative z-10 select-none text-[14px] font-medium uppercase tracking-[1px] text-steel">
        [ 3D widget + coins — Three.js placeholder ]
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    // .hero.is-home { margin-top:60px }  — pearl page background
    <section className="hero is-home mt-sp-reg bg-pearl pb-sp-xl pt-sp-sm">
      <Container>
        {/* .hero__wrapper { display:flex; justify-content:center; align-items:stretch } */}
        <div className="flex flex-col items-stretch justify-center gap-sp-sm lg:flex-row">
          {/* Left copy column */}
          <div className="flex w-full flex-col justify-center lg:w-[52%]">
            {/* h1 — heading-style-h1: 90px / 100% / -1.8px (700 base in Webflow h1) */}
            <h1 className="font-saans text-[64px] font-bold leading-[100%] tracking-[-1.8px] text-off-black md:text-[80px] lg:text-[90px]">
              Build Headless On/offramp Experiences
            </h1>
            <p className="mt-[24px] max-w-[480px] text-[18px] leading-[150%] tracking-[-0.2px] text-body-copy">
              Unlock 30+ onramps, instant swaps, and streamlined offramps with
              the top ramp aggregator—everything you need through one simple
              integration. Every onramp. Zero friction.
            </p>
            <div className="mt-[32px]">
              <a
                href="#"
                className="inline-block rounded-button bg-off-black px-[30px] py-[18px] text-[20px] font-medium leading-[110%] tracking-[-0.2px] text-white transition-opacity hover:opacity-90"
              >
                Try 14 days free
              </a>
            </div>
          </div>

          {/* Right visual column */}
          <div className="flex w-full items-center justify-center lg:w-[48%]">
            <HeroVisualPlaceholder />
          </div>
        </div>
      </Container>

      {/* Cookie preferences chip (bottom-left fixed in original) */}
      <div className="pointer-events-none fixed bottom-[20px] left-[20px] z-50">
        <button className="pointer-events-auto flex items-center gap-2 rounded-[8px] bg-off-black px-[18px] py-[12px] text-[15px] font-medium text-white">
          <span className="text-[16px]">🍪</span> Preferences
        </button>
      </div>
    </section>
  );
}
