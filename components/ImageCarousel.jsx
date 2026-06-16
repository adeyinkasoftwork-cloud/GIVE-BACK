"use client";

import { useState } from "react";
import Image from "next/image";

const IMAGES = Array.from({ length: 12 }, (_, i) => `/carousel/img-${i + 1}.webp`);

export default function ImageCarousel() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex h-[240px] w-full gap-1.5 overflow-hidden rounded-[16px] sm:h-[340px] sm:gap-2 lg:h-[460px] lg:rounded-[20px] lg:gap-2">
      {IMAGES.map((src, i) => {
        const isActive = active === i;
        return (
          <div
            key={src}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className="relative h-full cursor-pointer overflow-hidden rounded-[10px] bg-[#0D232B] transition-all duration-[600ms] ease-[cubic-bezier(.2,.8,.2,1)] lg:rounded-[14px]"
            style={{
              flex: isActive ? 8 : 1,
              filter: isActive ? "saturate(1.05)" : "grayscale(1) brightness(0.78)",
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
}
