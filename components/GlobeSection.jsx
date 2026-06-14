"use client";
import Container from "./Container";
import ImageCarousel from "./ImageCarousel";

export default function GlobeSection() {
  return (
    <section id="relief" className="bg-pearl pt-16 lg:pt-[103px]">
      <Container>
        <div className="flex flex-col gap-8 pb-sp-lg lg:flex-row lg:items-center lg:gap-16 lg:pb-sp-xxl">
          {/* Left: copy */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-saans text-[32px] font-bold leading-[100%] tracking-[-1.4px] text-off-black sm:text-[44px] md:text-[64px] lg:text-[70px]">
              Turning Blockchain Transparency Into Global Relief
            </h2>
            <p className="mt-4 text-[16px] leading-[150%] tracking-[-0.2px] text-body-copy sm:text-[18px] lg:mt-[20px]">
              A community-powered system turning generosity into continuous
              humanitarian funding, with every donation, wallet, and impact fully
              visible on-chain.
            </p>
            <div className="mt-6 lg:mt-[28px]">
              <a
                href="/pages/impact"
                className="inline-block rounded-button btn-green px-[28px] py-[15px] text-[16px] font-bold leading-[110%] tracking-[-0.2px] sm:px-[30px] sm:py-[18px] sm:text-[18px]"
              >
                Why $GBACK Matters
              </a>
            </div>
          </div>

          {/* Right: video */}
          <div className="w-full overflow-hidden rounded-[20px] lg:ml-auto lg:w-1/4">
            <video
              className="w-full rounded-[14px] object-cover"
              src="/videos/video 2.mp4"
              poster="/cover/preview.png"
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </Container>

      {/* Full-width carousel */}
      <div className="w-full px-4 pb-sp-lg md:px-16 lg:px-24 lg:pb-sp-xxl">
        <ImageCarousel />
      </div>
    </section>
  );
}
