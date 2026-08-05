import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FeatureHighlightsSection from "@/components/FeatureHighlightsSection";
import FeatureDirectorySection from "@/components/FeatureDirectorySection";
import ScreenTourSection from "@/components/ScreenTourSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import AppShowcaseUI from "@/components/AppShowcaseUI";
import NFTShowcaseSection from "@/components/NFTShowcaseSection";
import OpenLedgerShowcaseSection from "@/components/OpenLedgerShowcaseSection";
import OpenPayProShowcaseSection from "@/components/OpenPayProShowcaseSection";
import SecuritySection from "@/components/SecuritySection";
import EcosystemLinksSection from "@/components/EcosystemLinksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FeatureHighlightsSection />
      <AppShowcaseSection />
      <AppShowcaseUI />
      <NFTShowcaseSection />
      <OpenLedgerShowcaseSection />
      <OpenPayProShowcaseSection />
      <SecuritySection />
      <FeatureDirectorySection />
      <EcosystemLinksSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
