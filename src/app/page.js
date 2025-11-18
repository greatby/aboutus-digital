import { ContactInfo } from "@/components/ContactInfo";
import HeroVideo from "@/components/HeroVideo";
import { OurApproach } from "@/components/OurApproach";
import { OurCommitment } from "@/components/OurCommitment";
import { TheJourney } from "@/components/OurJourney";
import { Vision } from "@/components/Vision";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhoWeAre } from "@/components/WhoWeAre";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <HeroVideo />
      <Vision />
      <WhoWeAre />
      <WhatWeDo />
      <OurApproach />
      <OurCommitment />
      <TheJourney />
      <ContactInfo />
    </>
  );
};

export default LandingPage;
