import React from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <nav class="bg-white shadow relative z-10 border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-5 sm:p-1 sm:px-1">
        {/* <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        > */}
        <img
          src={logo}
          class="h-16"
          alt="NoCollege Logo"
        />
        {/* <span class="self-center text-green-500 font-mono text-3xl font-bold whitespace-nowrap uppercase">
          NoCollege
        </span> */}
        {/* </a> */}
      </div>
    </nav>
  );
};

export default Header;
