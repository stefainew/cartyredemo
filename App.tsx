import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FullCare from './components/FullCare';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FullCare />
        <Testimonials />
        <FAQ />
        <Location />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default App;