"use client";

import dynamic from "next/dynamic";
import Container from "./Container";

const Globe = dynamic(() => import("./Globe"), { ssr: false });

export default function GlobeHero() {
  return (
    <section id="globe" className="relative overflow-hidden bg-white py-sp-lg lg:py-sp-xxl">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyber-blue-2/10 blur-[100px] lg:h-[420px] lg:w-[420px] lg:blur-[130px]" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-sp-lg">
          {/* Copy */}
          <div className="w-full lg:max-w-[460px]">
            <p className="font-body text-[12px] font-bold uppercase tracking-[2.5px] text-cyber-blue-3">
              Global Reach
            </p>
            <h2 className="mt-3 font-saans text-[36px] font-bold leading-[100%] tracking-[-1.4px] text-off-black sm:text-[44px] md:text-[64px] lg:text-[70px]">
              Our Presence Worldwide
            </h2>
            <p className="mt-4 font-body text-[16px] leading-[150%] text-body-copy sm:text-[18px] lg:mt-5">
              From local food trucks to global disaster response, $GBACK funds
              relief across continents. Drag to spin the globe, and hover a
              highlighted country to see where outreach has reached.
            </p>
          </div>

          {/* Globe — full width on mobile */}
          <div className="w-full">
            <Globe />
          </div>
        </div>
      </Container>
    </section>
  );
}
