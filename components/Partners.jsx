"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";

const TESTIMONIALS = [
  { quote: "I like that there is actual value and backing behind the coin and that it helps make the community a better place. I appreciate the stride everyone is making.", name: "KASH money", role: "Community member", style: "white", rot: -6 },
  { quote: "I hold GBACK because it lets my belief in a better world live inside my investment. Value isn't just what you gain, it's what you give.", name: "earlybirdsgettheworm", role: "Community Member", style: "green", rot: -3 },
  { quote: "Because of $GBACK I have something to be excited about everyday. I love following the family working hard for strangers that don't have it easy.", name: "ackstermannen", role: "Community Member", style: "dark", rot: 2 },
  { quote: "I believe there's still hope for humanity. I've been watching the team and saw they were working harder than any projects out there.", name: "Let's Win!", role: "Community member", style: "white", rot: 5 },
  { quote: "THERE IS NOTHING LIKE GIVEBACK. Taking funds from a trillion dollar industry and placing it directly into the hands of vulnerable people is revolutionary.", name: "MR Bull", role: "team member", style: "green", rot: -4 },
  { quote: "It's made me completely rethink and structure what I do with any extra money I have. In addition to tithing for my church, GBack is my main focus now.", name: "Airambassador", role: "Community Member", style: "dark", rot: 4 },
  { quote: "GBACK has allowed me to get my parents bigger Christmas presents than usual. When I saw their faces light up, it made something click that I love giving.", name: "KiloP", role: "Community Member", style: "white", rot: -2 },
  { quote: "I work in the nonprofit sector and having a passion for a mission is what drives me. It is up to people like us and platforms like GBACK to be the engine for them.", name: "jeff ukrainec", role: "Vice president, Goodwill", style: "green", rot: 3 },
]

const STYLE = {
  white: "bg-white text-off-black",
  green: "bg-gradient-to-br from-cyber-blue-2 to-cyber-blue-1 text-white",
  dark: "bg-[#0D232B] text-white",
};

function Stars({ light }) {
  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24"
          fill={light ? "#6AFF9E" : "#20C854"}>
          <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.3 5.8 20.9l1.6-6.8L2.2 8.9l6.9-.6z" />
        </svg>
      ))}
    </div>
  );
}

// Desktop fan card
function Card({ t, i, total, hovered, setHovered }) {
  const spread = 150;
  const offset = (i - (total - 1) / 2) * spread;
  const isHover = hovered === i;
  const light = t.style !== "white";

  return (
    <div
      onMouseEnter={() => setHovered(i)}
      onMouseLeave={() => setHovered(null)}
      className={`absolute left-1/2 top-1/2 w-[300px] cursor-pointer rounded-[24px] p-6 shadow-[0_20px_50px_rgba(13,35,43,0.18)] transition-all duration-500 sm:w-[320px] sm:p-7 ${STYLE[t.style]}`}
      style={{
        transform: `translate(-50%, -50%) translateX(${isHover ? offset * 0.6 : offset}px) rotate(${isHover ? 0 : t.rot}deg) scale(${isHover ? 1.06 : 1})`,
        zIndex: isHover ? 100 : 10 + i,
      }}
    >
      <Stars light={light} />
      <p className="mt-4 font-body text-[15px] leading-[1.5] sm:text-[16px]">{t.quote}</p>
      <div className="mt-5 border-t border-current/15 pt-4">
        <p className="font-saans text-[18px] font-bold">{t.name}</p>
        <p className={`font-body text-[13px] ${light ? "text-white/70" : "text-body-copy"}`}>{t.role}</p>
      </div>
    </div>
  );
}

// Mobile fan card — same animation as desktop, tap instead of hover
function MobileCard({ t, i, total, tapped, setTapped }) {
  const spread = 28;
  const offset = (i - (total - 1) / 2) * spread;
  const isTapped = tapped === i;
  const light = t.style !== "white";

  return (
    <div
      onClick={() => setTapped(isTapped ? null : i)}
      className={`absolute left-1/2 top-1/2 w-[min(82vw,260px)] cursor-pointer rounded-[20px] p-4 shadow-[0_20px_50px_rgba(13,35,43,0.18)] transition-all duration-500 ${STYLE[t.style]}`}
      style={{
        transform: `translate(-50%, -50%) translateX(${isTapped ? offset * 0.5 : offset}px) rotate(${isTapped ? 0 : t.rot}deg) scale(${isTapped ? 1.04 : 1})`,
        zIndex: isTapped ? 100 : 10 + i,
      }}
    >
      <Stars light={light} />
      <p className="mt-3 font-body text-[13px] leading-[1.5]">{t.quote}</p>
      <div className="mt-4 border-t border-current/15 pt-3">
        <p className="font-saans text-[15px] font-bold">{t.name}</p>
        <p className={`font-body text-[11px] ${light ? "text-white/70" : "text-body-copy"}`}>{t.role}</p>
      </div>
    </div>
  );
}

export default function Partners() {
  const [hovered, setHovered] = useState(null);
  const [tapped, setTapped] = useState(null);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-pearl py-sp-lg lg:py-sp-xxl">
      <Container>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-4">
            <a href="https://discord.com/invite/gbackcoin" target="_blank" rel="noreferrer"
              className="group relative flex flex-col items-center">
              <Image src="/img/discord-official.svg" alt="Join our Discord" width={64} height={64}
                className="h-[48px] w-[48px] transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_6px_18px_rgba(88,101,242,0.5)] sm:h-[60px] sm:w-[60px]" />
              <span className="mt-1 font-body text-[11px] font-bold uppercase tracking-[1px] text-[#5865F2] sm:text-[12px]">Click to join</span>
            </a>
            <h2 className="font-saans text-[32px] font-bold uppercase tracking-[2px] text-off-black sm:text-[40px] md:text-[56px]">
              Testimonials
            </h2>
          </div>
          <p className="hidden font-body text-[14px] font-bold uppercase tracking-[1.5px] text-body-copy lg:block">
            Hover a card to bring it forward.
          </p>
          <p className="font-body text-[14px] font-bold uppercase tracking-[1.5px] text-body-copy lg:hidden">
            Tap a card to bring it forward.
          </p>
        </div>
      </Container>

      {/* Mobile: fan deck (hidden on lg+) */}
      <div className="relative mx-auto mt-sp-lg h-[380px] w-full overflow-hidden lg:hidden">
        {TESTIMONIALS.map((t, i) => (
          <MobileCard key={i} t={t} i={i} total={TESTIMONIALS.length} tapped={tapped} setTapped={setTapped} />
        ))}
      </div>

      {/* Desktop: fan deck (hidden below lg) */}
      <div className="relative mx-auto mt-sp-lg hidden h-[420px] w-full max-w-[1100px] lg:block">
        {TESTIMONIALS.map((t, i) => (
          <Card key={i} t={t} i={i} total={TESTIMONIALS.length} hovered={hovered} setHovered={setHovered} />
        ))}
      </div>
    </section>
  );
}
