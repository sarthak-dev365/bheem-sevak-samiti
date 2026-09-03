export const metadata = {
  title:
    "Bheem Sevak Samiti (Regd.) | Education, Social Reform & Environment",

  description:
    "Bheem Sevak Samiti (Regd.) works for education, social reform, environmental protection and community development across India.",
};


import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/layout/Navbar";
import HomeAbout from "@/components/sections/about/HomeAbout";

import HomeExamination from "@/components/sections/examination/HomeExamination";
import HomeGallery from "@/components/sections/gallery/HomeGallery";
import ImpactSection from "@/components/sections/impact/ImpactSection";
import HomePathshala from "@/components/sections/pathshala/HomePathshala";
import HomeServices from "@/components/sections/services/HomeServices";
import HomeActionCTA from "@/components/sections/cta/HomeActionCTA";
import Footer from "@/components/layout/Footer";
import HomeOurJourney from "@/components/sections/our journey/HomeOurJourney";


export default function Home() {

  return (

    <main>

      <Navbar />

      <HeroSection />

      <HomeAbout />

      <ImpactSection />

      <HomeServices />

      <HomePathshala />

      <HomeExamination />

      <HomeGallery />

      <HomeOurJourney />

      <HomeActionCTA />

      <Footer />

    </main>

  );

}