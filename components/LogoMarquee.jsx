import Container from "./Container";

const LOGOS = [
  "Coinbase Wallet",
  "Trust Wallet",
  "Solflare",
  "Kraken",
  "Zengo",
  "Moonshot",
  "Gate.io",
  "Cake Wallet",
  "Bitcoin.com",
];

// .carousel__container / .logo__container — horizontal marquee of partner logos.
// Static render here; the GSAP/marquee scroll can be wired later.
export default function LogoMarquee() {
  return (
    <section className="bg-pearl py-sp-sm">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-[48px] gap-y-[24px] opacity-90">
          {LOGOS.map((name) => (
            <span
              key={name}
              className="whitespace-nowrap text-[20px] font-medium tracking-[-0.4px] text-gun-metal"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
