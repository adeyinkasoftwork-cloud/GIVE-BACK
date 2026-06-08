"use client";

import { useState } from "react";
import Container from "./Container";

const FAQS = [
  {
    q: "Do we need contracts with each onramp?",
    a: "No — Onramper works straight out of the box. If you prefer to contract directly with a specific onramp, however, we can make it happen.",
  },
  {
    q: "Why are aggregator fees cheaper?",
    a: "Onramper generally doesn't add fees on top of those offered by onramps. For every single transaction, we fetch live quotes from all over the ecosystem to ensure your users receive the most amount of crypto. On average our fee-based routing saves 2.52% for the user.",
  },
  {
    q: "How does Onramper monetize?",
    a: "Onramper generally does not add a fee on top of transactions and makes buying crypto cheaper for end-users by finding the best ramp for each transaction! Onramper may be paid a referral fee by its partner onramps based on the amount of volumes it refers, which comes out of the revenue margins of the ramp provider.",
  },
  {
    q: "We already have onramps. Is that an issue?",
    a: "Absolutely not! The Onramper API makes it super easy to add onramps to your existing flow. You can keep your existing onramp integrations. Even better, you can connect the webhooks from new and existing onramps into the Onramper Terminal for comprehensive insights and analysis of your onramps' performance.",
  },
  {
    q: "How do you reduce KYC friction?",
    a: "Come transaction time, our routing engine rapidly assesses your customer’s profile. By weighing up 70+ factors, it identifies the optimal onramp — not just in terms of success rates and fees, but in the easiest route to completing a transaction. For smaller-value transactions, extensive KYC is often not required.",
  },
  {
    q: "We lack the resources to integrate. Is Onramper still right for us?",
    a: "If anything, constrained resources are even more of a reason to integrate Onramper. From your perspective, it's a single integration that unlocks the entire ecosystem of onramps, offramps and swaps.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    // .faq__question { background:#fff; border-radius:8px; padding:30px 40px }
    <div className="faq__question rounded-faq bg-white px-sp-sm py-[30px]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-saans text-[24px] font-medium leading-[120%] tracking-[-0.4px] text-off-black">
          {q}
        </span>
        {/* plus / minus icon */}
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
          isOpen ? "mt-[16px] grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[760px] text-[18px] leading-[150%] tracking-[-0.2px] text-body-copy">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(null); // index or null — React state only

  return (
    // .faq.general — pearl background
    <section className="faq general bg-pearl py-sp-xxl">
      <Container>
        {/* .faq__heading-container { max-width:720px; margin-bottom:80px } */}
        <div className="mb-sp-lg max-w-faq-heading">
          {/* .faq__heading-3 { font-size:70px; line-height:90%; letter-spacing:-.7px } */}
          <h2 className="font-saans text-[48px] font-medium leading-[90%] tracking-[-0.7px] text-off-black md:text-[60px] lg:text-[70px]">
            Frequently asked questions.
          </h2>
        </div>

        {/* .faq__questions */}
        <div className="flex flex-col gap-[16px]">
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
