import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
const reviews = [
  {
    name: "Catherine",
    text: "The study abroad service at ILM was so helpful in guiding me through the application process. Highly recommended!",
    image: "/images/revi1.png",
  },
  {
    name: "Rebecca",
    text: "ILM's guidance was instrumental in helping me secure admission to my dream university. Their process is smooth and effective.",
    image: "/images/revi2.png",
  },
  {
    name: "Catherine",
    text: "The study abroad service at ILM was so helpful in guiding me through the application process. Highly recommended!",
    image: "/images/revi1.png",
  },
  {
    name: "Rebecca",
    text: "ILM's guidance was instrumental in helping me secure admission to my dream university. Their process is smooth and effective.",
    image: "/images/revi2.png",
  },
  {
    name: "Catherine",
    text: "The study abroad service at ILM was so helpful in guiding me through the application process. Highly recommended!",
    image: "/images/revi1.png",
  },
  {
    name: "Rebecca",
    text: "ILM's guidance was instrumental in helping me secure admission to my dream university. Their process is smooth and effective.",
    image: "/images/revi2.png",
  },
];
export function ReviewsSection() {
  return (
    <div className="">
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="md: text-[40px] text-2xl font-extrabold">
            Google Review Highlights
          </h2>
          <div className="flex gap-2 items-center">
            <span className="border w-10 h-10 flex justify-center items-center   rounded-full">
              <MoveLeft />
            </span>
            <span className="bg-green-500 w-10 h-10 text-white flex justify-center items-center  rounded-full">
              <MoveRight />
            </span>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex gap-3 justify-center items-center relative  md:p-6 ">
                      <div className="relative">
                        <Image
                          src={review.image}
                          alt={`${review.name}'s profile`}
                          width={200}
                          height={200}
                          objectFit="cover"
                          className="rounded-sm  md:w-56  md:h-full"
                        />
                      </div>
                      <div className="md:space-y-3">
                        <Image
                          src="/images/stars.png"
                          alt="stars"
                          width={100}
                          height={60}
                          className=""
                        />
                        <p className="font-extrabold text-xl mb-2">
                          Very interesting course
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          {review.text}
                        </p>
                        <span className="text-xs">Course: Academic Information Seeking</span>
                        <p className="text-base  font-extrabold">{review.name}</p>
                      </div>
                      <div className="absolute  top-0 right-10">
                        <Image
                          src="/images/Group 16.png"
                          alt="quote"
                          width={40}
                          height={40}
                          className=" md:w-10 w-3"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
    
        </Carousel>
      </div>
    </div>
  );
}
