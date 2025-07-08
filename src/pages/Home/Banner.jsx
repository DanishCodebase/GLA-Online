import { Check, Phone, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import mba from "@/assets/nocollege-hero.png";
import mbaMobile from "@/assets/nocollege-hero-sm.png";

export default function HeroSection() {
  return (
    <section className="py-10 px-4 h-[60vh] w-full sm:h-[calc(100vh-72px)]">
      <div className="sm:absolute inset-0">
        <img
          src={mba}
          alt="MBA students studying online"
          className="w-full h-full object-cover hidden sm:block"
        />
        <img
          src={mbaMobile}
          alt="MBA students studying online"
          className="w-full h-full object-cover scale-110 aspect-square object-center block sm:hidden"
        />
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      </div>
    </section>
  );
}
