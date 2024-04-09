import { CiMenuFries } from "react-icons/ci";
import AppriciationProgram from "../components/AppriciationProgram/AppriciationProgram";
import BelieveDiversity from "../components/BelieveDiversity/BelieveDiversity";
import CelebratePanel from "../components/CelebratePanel/CelebratePanel";
import FeaturePanel from "../components/FeaturePanel/FeaturePanel";
import Footer from "../components/Footer/Footer";
import MobileHeader from "../components/Header/MobileHeader";
import Hero from "../components/Hero/Hero";
import MapArea from "../components/MapArea/MapArea";
import StayConnected from "../components/StayConnected/StayConnected";
import TestimonialSlider from "../components/Testimonial/TestimonialSlider";
import Header from "./../components/Header/Header";
import { useState } from "react";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="absolute z-10 p-5">
        <CiMenuFries
          onClick={toggleDrawer}
          className="flex text-3xl font-bold text-white lg:hidden md:hidden sm:flex"
        />
      </div>
      <Header />
      <MobileHeader isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Hero />
      <FeaturePanel />
      <StayConnected />
      <BelieveDiversity />
      <CelebratePanel />
      <AppriciationProgram />
      <TestimonialSlider />
      <MapArea />
      <Footer />
    </>
  );
};

export default LandingPage;
