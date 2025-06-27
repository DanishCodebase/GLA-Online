import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LandingPage from "@/pages/LandingPage";
import Header from "@/pages/Header/Header";
import MCA from "@/pages/MCA";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mca" element={<MCA />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
