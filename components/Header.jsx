import Container from "./Container";
import { LogoLockup, NavChevron, ArrowUpRight } from "./icons";

// Top announcement bar — .butter__bar { background: off-black; color: pearl }
function ButterBar() {
  return (
    <div className="relative z-50 bg-off-black text-pearl">
      <Container>
        <div className="flex items-center justify-between gap-4 py-[12px]">
          <div className="flex items-center gap-3">
            {/* report cover thumbnail placeholder */}
            <div className="h-[34px] w-[34px] shrink-0 rounded-[6px] bg-gradient-to-br from-[#2b6bff] to-[#7a4bff]" />
            <p className="text-[16px] font-medium tracking-[-0.2px]">
              Discover the best crypto onramp guide. Read about it in our 2026
              report!
            </p>
          </div>
          <a
            href="#"
            className="flex shrink-0 items-center gap-1 text-[16px] font-medium tracking-[-0.2px] text-pearl"
          >
            Read Report
            <ArrowUpRight className="h-[16px] w-[16px]" stroke="#efeef3" />
          </a>
        </div>
      </Container>
    </div>
  );
}

const NAV_LINKS = [
  { label: "Buy Crypto", hasChevron: false },
  { label: "Enterprise", hasChevron: false },
  { label: "Coverage", hasChevron: true },
  { label: "Products", hasChevron: true },
  { label: "Pricing", hasChevron: false },
];

export default function Header() {
  return (
    <header className="header relative z-40 w-full">
      <ButterBar />
      <Container>
        {/* .header__wrap { justify-content: space-between; padding-top: 24px } */}
        <div className="flex items-center justify-between pt-[24px]">
          {/* Logo pill */}
          <a
            href="#"
            className="flex items-center rounded-nav bg-white px-[28px] py-[18px] shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
          >
            <LogoLockup />
          </a>

          {/* Center nav pill — .header__navigation { border-radius:123px; padding:11px 12px; gap:24px } */}
          <nav className="hidden items-center gap-[24px] rounded-nav bg-white px-[24px] py-[16px] shadow-[0_2px_20px_rgba(0,0,0,0.04)] lg:flex">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-[6px] px-[12px] text-[18px] font-medium tracking-[-0.2px] text-off-black transition-colors hover:text-cyber-blue-2"
              >
                {item.label}
                {item.hasChevron && <NavChevron className="mt-[2px]" />}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-[12px]">
            <a
              href="#"
              className="hidden rounded-button bg-white px-[30px] py-[18px] text-[18px] font-medium tracking-[-0.2px] text-off-black shadow-[0_2px_20px_rgba(0,0,0,0.04)] md:block"
            >
              Try Widget
            </a>
            <a
              href="#"
              className="rounded-button bg-off-black px-[30px] py-[18px] text-[18px] font-medium tracking-[-0.2px] text-white transition-opacity hover:opacity-90"
            >
              Get started
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
