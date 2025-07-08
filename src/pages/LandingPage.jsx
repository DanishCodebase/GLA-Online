import { useState, useEffect } from "react";
import HeroSection from "@/pages/Home/HeroSection";
import Hero from "@/pages/Home/Hero";
import WhoShouldEnroll from "@/pages/Home/WhoShouldEnroll";
import Universities from "@/pages/Home/Universities";
import Benefits from "@/pages/Home/Benefits";
import FAQ from "@/pages/Home/FAQ";
import AdmissionQuery from "@/pages/Home/AdmissionQuery";
import { AdmissionFormProvider } from "@/context/AdmissionFormContext";
import Header from "@/pages/Header/Header";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Banner from "./Home/Banner";
import { AccreditationLogoMobile } from "@/components/AccreditationLogoMobile";

const LandingPage = () => {
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
    // Store in localStorage for other components if needed
    localStorage.setItem("utmParams", JSON.stringify(params));
  }, [location.search]);

  return (
    <>
      <Helmet>
        <title>Online MBA Program | GLA Online</title>
        <meta
          name="description"
          content="Explore the best online MBA programs with GLA Online. Get detailed information on admission, courses, and universities."
        />
      </Helmet>
      <AdmissionFormProvider>
        <AdmissionQuery utmParams={utmParams} />
        {/* <AccreditationLogoMobile /> */}
        {/* <Header /> */}
        {/* <HeroSection /> */}
        <Banner />
        {/* <Hero /> */}
        <Universities />
        <WhoShouldEnroll />
        <Benefits />
        <FAQ />
      </AdmissionFormProvider>
    </>
  );
};

export default LandingPage;
