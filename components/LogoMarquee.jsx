import Image from "next/image";
import Container from "./Container";

const PLATFORMS = [
  "coinbase", "jupiter", "solflare-removebg-preview", "solflare", "pumpfun", "dexscreener",
  "birdeye", "gmgn", "axiom", "bitget", "okx", "coingecko",
  "gate", "moontok", "weex", "terminal",
];
const EXT = { gate: "webp", moontok: "webp", weex: "webp", terminal: "png" };
const SCALE = { birdeye: 1.5, axiom: 1.5, bitget: 1.5, coingecko: 1.5 };

function Row() {
  return (
    <div className="animate-marquee flex shrink-0 items-center gap-[16px] pr-[16px] sm:gap-[28px] sm:pr-[28px]">
      {PLATFORMS.map((name) => (
        <div
          key={name}
          className="group relative flex h-[90px] w-[160px] shrink-0 items-center justify-center rounded-[16px] p-[10px] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_28px_rgba(32,200,84,0.25)] sm:h-[120px] sm:w-[230px] sm:rounded-[20px] sm:p-[14px]"
          style={{
            background: "linear-gradient(150deg, rgba(13,35,43,0.82) 0%, rgba(10,42,34,0.78) 100%)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.07)",
          }}
        >
          <div
            className="relative h-full w-full transition-transform duration-300 group-hover:-translate-y-1"
            style={SCALE[name] ? { transform: `scale(${SCALE[name]})` } : undefined}
          >
            <Image
              src={`/platforms/${name}.${EXT[name] || "png"}`}
              alt={name}
              fill
              sizes="(max-width: 640px) 160px, 230px"
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section id="platforms" className="overflow-hidden bg-pearl py-sp-reg lg:py-sp-xl">
      <Container>
        <h2 className="text-center font-saans text-[13px] font-bold uppercase tracking-[2.5px] text-off-black">
          Available Platforms
        </h2>
      </Container>
      {/* full-bleed marquee */}
      <div className="marquee-paused relative mt-8 flex w-full overflow-hidden lg:mt-sp-lg">
        <Row />
        <Row />
      </div>
    </section>
  );
}
