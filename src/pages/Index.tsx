import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import AppShowcaseUI from "@/components/AppShowcaseUI";
import NFTShowcaseSection from "@/components/NFTShowcaseSection";
import SecuritySection from "@/components/SecuritySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AppShowcaseSection />
      <AppShowcaseUI />
      <NFTShowcaseSection />
      <SecuritySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
