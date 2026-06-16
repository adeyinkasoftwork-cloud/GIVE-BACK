"use client";

import { useState } from "react";
import Image from "next/image";

const IMAGES = Array.from({ length: 12 }, (_, i) => `/carousel/img-${i + 1}.webp`);

export default function ImageCarousel() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Mobile: full-width snap-scroll carousel */}
      <div
        className="lg:hidden flex h-[340px] w-full snap-x snap-mandatory overflow-x-auto rounded-[20px] gap-3"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {IMAGES.map((src, i) => (
          <div
            key={src}
            className="relative min-w-full h-full shrink-0 snap-center overflow-hidden rounded-[16px] bg-[#0D232B]"
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
