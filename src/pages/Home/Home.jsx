import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../../components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import WorkSection from "./components/WorkSection/WorkSection";
import TechSection from "./components/TechSection/TechSection";
import TalkToMe from "./components/TalkToMe/TalkToMe";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
    <Header />
    <MainContent />
    <WorkSection />
    <TechSection />
    <TalkToMe />
    <Footer />
    </>
  )
}

export default Home