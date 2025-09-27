import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import MembersSection from "./sections/MembersSection";
import BenefitsSection from "./sections/BenefitsSection";
import OnlineServices from "./sections/OnlineServices";
import PartnersSection from "./sections/PartnersSection";
import DownloadsSection from "./sections/DownloadsSection";
import ContactsSection from "./sections/ContactsSection";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import PublicAnnouncements from "./sections/PublicAnnouncements";

function App() {
  return (
    <div className="min-h-screen bg-[#fafff8]">
      <Banner />
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="members">
        <MembersSection />
      </section>
      <section id="benefits">
        <BenefitsSection />
      </section>
      <section id="services">
        <OnlineServices />
      </section>
      <section id="partners">
        <PartnersSection />
      </section>
      <section id="downloads">
        <DownloadsSection />
      </section>
      <section id="contact">
        <ContactsSection />
      </section>
      <section id="announcement">
        <PublicAnnouncements />
      </section>
      <Footer />
    </div>
  );
}

export default App;
