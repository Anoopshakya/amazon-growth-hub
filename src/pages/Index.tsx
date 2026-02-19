import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import FounderSection from "@/components/FounderSection";
import Services from "@/components/Services";
import Metrics from "@/components/Metrics";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustedBy />
      <FounderSection />
      <Services />
      <Metrics />
      <WhyUs />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
