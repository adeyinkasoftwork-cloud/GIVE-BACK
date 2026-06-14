"use client";

import { useState } from "react";
import Container from "./Container";

const FAQS = [
  {
    q: "What is $GBACK?",
    a: "GIVEBACK Coin ($GBACK) is a Solana-based token built to turn generosity into continuous, transparent humanitarian funding, every donation, wallet, and impact is visible on-chain.",
  },
  {
    q: "How much goes to humanitarian aid?",
    a: "50%+ of contributions are directed toward humanitarian aid, direct funding for meals, shelters, and disaster relief.",
  },
  {
    q: "How is $GBACK transparent?",
    a: "All donation wallets and reserves are publicly verifiable on the Solana blockchain, so anyone can confirm where funds go.",
  },
  {
    q: "How are funded projects decided?",
    a: "The community decides, holders vote on which nonprofits and projects receive funding.",
  },
  {
    q: "Where can I buy $GBACK?",
    a: "$GBACK is available across platforms including Coinbase, Jupiter, Phantom, Solflare, Pump.fun and DexScreener. See the How to Buy page for a step-by-step guide.",
  },
]

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="faq__question rounded-faq bg-white px-5 py-5 sm:px-sp-sm sm:py-[30px]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-saans text-[19px] font-bold leading-[115%] tracking-[-0.5px] text-off-black sm:text-[24px]">
          {q}
        </span>
        <span className="relative flex h-[28px] w-[28px] shrink-0 items-center justify-center">
          <span className="absolute h-[2px] w-[20px] bg-cyber-blue-2" />
          <span
            className={`absolute h-[20px] w-[2px] bg-cyber-blue-2 transition-transform duration-300 ${
              isOpen ? "scale-y-0" : "scale-y-100"
            }`}
          />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "mt-[14px] grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[760px] text-[16px] leading-[150%] tracking-[-0.2px] text-body-copy sm:text-[18px]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="faq general bg-pearl py-sp-lg lg:py-sp-xxl">
      <Container>
        <div className="mb-8 max-w-faq-heading lg:mb-sp-lg">
          <h2 className="font-saans text-[36px] font-bold leading-[100%] tracking-[-1.4px] text-off-black sm:text-[48px] md:text-[60px] lg:text-[70px]">
            Frequently asked questions.
          </h2>
        </div>

        <div className="flex flex-col gap-[12px] sm:gap-[16px]">
          {FAQS.map((item, i) => (
            <FaqItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
