import Container from "./Container";
import NewsletterForm from "./NewsletterForm";

const NAV = [
  {
    title: "Explore",
    links: [
      ["Home", "/"],
      ["About", "/pages/about"],
      ["Earn", "/pages/earn"],
      ["Impact", "/pages/impact"],
    ],
  },
  {
    title: "Project",
    links: [
      ["How to Buy", "/pages/how-to-buy"],
      ["Tokenomics", "/pages/tokenomics"],
      ["Whitepaper", "/pages/whitepaper"],
      ["Get Involved", "/pages/ambassador-program"],
    ],
  },
];

const SOCIAL_ICONS = [
  {
    label: "X (Twitter)",
    href: "https://x.com/gbackcoin",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/gbackcoin",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@gbackcoin",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gbackcoin/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(110% 140% at 15% 0%, rgba(32,200,84,0.16) 0%, rgba(10,12,11,0.97) 45%, #060807 100%)",
      }}
    >
      {/* glow blob */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full blur-[110px]"
        style={{ background: "rgba(32,200,84,0.12)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pb-8 pt-10 md:px-16 md:pt-16 md:pb-10">
        {/* CTA row */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-saans text-[32px] font-bold leading-[1.02] tracking-[-1.2px] text-white sm:text-[40px] md:text-[56px]">
              Ready to join the<br />giving movement?
            </h2>
            <p className="mt-4 max-w-[520px] font-body text-[15px] leading-[1.7] text-white/60 sm:text-[16px] lg:mt-5">
              Become part of a global community committed to feeding families, supporting shelters, and responding to crises with full transparency.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-7">
              <a
                href="/pages/how-to-buy"
                className="btn-glass flex min-h-[48px] items-center justify-center rounded-full px-7 py-3 font-body text-[15px] font-bold sm:min-h-0"
              >
                Buy $GBACK
              </a>
              <a
                href="/pages/impact"
                className="btn-glass-green flex min-h-[48px] items-center justify-center rounded-full px-7 py-3 font-body text-[15px] font-bold sm:min-h-0"
              >
                Explore Impact
              </a>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="my-10 border-t border-white/10 md:my-12" />

        {/* bottom grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <p className="font-saans text-[15px] font-bold uppercase tracking-[1.5px] text-white">Newsletter</p>
            <p className="mt-2 font-body text-[13px] leading-[1.6] text-white/55">
              Stay updated on impact milestones and $GBACK news in our monthly newsletter.
            </p>
            <NewsletterForm />
          </div>

          {/* Nav columns */}
          {NAV.map((col) => (
            <div key={col.title}>
              <p className="font-saans text-[15px] font-bold uppercase tracking-[1.5px] text-white">{col.title}</p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-body text-[13px] text-white/55 transition-colors hover:text-secondary"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials column */}
          <div>
            <p className="font-saans text-[15px] font-bold uppercase tracking-[1.5px] text-white">Connect</p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {[
                ["TikTok", "https://www.tiktok.com/@gbackcoin"],
                ["Facebook", "https://www.facebook.com/gbackcoin"],
                ["Kick", "https://kick.com/givebackcoin"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-[13px] text-white/55 transition-colors hover:text-secondary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            {/* icon row */}
            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIAL_ICONS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="btn-social h-9 w-9 sm:h-8 sm:w-8"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* copyright */}
        <p className="mt-8 text-center font-body text-[12px] text-white/35 md:mt-10">
          © 2026 GIVEBACK COIN | $GBACK
        </p>
      </div>
    </footer>
  );
}
