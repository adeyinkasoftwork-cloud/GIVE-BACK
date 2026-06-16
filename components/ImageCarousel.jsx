"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

const IMAGES = Array.from({ length: 12 }, (_, i) => `/carousel/img-${i + 1}.webp`);

export default function ImageCarousel() {
  const [active, setActive] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setMobileIndex(Math.min(Math.max(index, 0), IMAGES.length - 1));
  }, []);

  const scrollTo = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth * i, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile: full-width snap-scroll carousel */}
      <div className="lg:hidden relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex h-[340px] w-full snap-x snap-mandatory overflow-x-auto rounded-[20px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {IMAGES.map((src, i) => (
            <div
              key={src}
              className="relative min-w-full h-full shrink-0 snap-start overflow-hidden rounded-[20px] bg-[#0D232B]"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className="transition-all duration-300"
              style={{
                height: 6,
                borderRadius: 3,
                width: mobileIndex === i ? 24 : 6,
                background: mobileIndex === i ? "#20C854" : "rgba(13,35,43,0.25)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Desktop: accordion expand */}
      <div className="hidden lg:flex h-[460px] w-full gap-2 overflow-hidden rounded-[20px]">
        {IMAGES.map((src, i) => {
          const isActive = active === i;
          return (
            <div
              key={src}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className="relative h-full cursor-pointer overflow-hidden rounded-[14px] bg-[#0D232B] transition-all duration-[600ms] ease-[cubic-bezier(.2,.8,.2,1)]"
              style={{
                flex: isActive ? 8 : 1,
                filter: isActive ? "saturate(1.05)" : "grayscale(1) brightness(0.78)",
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="25vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
