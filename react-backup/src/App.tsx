import Header from "./components/Header";
import Hero from "./components/Hero";
import PhoenixFleets from "./components/PhoenixFleets";
import UnifiedEmergencyHub from "./components/UnifiedEmergencyHub";
import ServicesGrid from "./components/ServicesGrid";
import CorridorCoverage from "./components/CorridorCoverage";
import PhoenixProblems from "./components/PhoenixProblems";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import FleetServices from "./components/FleetServices";
import ServiceArea from "./components/ServiceArea";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">
        <Hero />
        <PhoenixFleets />
        <ServicesGrid />
        <CorridorCoverage />
        <PhoenixProblems />
        <HowItWorks />
        <UnifiedEmergencyHub />
        <WhyChooseUs />
        <FleetServices />
        <ServiceArea />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App