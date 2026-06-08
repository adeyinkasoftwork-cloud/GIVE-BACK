import Container from "./Container";

const PARTNERS = [
  {
    category: "Wallets",
    logo: "Bitcoin.com",
    quote:
      "\"Partnering with Onramper simplifies entry for users across the globe, using their preferred payment methods. It's a key step in breaking down barriers and expanding crypto access worldwide\"",
    name: "Corbin Fraser",
    role: "CEO, Bitcoin",
  },
  {
    category: "Web3/Defi/NFT",
    logo: "EXODUS",
    quote:
      "\"Onramper has allowed Exodus to enter new markets and provide multiple APMs with a single integration. By using Onramper’s smart routing, we ensure that our customers always get the best experience for their region.\"",
    name: "Kevin Wood",
    role: "Sr. Product Manager Payments",
  },
  {
    category: "Exchanges",
    logo: "Solflare",
    quote:
      "\"We like how Onramper consistently matches our users with the best option for their needs. Transactions are smooth, and extensive APM support means we can serve a global audience.\"",
    name: "Vidor Gencel",
    role: "Founder at Solflare",
  },
];

export default function Partners() {
  return (
    // .partners — white background section
    <section className="partners bg-white py-sp-xxl">
      <Container>
        {/* .partners__title { text-align:center; margin-bottom:spacing-xxl } */}
        <div className="mb-sp-xxl text-center">
          {/* heading-style-h2 scale */}
          <h2 className="font-saans text-[48px] font-medium leading-[100%] tracking-[-1.8px] text-off-black md:text-[72px] lg:text-[90px]">
            What our partners say
          </h2>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 gap-sp-lg md:grid-cols-3">
          {PARTNERS.map((p) => (
            <div key={p.category} className="flex flex-col">
              {/* top divider line as in screenshot */}
              <div className="border-t border-[#e2e2e8] pt-sp-sm">
                <h3 className="font-saans text-[40px] font-medium leading-[100%] tracking-[-1px] text-off-black md:text-[48px]">
                  {p.category}
                </h3>
                <div className="mt-sp-sm flex h-[40px] items-center">
                  <span className="text-[24px] font-bold tracking-[-0.4px] text-off-black">
                    {p.logo}
                  </span>
                </div>
                <p className="mt-sp-sm text-[22px] leading-[130%] tracking-[-0.4px] text-off-black">
                  {p.quote}
                </p>
                <div className="mt-sp-lg">
                  <p className="text-[26px] font-medium tracking-[-0.4px] text-off-black">
                    {p.name}
                  </p>
                  <p className="mt-[4px] text-[16px] tracking-[-0.2px] text-body-copy">
                    {p.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
