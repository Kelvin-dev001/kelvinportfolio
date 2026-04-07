import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Terminal from "@/components/Terminal";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050A14]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Terminal />
      <CallToAction />
      <Footer />
    </main>
  );
}
