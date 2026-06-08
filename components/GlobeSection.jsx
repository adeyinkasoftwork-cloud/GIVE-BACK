"use client";

import { useState } from "react";
import Container from "./Container";

// Clean placeholder for the interactive Three.js globe — to be wired separately.
function GlobePlaceholder() {
  return (
    <div
      data-placeholder="threejs-globe"
      className="relative flex aspect-square w-full max-w-[460px] items-center justify-center"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyber-blue-3 via-cyber-blue-2 to-cyber-blue-1 opacity-90" />
      <span className="relative z-10 select-none text-center text-[13px] font-medium uppercase tracking-[1px] text-white/80">
        [ interactive globe
        <br />
        Three.js placeholder ]
      </span>
    </div>
  );
}

export default function GlobeSection() {
  const [tab, setTab] = useState("onramps"); // React state only — no storage

  return (
    // .offramps-globe.is-pearl { background:white; padding-top:103px }
    <section className="offramps-globe bg-pearl pb-sp-xxl pt-[103px]">
      <Container>
        {/* .globe__block */}
        <div className="flex flex-col items-center gap-sp-lg lg:flex-row lg:items-center lg:justify-between">
          {/* Left: copy + controls */}
          <div className="w-full max-w-[440px]">
            {/* heading-style-h3: 70px / 100% / -1.4px / 500 */}
            <h2 className="font-saans text-[44px] font-medium leading-[100%] tracking-[-1.4px] text-off-black md:text-[64px] lg:text-[70px]">
              Meet your users where they are. Every time.
            </h2>
            <p className="mt-[20px] text-[18px] leading-[150%] tracking-[-0.2px] text-body-copy">
              Over 175+ payment methods and counting…
            </p>

            {/* Onramps / Offramps toggle */}
            <div className="mt-[28px] inline-flex rounded-button bg-white p-[6px]">
              {[
                ["onramps", "Onramps"],
                ["offramps", "Offramps"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`rounded-button px-[24px] py-[12px] text-[16px] font-medium tracking-[-0.2px] transition-colors ${
                    tab === key
                      ? "bg-cyber-blue-2 text-white"
                      : "text-off-black"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Country search */}
            <div className="mt-[16px] flex items-center gap-[10px] rounded-button bg-white px-[20px] py-[14px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="6"
                  stroke="#929292"
                  strokeWidth="1.6"
                />
                <path
                  d="M16 16L12.5 12.5"
                  stroke="#929292"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              <input
                className="w-full bg-transparent text-[16px] tracking-[-0.2px] text-off-black placeholder:text-body-copy focus:outline-none"
                placeholder="Search by country..."
                readOnly
              />
            </div>
          </div>

          {/* Right: globe */}
          <div className="flex w-full justify-center lg:w-auto">
            <GlobePlaceholder />
          </div>
        </div>
      </Container>
    </section>
  );
}
