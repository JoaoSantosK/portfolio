import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "../../components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import ContactForm from "./components/ContactForm/ContactForm";
import WorkSection from "./components/WorkSection/WorkSection";
import TechSection from "./components/TechSection/TechSection";
//import TalkToMe from "./components/TalkToMe/TalkToMe"; Descontinuado p tempo indeterminado
import Footer from "../../components/Footer/Footer";

function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
    <Header />
    <MainContent onOpenContact={() => setIsContactOpen(true)} />
    {isContactOpen && (
      <ContactForm onClose={() => setIsContactOpen(false)} />
    )}
    <WorkSection />
    <TechSection />
    <Footer />
    </>
  )
}

export default Home