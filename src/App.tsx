import React from "react";
import SmoothScroll from "./components/motion/SmoothScroll";
import CustomCursor from "./components/motion/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";
import Timeline from "./components/sections/Timeline";
import Contact from "./components/sections/Contact";

/**
 * Root layout — order matters for the overlap effect: each section
 * after Hero uses `-mt-16 z-[n] rounded-t-[3rem]` so it visually rises
 * over the one before it. If you reorder sections, bump z-index
 * (z-20 → z-30 → z-40 → z-50 ...) so later sections stay on top.
 */
const App: React.FC = () => {
  return (
    <div className="bg-[#080808] font-sans antialiased">
      <SmoothScroll />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
