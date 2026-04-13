import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BusinessVerticals from "@/components/BusinessVerticals";
import ProductReference from "@/components/ProductReference";
import ResponsibilitySection from "@/components/ResponsibilitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Cinematic Section Divider */}
        <div className="relative z-20 -mt-[1px]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
               xmlns="http://www.w3.org/2000/svg"
               className="block w-full h-[80px]"
               style={{ marginBottom: "-2px" }}>
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              className="fill-secondary"
            />
            <path
              d="M0,20 C360,60 1080,-20 1440,20 L1440,80 L0,80 Z"
              className="fill-secondary/50"
            />
          </svg>
        </div>

        <BusinessVerticals />
        <ProductReference />
        <ResponsibilitySection />
      </main>
      <Footer />
    </div>
  );
}
