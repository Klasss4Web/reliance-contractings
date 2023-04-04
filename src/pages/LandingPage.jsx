import React from "react";

import { reveal } from "../utils/scrollUtills";
import { Hero } from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import ServicesCards from "../components/ServicesCard.jsx";
import IndustriesWeServe from "../components/IndustriesWeServe";
import TurnoverBanner from "../components/TurnoverBanner";

const LandingPage = () => {
  React.useEffect(() => {
    window.addEventListener("scroll", reveal);

    // cleanup this component
    return () => {
      window.addEventListener("scroll", reveal);
    };
  }, []);
  return (
    <>
      <Hero />
      <WhoWeAre />
      <TurnoverBanner />
      <ServicesCards />
      <IndustriesWeServe />

      {/* <GetStarted /> */}
    </>
  );
};

export default LandingPage;
