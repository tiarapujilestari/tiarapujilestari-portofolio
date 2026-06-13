import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import Work from "./component/Work";
import Timeline from "./component/Timeline";
import Footer from "./component/Footer";
import ContactSection from "./component/ContactSection";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-darkBg text-white font-sans selection:bg-neonCyan selection:text-darkBg pt-24 md:pt-32 relative overflow-x-hidden">
      {/* BACKGROUND DECORATIVE GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <Navbar />
      <Hero />
      <Skills />
      <Work />
      <Timeline />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
