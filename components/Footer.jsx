import Container from "./Container";
import { LogoLockup } from "./icons";

const MENUS = [
  {
    title: "Resources",
    links: ["Coverage", "Docs", "Knowledge Base", "Blog", "Enterprise", "Brand Assets"],
  },
  {
    title: "Products",
    links: ["Onramp", "Offramp", "Swap", "Terminal", "Pricing", "Token Listing"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Get Support"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookie settings"],
  },
  {
    title: "Social",
    links: ["LinkedIn", "X", "Telegram"],
  },
];

export default function Footer() {
  return (
    // .footer + .footer__menus { background: off-black }
    <footer className="footer relative bg-off-black text-pearl">
      {/* .footer__menus { padding: 60px 0; gap:41px } */}
      <div className="footer__menus py-sp-reg">
        <Container>
          <div className="grid grid-cols-2 gap-x-[41px] gap-y-sp-lg md:grid-cols-3 lg:grid-cols-5">
            {MENUS.map((menu) => (
              <div key={menu.title}>
                <h4 className="text-[20px] font-medium tracking-[-0.2px] text-white">
                  {menu.title}
                </h4>
                <ul className="mt-[28px] flex flex-col gap-[20px]">
                  {menu.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[18px] tracking-[-0.2px] text-steel transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* .footer__bottom { background: off-black; padding-top:80px; padding-bottom:20px } */}
      <div className="footer__bottom pb-[20px] pt-sp-lg">
        <Container>
          <div className="flex flex-col gap-sp-lg">
            {/* lockup + huge "Get in touch" */}
            <div className="flex flex-col items-start justify-between gap-sp-sm md:flex-row md:items-end">
              <LogoLockup color="#ffffff" />
              <h3 className="font-saans text-[48px] font-medium leading-[100%] tracking-[-1.4px] text-white md:text-[70px]">
                Get in touch
              </h3>
            </div>

            {/* copyright */}
            <div className="footer__copyright-wrap border-t border-white/10 pt-[24px]">
              <p className="text-[16px] tracking-[-0.2px] text-steel">
                © 2026 Onramper. HQ in Amsterdam 🇳🇱, team world-wide ❤️.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
