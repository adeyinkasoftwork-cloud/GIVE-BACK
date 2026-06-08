import Container from "./Container";

const FOOTER_LOGOS = [
  "Gate.io",
  "Cake Wallet",
  "Bitcoin.com",
  "Coinbase Wallet",
  "Trust Wallet",
  "Solflare",
  "Kraken",
];

// .pre__footer { background-color:#0093ff; background-image:<blue avif>; min-height:555px;
//                padding: 155px 0 }  — bright cyber-blue gradient with floating coins.
export default function PreFooter() {
  return (
    <section className="pre__footer section gradient-container relative overflow-hidden bg-onramp-blue">
      {/* blue gradient backdrop (stands in for the pre-footer .avif) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0093ff] via-cyber-blue-2 to-cyber-blue-1" />

      {/* floating coin blobs — Lottie/3D placeholders */}
      <div
        data-placeholder="pre-footer-coin-tl"
        className="absolute -left-[60px] top-[40px] h-[260px] w-[260px] rounded-full bg-cyber-blue-3/40 blur-[2px]"
      />
      <div
        data-placeholder="pre-footer-coin-br"
        className="absolute -right-[40px] bottom-[20px] h-[300px] w-[300px] rounded-full bg-vibrant-teal-1/30 blur-[2px]"
      />

      <Container className="relative z-10">
        <div className="pre__footer-copy py-[40px]">
          {/* heading-style-h2 scale, white */}
          <h2 className="font-saans text-[56px] font-medium leading-[100%] tracking-[-1.8px] text-white md:text-[90px] lg:text-[110px]">
            Plug. Play. Prosper.
          </h2>

          <p className="mt-[32px] max-w-[600px] text-[22px] leading-[140%] tracking-[-0.4px] text-white">
            Empower your users with 30+ onramps and 175+ payment options, all in
            just eight lines of code.
          </p>

          <div className="mt-sp-lg flex flex-col items-start gap-[24px]">
            <p className="font-saans text-[34px] font-medium leading-[110%] tracking-[-0.8px] text-white md:text-[44px]">
              Limited-time offer |&nbsp;try 14 days free
            </p>
            <a
              href="#"
              className="rounded-button bg-off-black px-[34px] py-[20px] text-[20px] font-medium leading-[110%] tracking-[-0.2px] text-white transition-opacity hover:opacity-90"
            >
              Get Started
            </a>
          </div>
        </div>
      </Container>

      {/* bottom logo marquee */}
      <div className="pre__footer-marquee-wrap relative z-10 border-t border-white/15 py-sp-sm">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-x-[40px] gap-y-[20px]">
            {FOOTER_LOGOS.map((name) => (
              <span
                key={name}
                className="whitespace-nowrap text-[22px] font-bold tracking-[-0.4px] text-white"
              >
                {name}
              </span>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
