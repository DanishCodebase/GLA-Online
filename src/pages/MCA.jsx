import { useState, useEffect } from "react";
import HeroSection from "@/pages/MCA/HeroSection";
import Hero from "@/pages/Home/Hero";
import WhoShouldEnroll from "@/pages/MCA/WhoShouldEnroll";
import Universities from "@/pages/MCA/Universities";
import Benefits from "@/pages/MCA/Benefits";
import FAQ from "@/pages/MCA/FAQ";
import AdmissionQuery from "@/pages/MCA/AdmissionQuery";
import { AdmissionFormProvider } from "@/context/AdmissionFormContext";
import Header from "@/pages/Header/Header";
import { Helmet } from "react-helmet-async";

const MCA = () => {
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
    <>
      <Helmet>
        <title>Online MCA Program | GLA Online</title>
        <meta
          name="description"
          content="Advance your career with an online MCA degree from GLA Online. Learn about our flexible programs, admission process, and top-tier university partners."
        />
      </Helmet>
      <AdmissionFormProvider>
        <AdmissionQuery utmParams={utmParams} />
        {/* <Header /> */}
        <HeroSection />
        {/* <Hero /> */}
        <Universities />
        <WhoShouldEnroll />
        <Benefits />
        <FAQ />
      </AdmissionFormProvider>
    </>
  );
};

export default MCA;
