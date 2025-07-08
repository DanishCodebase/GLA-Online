import React from "react";
import logo from "@/assets/logo.png";
import naac from "@/assets/c-naac.jpg";
import nirf from "@/assets/c-nirf.jpg";
import times from "@/assets/c-times.jpg";

const Header = () => {
  return (
    <nav class="bg-green-100 shadow relative z-10 border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-5 sm:p-1 sm:px-1">
        {/* <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        > */}
        <img src={logo} className="h-16" alt="NoCollege Logo" />
        <div className="flex flex-wrap items-center gap-2">
          <img
            src={naac}
            className="h-16 hidden sm:block mix-blend-multiply brightness-110"
            alt="NAAC Accreditation"
          />
          <img
            src={nirf}
            className="h-16 hidden sm:block mix-blend-multiply brightness-110"
            alt="NIRF Ranking"
          />
          <img
            src={times}
            className="h-16 hidden sm:block mix-blend-multiply brightness-110"
            alt="Times Higher Education Ranking"
          />
        </div>
        {/* <span class="self-center text-green-500 font-mono text-3xl font-bold whitespace-nowrap uppercase">
          NoCollege
        </span> */}
        {/* </a> */}
      </div>
    </nav>
  );
};

export default Header;
