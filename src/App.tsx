import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Industries from "./components/sections/Industries";
import GlobalPresence from "./components/sections/GlobalPresence";
import Experts from "./components/sections/Experts";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import ClinicalWorkflow from "./components/sections/ClinicalWorkflow";
import BEMonitoring from "./components/sections/BEMonitoring";
import GxpAudits from "./components/sections/GxpAudits";
import Consulting from "./components/sections/Consulting";
import ProjectManagement from "./components/sections/ProjectManagement";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Industries />
        <GlobalPresence />
        <WhyChooseUs />
        <Experts />
        <ClinicalWorkflow />
        <BEMonitoring />
        <GxpAudits />
        <Consulting />
        <ProjectManagement />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
