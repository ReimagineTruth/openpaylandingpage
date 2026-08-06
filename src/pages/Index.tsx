import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeLanding from "@/components/landing/HomeLanding";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HomeLanding />
      <Footer />
    </div>
  );
};

export default Index;
