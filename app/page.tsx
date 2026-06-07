import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "@/components/Features";
import TestimonialSlider from "../components/TestimonialSlider"
import KeyFeatures from "../components/keyFeatures"
import LogoSlider from "../components/LogoSlider"
import SetLocations from "../components/SetLocations"
import OurProfessionals from "../components/OurProfessionals"
import {CoachesEventsBanner} from "../components/CoachesEventsBanner"
import Footer from "../components/Footer"
import Facilities from "../components/Facilities"
import FooterBottom from "../components/FooterBottom"
 
export default function Home() {
  return (
    <div>
       <Header />
       <Hero />
      <Features />
      <TestimonialSlider/>
      <KeyFeatures />
      <LogoSlider />
      <SetLocations />
      <OurProfessionals />
      <Facilities />
      <CoachesEventsBanner />
      <Footer />
      <FooterBottom/>
    </div>
  );
}