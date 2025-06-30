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
import { useLocation } from "react-router-dom";

const MCA = () => {
  const location = useLocation();
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = {
      utm_source: searchParams.get("utm_source"),
      utm_medium: searchParams.get("utm_medium"),
      utm_campaign: searchParams.get("utm_campaign"),
      utm_term: searchParams.get("utm_term"),
      utm_content: searchParams.get("utm_content"),
      campaign: searchParams.get("campaign"),
    };
    setUtmParams(params);
  }, [location.search]);

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
