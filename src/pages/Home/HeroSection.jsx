import { Check, Phone, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import mba from "@/assets/banners/mba.jpg";

export default function HeroSection() {
  const features = [
    {
      label: "MBA Course Duration:",
      value: "Flexible timelines",
    },
    {
      label: "Study Mode:",
      value: "Fully online",
    },
    {
      label: "Accreditation:",
      value: "AICTE, WES approved & AACSB accredited",
    },
    {
      label: "58% Average Hike",
      value: "across MBA courses",
    },
    {
      label: "EMI Options:",
      value: "You'll have access to budget-friendly payment plans",
    },
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* <div className="overflow-hidden shadow-2xl border-0 py-0 bg-white"> */}
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Section */}
            <div className="p-8 order-2 lg:order-1 lg:p-12 flex flex-col justify-center">
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                    <span className="text-green-500">
                      Online MBA Degree Courses
                    </span>{" "}
                    <br />
                    <span className="text-gray-700 text-3xl lg:text-4xl">
                      from World's Top B-schools
                    </span>
                  </h1>

                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                    Start your transformative journey with a 100% Online MBA
                    Program from top B-schools in India and Abroad, designed for
                    professionals aiming to accelerate their careers while
                    maintaining a flexible study schedule. MBA can be your
                    gateway to career opportunities, leadership roles, and
                    entrepreneurial success.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-green-200 transition-colors">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900">
                          {feature.label}
                        </span>{" "}
                        <span className="text-gray-600">{feature.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 sm:flex-none bg-green-500 hover:bg-green-600 text-white hover:text-white/90 transition-all duration-200 h-12 px-6"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Free Career Counselling
                  </Button>
                  {/* <Button
                    size="lg"
                    className="flex-1 sm:flex-none bg-red-500 hover:bg-red-600 text-white h-12 px-6 shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </Button> */}
                </div>

                {/* Contact Information */}
                {/* <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">For enquiries call:</span>
                  <a
                    href="tel:18002102020"
                    className="font-semibold text-red-500 hover:text-red-600 transition-colors"
                  >
                    1800 210 2020
                  </a>
                </div> */}
              </div>
            </div>

            {/* Image Section */}
            <div className="relative order-1 lg:order-2 flex items-center justify-center overflow-hidden">
              <img
                src={mba}
                alt="MBA students studying online"
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
