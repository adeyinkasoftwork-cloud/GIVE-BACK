import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GlobeHero from "@/components/GlobeHero";
import LogoMarquee from "@/components/LogoMarquee";
import WhyBelieve from "@/components/WhyBelieve";
import GlobeSection from "@/components/GlobeSection";
import ProductsGrid from "@/components/ProductsGrid";
import LiveMetrics from "@/components/LiveMetrics";
import Partners from "@/components/Partners";
import PartnersGrid from "@/components/PartnersGrid";
import Faq from "@/components/Faq";
import EcosystemFund from "@/components/EcosystemFund";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-wrapper overflow-x-hidden">
      <Header />
      <main className="main-wrapper">
        <Hero />
        <GlobeHero />
        <LiveMetrics />
        <LogoMarquee />
        <WhyBelieve />
        <GlobeSection />
        <ProductsGrid />
        <PartnersGrid />
        <Partners />
        <Faq />
        <EcosystemFund />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
