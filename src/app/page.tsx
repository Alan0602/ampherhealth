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
        <BusinessVerticals />
        <ProductReference />
        <ResponsibilitySection />
      </main>
      <Footer />
    </div>
  );
}
