import Image from "next/image";

export default function FloatingButtons() {
  return (
    <>
      {/* Spotify, bottom right */}
      <a
        href="https://open.spotify.com/artist/5Hb4i6h7y77XXannLnCdpo"
        target="_blank"
        rel="noreferrer"
        aria-label="Spotify"
        className="fixed bottom-[16px] right-[16px] z-50 transition-transform duration-300 hover:scale-110 sm:bottom-[24px] sm:right-[24px]"
      >
        <span className="block animate-[float_3s_ease-in-out_infinite]">
          <Image src="/img/spotify-official.svg" alt="Spotify" width={64} height={64}
            className="h-[48px] w-[48px] drop-shadow-[0_8px_24px_rgba(30,215,96,0.5)] sm:h-[60px] sm:w-[60px]" />
        </span>
      </a>

      {/* Discord, bottom left */}
      <a
        href="https://discord.gg/gbackcoin"
        target="_blank"
        rel="noreferrer"
        aria-label="Join the community chat"
        className="group fixed bottom-[16px] left-[16px] z-50 flex h-[48px] w-[48px] items-center justify-center rounded-full btn-green transition-transform duration-300 hover:scale-110 sm:bottom-[24px] sm:left-[24px] sm:h-[60px] sm:w-[60px]"
      >
        <span className="block animate-[float_3.4s_ease-in-out_infinite]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="sm:hidden">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              stroke="#052310" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="hidden sm:block">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              stroke="#052310" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </>
  );
}
