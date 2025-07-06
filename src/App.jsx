import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import LandingPage from "./pages/Landingpage";

export default function App() {
  return (
    <main className="font-sans scroll-smooth">
      <LandingPage />
      {/* <Hero />
      <About />
      <Achievements />
      <Vision />
      <Contact /> */}
      
    </main>
  );
}
