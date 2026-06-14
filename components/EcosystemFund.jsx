import Container from "./Container";

export default function EcosystemFund() {
  return (
    <section id="fund" className="relative overflow-hidden bg-pearl py-sp-lg lg:py-sp-xxl">
      <div className="pointer-events-none absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-cyber-blue-2/10 blur-[120px]" />
      <Container className="relative z-10">
        {/* Fund header */}
        <div className="mx-auto max-w-[820px] text-center">
          <p className="font-body text-[12px] font-bold uppercase tracking-[2.5px] text-cyber-blue-3">
            Community
          </p>
          <h2 className="mt-3 font-saans text-[28px] font-bold uppercase tracking-[1.5px] text-off-black sm:text-[36px] md:text-[52px]">
            Community Ecosystem Fund
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] font-body text-[15px] leading-[1.7] text-body-copy sm:mt-5 sm:text-[16px]">
            Contributions to the $GBACK Ecosystem Fund are voluntary gifts to the
            community project. They are not tax-deductible charitable donations.
            Funds are deployed at the sole discretion of the team for marketing,
            liquidity provision and philanthropic initiatives. By contributing, you
            acknowledge that you have no expectation of profit or return.
          </p>
        </div>

        {/* PayPal contribution card */}
        <div className="mx-auto mt-8 max-w-[460px] lg:mt-sp-lg">
          <div className="relative overflow-hidden rounded-[24px] glass p-6 shadow-[0_20px_60px_rgba(13,35,43,0.12)] sm:p-8">
            {/* badge */}
            <div className="absolute right-5 top-5 rounded-full bg-cyber-blue-2/15 px-3 py-1 text-[12px] font-bold text-cyber-blue-1 sm:right-6 sm:top-6">
              Secure
            </div>

            <p className="font-body text-[16px] font-bold uppercase tracking-[1.5px] text-cyber-blue-3 sm:text-[18px]">
              Credit / Debit
            </p>
            <h3 className="mt-2 font-saans text-[26px] font-bold tracking-[-0.6px] text-off-black sm:text-[30px]">Fiat Contribution</h3>
            <p className="mt-3 font-body text-[14px] leading-[1.6] text-body-copy sm:text-[15px]">
              Securely contribute via PayPal (USD). Funds are manually bridged to
              the treasury daily.
            </p>

            {/* PayPal button — min 48px touch target */}
            <button className="mt-6 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#003087] py-4 font-body text-[15px] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:text-[16px]">
              <span className="text-[#009cde]">Pay</span>
              <span style={{ color: "#fff" }}>Pal</span>
              <span className="ml-1 opacity-80">Contribute</span>
            </button>

            <p className="mt-4 text-center font-body text-[12px] text-body-copy sm:text-[13px]">
              Secure Checkout via PayPal Business
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
