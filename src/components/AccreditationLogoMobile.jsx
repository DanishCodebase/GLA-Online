import { cn } from "@/lib/utils";
import naac from "@/assets/c-naac.jpg";
import nirf from "@/assets/c-nirf.jpg";
import times from "@/assets/c-times.jpg";
import { Marquee } from "./magicui/marquee";
import { Card } from "./ui/card";

const reviews = [
  {
    id: 1,
    img: naac,
  },
  {
    id: 2,
    img: nirf,
  },
  {
    id: 3,
    img: times,
  },
];

const ReviewCard = ({ img }) => {
  return (
    <Card
      className={cn(
        "w-max cursor-pointer p-4 h-full",
        // light styles
        "bg-gray-950/[.01] bg-white",
        // dark styles
        "dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row justify-center items-center gap-2 ">
        <img className="rounded h-24" src={img} />
      </div>
    </Card>
  );
};

export function AccreditationLogoMobile() {
  return (
    <div className="relative flex sm:hidden max-w-7xl mx-auto pt-10 flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover>
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
