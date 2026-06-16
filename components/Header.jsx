"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/pages/about" },
  { label: "Earn", href: "/pages/earn" },
  { label: "How to Buy", href: "/pages/how-to-buy" },
  { label: "Impact", href: "/pages/impact" },
  { label: "Tokenomics", href: "/pages/tokenomics" },
  { label: "Whitepaper", href: "/pages/whitepaper" },
];

const SEARCH_INDEX = [
  { label: "Hero, Giveback Coin $GBACK", anchor: "#hero", keywords: "buy gback whitepaper contract address solana" },
  { label: "Global Reach Globe", anchor: "#globe", keywords: "countries onramps reach world map" },
  { label: "Live Metrics & Swap", anchor: "#live-metrics", keywords: "gback sol chart swap connect wallet dexscreener price" },
  { label: "Testimonials", anchor: "#testimonials", keywords: "reviews community members quotes" },
  { label: "Global Relief", anchor: "#relief", keywords: "blockchain transparency images impact gallery" },
  { label: "Real Impact Metrics", anchor: "#impact", keywords: "people helped meals provided disaster responses" },
  { label: "Our Partners", anchor: "#partners", keywords: "mcdonalds goodwill united food bank brothers healing hearts" },
  { label: "Why People Believe in $GBACK", anchor: "#why", keywords: "humanitarian aid transparent community decisions" },
  { label: "Available Platforms", anchor: "#platforms", keywords: "coinbase jupiter phantom solflare pumpfun okx bitget" },
  { label: "Community Ecosystem Fund", anchor: "#fund", keywords: "paypal contribution donate fiat" },
  { label: "FAQ", anchor: "#faq", keywords: "questions buy transparent" },
];

function SearchBar() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const results = q.trim()
    ? SEARCH_INDEX.filter((s) =>
        (s.label + " " + s.keywords).toLowerCase().includes(q.toLowerCase())
      )
    : [];

  const go = (anchor) => {
    setOpen(false);
    setQ("");
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md ring-1 ring-white/40">
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <circle cx="8" cy="8" r="6" stroke="#0D232B" strokeWidth="1.6" />
          <path d="M16 16L12.5 12.5" stroke="#0D232B" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="Search…"
          className="w-[120px] bg-transparent text-[15px] text-off-black placeholder:text-off-black/50 focus:outline-none"
        />
      </div>
      {open && results.length > 0 && (
        <div className="absolute right-0 top-[48px] z-50 w-[300px] overflow-hidden rounded-2xl glass p-2">
          {results.map((r) => (
            <button
              key={r.anchor}
              onClick={() => go(r.anchor)}
              className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[14px] text-off-black transition-colors hover:bg-secondary/20"
            >
              {r.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* ── Mobile bar (full-width, solid) ─────────────────────────────── */}
      <div className="xl:hidden">
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            borderBottom: menuOpen ? "none" : "1px solid rgba(13,35,43,0.08)",
            boxShadow: menuOpen ? "none" : "0 2px 20px rgba(13,35,43,0.10)",
          }}
        >
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center">
            <Image
              src="/giveback-logo.png"
              alt="GIVEBACK $GBACK"
              width={220}
              height={60}
              priority
              className="h-[38px] w-auto"
            />
          </a>

          {/* Right: Buy + Hamburger */}
          <div className="flex items-center gap-2.5">
            <a
              href="/pages/how-to-buy"
              className="rounded-full btn-green px-4 py-2 font-body text-[13px] font-bold"
            >
              Buy $GBACK
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
            >
              <span
                className={`h-[2px] w-[20px] rounded-full bg-off-black transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-[20px] rounded-full bg-off-black transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-[20px] rounded-full bg-off-black transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile drawer — full-width panel, solid white */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[600px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
          style={{
            background: "#ffffff",
            borderBottom: "1px solid rgba(13,35,43,0.10)",
            boxShadow: "0 8px 32px rgba(13,35,43,0.14)",
          }}
        >
          <nav className="flex flex-col gap-0.5 px-4 pt-2 pb-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-[14px] px-4 py-3 text-[16px] font-bold text-off-black transition-colors hover:bg-cyber-blue-2/10 active:bg-cyber-blue-2/20"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3 px-4 pb-5">
            <a
              href="/pages/how-to-buy"
              onClick={() => setMenuOpen(false)}
              className="flex-1 rounded-full btn-green py-3 text-center text-[15px] font-bold"
            >
              Buy $GBACK
            </a>
            <a
              href="/pages/ambassador-program"
              onClick={() => setMenuOpen(false)}
              className="flex-1 rounded-full py-3 text-center text-[15px] font-bold text-[#052310]"
              style={{
                background: "linear-gradient(135deg, #20C854, #159C40)",
                boxShadow: "0 4px 16px rgba(32,200,84,0.35)",
              }}
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>

      {/* ── Desktop pill bar ────────────────────────────────────────────── */}
      <Container className="!px-4 hidden xl:block">
        <div className="relative mt-[18px] flex items-center justify-between gap-4 rounded-full glass px-5 py-2.5">
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center">
            <Image
              src="/giveback-logo.png"
              alt="GIVEBACK $GBACK"
              width={220}
              height={60}
              priority
              className="h-[52px] w-auto lg:h-[64px]"
            />
          </a>

          {/* Center nav */}
          <nav className="flex items-center gap-[18px]">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-body text-[16px] font-medium tracking-[-0.3px] text-off-black/85 transition-colors hover:text-secondary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            <SearchBar />
            <a
              href="/pages/livestream"
              className="flex items-center gap-1.5 rounded-full btn-glass px-4 py-2.5 font-body text-[14px] font-bold text-off-black"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              Livestream
            </a>
            <a
              href="/pages/ambassador-program"
              className="rounded-full px-4 py-2.5 font-body text-[14px] font-bold text-[#052310]"
              style={{ background: "linear-gradient(135deg, rgba(32,200,84,0.85), rgba(21,156,64,0.85))", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.4)", boxShadow: "0 6px 20px rgba(32,200,84,0.35)" }}
            >
              Get Involved
            </a>
            <a
              href="/pages/how-to-buy"
              className="rounded-full btn-green px-5 py-2.5 font-body text-[14px] font-bold"
            >
              Buy $GBACK
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
