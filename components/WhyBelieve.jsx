"use client";

import Container from "./Container";

function Icon({ d, stroke = "#0D232B" }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={stroke}
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

const HEART = "M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z";
const SHIELD = "M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z";
const USERS = "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z";
const BOLT = "M13 2L3 14h9l-1 8 10-12h-9z";

export default function WhyBelieve() {
  return (
    <section id="why" className="relative overflow-hidden bg-white py-sp-lg lg:py-sp-xxl">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-saans text-[32px] font-bold leading-[1.02] tracking-[-1.2px] text-off-black sm:text-[40px] md:text-[64px]">
            Why People Believe in <span className="text-cyber-blue-1">$GBACK</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] font-body text-[16px] text-body-copy sm:mt-5 sm:text-[18px]">
            A system where every transaction creates real, visible change, with every donation, wallet, and impact fully visible on-chain.
          </p>
        </div>

        {/* ROW 1 */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:mt-sp-lg lg:grid-cols-2 lg:gap-6">
          {/* Left: rotating token stack */}
          <div className="relative overflow-hidden rounded-[24px] border border-black/5 bg-[#FBFCFD] p-6 shadow-[0_20px_60px_rgba(13,35,43,0.08)] lg:rounded-[28px] lg:p-10">
            <div className="mx-auto mb-6 flex h-[130px] w-full max-w-[280px] items-center justify-center rounded-full bg-white shadow-[0_20px_50px_rgba(13,35,43,0.12)] lg:mb-10 lg:h-[150px] lg:max-w-[300px]">
              <div className="token-carousel relative h-[110px] w-[200px]">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`token-orb token-orb-${i}`}>
                    <span className="flex h-full w-full items-center justify-center rounded-full">
                      <Icon d={i === 0 ? HEART : i === 1 ? SHIELD : USERS} stroke="#fff" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="font-saans text-[32px] font-bold leading-[1.02] tracking-[-1.2px] text-off-black sm:text-[40px] md:text-[52px]">
              50%+ to Humanitarian Aid
            </h3>
            <p className="mt-4 max-w-[420px] font-body text-[15px] leading-[1.6] text-body-copy sm:text-[16px]">
              Direct funding for meals, shelters, and disaster relief.
            </p>
          </div>

          {/* Right: floating on-rail badges */}
          <div className="relative overflow-hidden rounded-[24px] border border-black/5 bg-[#FBFCFD] p-6 shadow-[0_20px_60px_rgba(13,35,43,0.08)] lg:rounded-[28px] lg:p-10">
            <p className="max-w-[360px] font-body text-[17px] leading-[1.5] text-off-black sm:text-[20px]">
              All donation wallets and reserves are publicly verifiable on the Solana blockchain.
            </p>
            <h3 className="mt-5 font-saans text-[28px] font-bold tracking-[-0.8px] text-off-black sm:mt-6 sm:text-[32px]">
              Transparent on Chain
            </h3>
            {/* rails + floating badges */}
            <div className="relative mt-6 h-[160px] sm:mt-8 sm:h-[180px]">
              {[
                { d: BOLT, c: "#0D232B", x: "70%", delay: "0s" },
                { d: SHIELD, c: "#7C5CFF", x: "30%", delay: ".6s" },
                { d: HEART, c: "#20C854", x: "50%", delay: "1.1s" },
                { d: USERS, c: "#2f6bff", x: "12%", delay: "1.6s" },
              ].map((b, i) => (
                <div key={i} className="float-badge" style={{ left: b.x, top: `${20 + (i % 2) * 60}px`, animationDelay: b.delay }}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg" style={{ background: b.c }}>
                    <Icon d={b.d} stroke="#fff" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:mt-6 lg:grid-cols-2 lg:gap-6">
          {/* Left: orbital ring CTA */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-black/5 bg-[#FBFCFD] p-6 shadow-[0_20px_60px_rgba(13,35,43,0.08)] lg:rounded-[28px] lg:p-10">
            <p className="max-w-[360px] font-body text-[16px] leading-[1.5] text-off-black sm:text-[18px]">
              Community Decisions, holders vote on which nonprofits and projects receive funding.
            </p>
            <div className="relative mt-8 flex h-[180px] items-center justify-center sm:h-[200px]">
              {/* orbit rings */}
              <div className="absolute h-[180px] w-[280px] rounded-[50%] border border-black/10 sm:h-[200px] sm:w-[300px]" />
              <div className="absolute h-[130px] w-[210px] rounded-[50%] border border-black/10 sm:h-[150px] sm:w-[230px]" />
              {/* orbiting sphere */}
              <div className="orbit-sphere" />
              <a href="/pages/about" className="relative z-10 rounded-full btn-green px-8 py-4 font-body text-[16px] font-bold shadow-[0_18px_40px_rgba(32,200,84,0.4)] sm:px-10 sm:text-[18px]">
                How It Works
              </a>
            </div>
          </div>

          {/* Right: floating logo badge value card */}
          <div className="relative overflow-hidden rounded-[24px] border border-black/5 bg-[#FBFCFD] p-6 shadow-[0_20px_60px_rgba(13,35,43,0.08)] lg:rounded-[28px] lg:p-10">
            <div className="relative mx-auto mb-6 flex h-[130px] items-center justify-center sm:mb-8 sm:h-[150px]">
              {/* ghost wireframe cards */}
              <div className="absolute h-[90px] w-[80%] rounded-2xl bg-black/[0.03]" />
              <div className="absolute h-[110px] w-[70%] rounded-2xl bg-black/[0.04]" />
              <div className="floating-badge flex h-20 w-20 items-center justify-center rounded-full bg-[#0D232B] shadow-[0_18px_40px_rgba(0,0,0,0.3)]">
                <Icon d={BOLT} stroke="#20C854" />
              </div>
            </div>
            <h3 className="font-saans text-[32px] font-bold leading-[1.02] tracking-[-1.2px] text-off-black sm:text-[40px] md:text-[48px]">
              Immediate & Long-Term Impact
            </h3>
            <p className="mt-4 font-body text-[15px] leading-[1.6] text-body-copy sm:text-[16px]">
              From crisis response to stable housing programs.
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
}
