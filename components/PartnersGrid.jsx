import Image from "next/image";
import Container from "./Container";

const PARTNERS = [
  "mcdonalds", "fenix", "homeless", "unitedfoodbank", "healinghearts", "stephen",
  "goodwill", "hellomoon", "sikk", "brothers", "marcus", "justin",
];

const LABELS = {
  mcdonalds: "McDonald's", fenix: "Fenix Media", homeless: "Homeless Entrepreneur",
  unitedfoodbank: "United Food Bank", healinghearts: "Healing Hearts", stephen: "Stephen Schapiro",
  goodwill: "Goodwill Detroit", hellomoon: "Hello Moon", sikk: "Sikk Bikes",
  brothers: "Brothers 4 Hope", marcus: "Marcus Olin", justin: "Justin Werlein",
};

export default function PartnersGrid() {
  return (
    <section id="partners" className="relative overflow-hidden py-sp-lg lg:py-sp-xxl" style={{ background: "linear-gradient(160deg, #e8f5ec 0%, #f0f7f2 40%, #e4f4ee 100%)" }}>
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute left-1/2 top-[-60px] h-[520px] w-[640px] -translate-x-1/2 rounded-full blur-[100px]" style={{ background: "rgba(32,200,84,0.22)" }} />
      <div className="pointer-events-none absolute bottom-[-40px] left-[5%] h-[360px] w-[420px] rounded-full blur-[90px]" style={{ background: "rgba(21,156,64,0.18)" }} />
      <div className="pointer-events-none absolute bottom-[-40px] right-[5%] h-[360px] w-[420px] rounded-full blur-[90px]" style={{ background: "rgba(66,160,42,0.15)" }} />
      <div className="pointer-events-none absolute left-[20%] top-[40%] h-[280px] w-[320px] rounded-full blur-[100px]" style={{ background: "rgba(106,255,158,0.12)" }} />

      <Container>
        <h2 className="text-center font-saans text-[32px] font-bold uppercase tracking-[1.5px] text-off-black sm:text-[40px] md:text-[56px]">
          Our Partners
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-sp-lg lg:grid-cols-4 lg:gap-5">
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="group relative flex h-[160px] cursor-default items-center justify-center overflow-hidden rounded-[20px] transition-all duration-500 hover:-translate-y-2 sm:h-[190px] lg:h-[220px] lg:rounded-[24px]"
              style={{
                background: "#f3f3f3",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 2px 4px rgba(13,35,43,0.04), 0 8px 24px rgba(13,35,43,0.09), 0 24px 56px rgba(13,35,43,0.10), inset 0 1.5px 0 rgba(255,255,255,1)",
                isolation: "isolate",
              }}
            >
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse at 50% 110%, rgba(32,200,84,0.18), transparent 68%)" }}
              />
              <Image
                src={`/partners/${p}.png`}
                alt={LABELS[p]}
                width={200}
                height={140}
                loading="eager"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.08]"
                style={{ maxWidth: 160, maxHeight: 110, mixBlendMode: "multiply" }}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
