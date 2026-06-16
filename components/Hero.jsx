"use client";

import { useEffect, useRef } from "react";
import Container from "./Container";

// Increase to trim more dead space from top/bottom edges (1.0 = no crop)
const VIDEO_CROP = 1.22;

export default function Hero() {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId;

    const stepBack = () => {
      if (video.currentTime <= 0) {
        video.play();
        return;
      }
      video.currentTime = Math.max(0, video.currentTime - 1 / 30);
      rafId = requestAnimationFrame(stepBack);
    };

    const handleEnded = () => {
      video.pause();
      rafId = requestAnimationFrame(stepBack);
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="hero" className="hero is-home relative overflow-hidden bg-pearl pb-sp-lg pt-4 lg:pb-sp-xl lg:pt-sp-sm">
      {/* soft green ambience — clipped to section, reduced size on mobile */}
      <div className="pointer-events-none absolute -right-20 top-10 h-[260px] w-[260px] rounded-full bg-secondary/15 blur-[90px] sm:-right-32 sm:h-[360px] sm:w-[360px] lg:-right-40 lg:h-[460px] lg:w-[460px] lg:blur-[130px]" />

      <Container>
        {/* Two-column hero row: stacks on mobile, side-by-side at lg */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-[60px]">
          {/* Left: text content */}
          <div className="flex w-full flex-col justify-center gap-0 lg:max-w-[560px] lg:gap-sp-sm">
            <h1 className="font-saans text-[38px] font-bold leading-[100%] tracking-[-1.8px] text-off-black sm:text-[50px] md:text-[80px] lg:text-[90px]">
              Giveback Coin <span className="text-cyber-blue-2">$GBACK</span>
            </h1>
            <p className="mt-4 max-w-[480px] text-[17px] leading-[150%] tracking-[-0.2px] text-body-copy sm:text-[18px] lg:mt-[24px]">
              <span className="font-bold text-off-black">The Currency of Giving</span> using
              blockchain technology to deliver transparent, accountable
              humanitarian aid, funding disaster relief, hunger prevention, and
              homelessness initiatives worldwide.
            </p>

            {/* CTAs: stacked full-width on mobile, inline at sm */}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[12px] lg:mt-[32px]">
              <a
                href="/pages/how-to-buy"
                className="flex items-center justify-center rounded-button btn-green px-[30px] py-[16px] text-[17px] font-bold leading-[110%] tracking-[-0.2px] sm:inline-flex sm:py-[18px] sm:text-[20px]"
              >
                Buy $GBACK
              </a>
              <a
                href="/pages/whitepaper"
                className="flex items-center justify-center rounded-button btn-glass px-[30px] py-[16px] text-[17px] font-bold leading-[110%] tracking-[-0.2px] text-off-black sm:inline-flex sm:py-[18px] sm:text-[20px]"
              >
                Read Whitepaper
              </a>
            </div>

            <a
              href="https://kick.com/givebackcoin"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-cyber-blue-3 hover:underline sm:text-[15px] lg:mt-[20px]"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
              Watch the impact in real-time on Kick!
            </a>
          </div>

          {/* Right: ping-pong autoplay video */}
          <div className="relative w-full overflow-hidden rounded-[20px] lg:flex-1">
            <video
              ref={videoRef}
              src="/animations/new_animation_loop.mp4"
              className="h-auto w-full rounded-[20px] object-cover"
              style={{ transform: `scale(${VIDEO_CROP})` }}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        </div>

        {/* Contract address banner */}
        <div
          className="mx-auto mt-8 w-full rounded-[20px] px-5 py-5 sm:rounded-[24px] sm:px-[36px] sm:py-[28px] lg:mt-sp-lg"
          style={{
            background: "linear-gradient(135deg, rgba(13,35,43,0.80) 0%, rgba(10,42,34,0.75) 100%)",
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.07)",
          }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#6AFF9E]">
                Contract Address
              </p>
              <p className="break-all font-mono text-[13px] font-medium text-white sm:text-[16px] md:text-[19px]">
                Fh7mLxtPAysdvHcMcJ37A3vc6WvBVh7JVDwxmwk6pump
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-[8px] sm:gap-[10px]">
              {["Verified on Solana", "Liquidity Locked", "1B Total Supply"].map((b) => (
                <span
                  key={b}
                  className="rounded-full px-[12px] py-[6px] text-[12px] font-bold text-[#6AFF9E] sm:px-[16px] sm:py-[8px] sm:text-[13px]"
                  style={{
                    background: "rgba(32,200,84,0.15)",
                    border: "1px solid rgba(32,200,84,0.30)",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero video embed */}
        <div className="mx-auto mt-8 w-full overflow-hidden rounded-[20px] glass-dark p-2 lg:mt-sp-lg lg:max-w-[900px]">
          <video
            className="h-auto w-full rounded-[14px]"
            controls
            playsInline
            preload="none"
          >
            <source src="https://res.cloudinary.com/dyy3lxpoh/video/upload/v1781597022/video_1_under100_oyajqs.mp4" type="video/mp4" />
          </video>
        </div>
      </Container>
    </section>
  );
}
