import { useState, useEffect } from "react";
import HeroSection from "@/pages/Home/HeroSection";
import Hero from "@/pages/Home/Hero";
import WhoShouldEnroll from "@/pages/Home/WhoShouldEnroll";
import Universities from "@/pages/Home/Universities";
import Benefits from "@/pages/Home/Benefits";
import FAQ from "@/pages/Home/FAQ";
import AdmissionQuery from "@/pages/Home/AdmissionQuery";

const App = () => {
  const [utmParams, setUtmParams] = useState({
    source: "",
    medium: "",
    campaign: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setUtmParams({
      source: urlParams.get("utm_source") || "",
      medium: urlParams.get("utm_medium") || "",
      campaign: urlParams.get("utm_campaign") || "",
    });
  }, []);
  return (
    <div>
      <AdmissionQuery utmParams={utmParams} />
      <HeroSection />
      {/* <Hero /> */}
      <Universities />
      <WhoShouldEnroll />
      <Benefits />
      <FAQ />
    </div>
  );
};

export default App;
