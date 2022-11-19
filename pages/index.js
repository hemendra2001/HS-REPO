import About from "../components/About";
import Client from "../components/Client";
import Contact from "../components/Contact";
import Count from "../components/Count";
import Footer from "../components/Footer";
import Header from "../components/header";
import HeroSection from '../components/HeroSection';
import Pricing from "../components/Pricing";
import Question from "../components/Question";
import Services from "../components/Services";
import Team from "../components/Team";

export default function Home() {
  return (
    <div>
    <Header/>
    <HeroSection/>
    <About/>
    <Count/>
    <Client/>
    <Services/>
    <Team/>
    <Pricing/>
    <Question/>
    <Contact/>
    <Footer/>
    </div>
  )
}
