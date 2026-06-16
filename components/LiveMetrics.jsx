"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./Container";

const DEXSCREENER_SRC =
  "https://dexscreener.com/solana/5imMdVjpsBM84z9JvYw1aHfNF8zTA3unrmWeYUQKkiQs?embed=1&theme=dark&trades=0&info=0";

function SwapTile() {
  const [pay, setPay] = useState("0.1");

  return (
    <div
      className="relative flex flex-col gap-3 overflow-hidden rounded-[24px] p-5 sm:p-6"
      style={{
        background:
          "linear-gradient(160deg, rgba(20,20,22,0.92) 0%, rgba(8,10,9,0.95) 55%, rgba(6,30,18,0.95) 100%)",
        backdropFilter: "blur(22px) saturate(160%)",
        WebkitBackdropFilter: "blur(22px) saturate(160%)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      {/* green sheen */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/25 blur-[60px]" />

      {/* You Pay */}
      <div className="relative rounded-2xl bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <p className="font-body text-[13px] text-white/60">You Pay</p>
          <p className="font-body text-[12px] text-white/40">Balance: -- SOL</p>
        </div>
        <div className="mt-2 flex items-center justify-between gap-3">
          <input
            value={pay}
            onChange={(e) => setPay(e.target.value)}
            inputMode="decimal"
            className="w-full bg-transparent font-display text-[24px] font-bold text-white focus:outline-none sm:text-[28px]"
          />
          <span className="flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
            <Image src="/img/solana.jpeg" alt="Solana" width={24} height={24} className="h-6 w-6 rounded-full object-cover" />
            <span className="font-body text-[14px] font-bold text-white sm:text-[15px]">SOL</span>
          </span>
        </div>
      </div>

      <div className="text-center font-body text-[20px] text-white/50">↓</div>

      {/* You Receive */}
      <div className="relative rounded-2xl bg-white/5 p-4">
        <p className="font-body text-[13px] text-white/60">You Receive</p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="font-display text-[24px] font-bold text-white sm:text-[28px]">
            {(parseFloat(pay || 0) * 142800).toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>
          <span className="flex shrink-0 items-center gap-2 rounded-full bg-secondary/20 px-3 py-1.5">
            <Image src="/giveback-logo.png" alt="GBACK" width={24} height={24} className="h-6 w-6 rounded-full bg-white object-contain p-0.5" />
            <span className="font-body text-[14px] font-bold text-white sm:text-[15px]">GBACK</span>
          </span>
        </div>
      </div>

      {/* Rate row */}
      <div className="relative flex items-center justify-between rounded-xl bg-white/5 px-4 py-2.5">
        <span className="font-body text-[13px] text-white/55">Rate</span>
        <span className="font-body text-[12px] text-white/80 sm:text-[13px]">1 SOL ≈ 142,800 GBACK</span>
      </div>

      <button className="relative mt-1 w-full rounded-full btn-green py-4 font-body text-[15px] font-bold sm:text-[16px]">
        CONNECT WALLET
      </button>
    </div>
  );
}

function DexScreenerChart() {
  const [loaded, setLoaded] = useState(false);

  // Fallback: remove skeleton after 5 s regardless, so it can never spin forever
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-[14px]"
      style={{ height: "min(60vw, 480px)", minHeight: 280 }}
    >
      {/* Skeleton overlay — sits on top until iframe fires onLoad (or 5 s fallback) */}
      {!loaded && (
        <div
          className="pointer-events-none absolute inset-0 z-10 flex flex-col gap-3 p-4"
          style={{
            background:
              "linear-gradient(160deg, rgba(20,20,22,0.92) 0%, rgba(8,10,9,0.95) 55%, rgba(6,30,18,0.95) 100%)",
            backdropFilter: "blur(22px) saturate(160%)",
            WebkitBackdropFilter: "blur(22px) saturate(160%)",
          }}
        >
          <div className="h-3 w-1/3 animate-pulse rounded-full bg-white/10" />
          <div className="mt-2 flex-1 animate-pulse rounded-xl bg-white/5" />
          <div className="h-2 w-1/2 animate-pulse rounded-full bg-white/8" />
        </div>
      )}

      {/* iframe always mounted — no scroll gate, no loading="lazy" */}
      <iframe
        src={DEXSCREENER_SRC}
        title="GBACK/SOL DexScreener chart"
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
        allow="clipboard-write"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default function LiveMetrics() {
  return (
    <section id="live-metrics" className="relative overflow-hidden bg-primary py-sp-lg text-white lg:py-sp-xxl">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[360px] w-[360px] rounded-full bg-cyber-blue-2/15 blur-[130px]" />
      <Container className="relative z-10">
        <div className="text-center">
          <h2 className="font-saans text-[40px] font-bold uppercase tracking-[1.5px] md:text-[56px]">
            Live Metrics
          </h2>
          <p className="mt-3 font-body text-[15px] text-white/60 sm:text-[16px]">GBACK / SOL</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:mt-sp-lg lg:grid-cols-[1.6fr_1fr] lg:gap-6">
          {/* DexScreener chart — reduced height on mobile */}
          <div className="overflow-hidden rounded-[20px] glass-dark p-2">
            <DexScreenerChart />
          </div>
          <SwapTile />
        </div>
      </Container>
    </section>
  );
}
