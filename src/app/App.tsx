import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ValueProposition } from "./components/ValueProposition";
import { SuccessStories } from "./components/SuccessStories";
import { IndustryRecognition } from "./components/IndustryRecognition";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { About } from "./components/About";
import { Eligibility } from "./components/Eligibility";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AdminPanelWithAuth } from "./components/AdminPanelWithAuth";
import { FloatingActionWidget } from "./components/FloatingActionWidget";
import { ContentProvider } from "./context/ContentContext";

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <ContentProvider>
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white overflow-x-hidden">
        <Header onAdminAccess={() => setIsAdminOpen(true)} />
        <main className="w-full">
          <Hero />
          <ValueProposition />
          <SuccessStories />
          <IndustryRecognition />
          <Services />
          <Features />
          <HowItWorks />
          <About />
          <Eligibility />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingActionWidget />
        <AdminPanelWithAuth isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
      </div>
    </ContentProvider>
  );
}