import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import ValueCards from "@/components/ValueCards";
import GlobeSection from "@/components/GlobeSection";
import ProductsGrid from "@/components/ProductsGrid";
import OnrampRouting from "@/components/OnrampRouting";
import Partners from "@/components/Partners";
import Faq from "@/components/Faq";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";

// Nested structure preserved per section — composed top to bottom in the
// order specified. Each section is its own component (one per section).
export default function Home() {
  return (
    <div className="page-wrapper overflow-x-hidden">
      <Header />
      <main className="main-wrapper">
        <Hero />
        <LogoMarquee />
        <ValueCards />
        <GlobeSection />
        <ProductsGrid />
        <OnrampRouting />
        <Partners />
        <Faq />
        <PreFooter />
      </main>
      <Footer />
    </div>
  );
}
