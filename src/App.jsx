import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Vision from './sections/Vision';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Organization from './sections/Organization';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Services />
      <Projects />
      <Organization />
      <Contact />
      <Footer />
    </div>
  );
}