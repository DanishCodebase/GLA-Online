import { cn } from "@/lib/utils";
import naac from "@/assets/c-naac.jpg";
import nirf from "@/assets/c-nirf.jpg";
import times from "@/assets/c-times.jpg";

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
    <figure
      className={cn(
        "relative h-full w-max cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] bg-white",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row justify-center items-center gap-2 ">
        <img className="rounded h-24" src={img} />
      </div>
    </figure>
  );
};

export function AccreditationLogoMobile() {
  return (
    <div className="relative flex max-w-7xl mx-auto py-4 sm:py-10 flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-wrap justify-center gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
      {/* <Marquee pauseOnHover reverse className="[--duration:5s]">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee> */}

      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}
