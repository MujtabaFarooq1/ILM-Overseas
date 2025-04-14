"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Autoplay from "embla-carousel-autoplay"
import { ChevronDown } from "lucide-react";

const CostOfLivingCalculator = () => {
  const [country, setCountry] = useState("");
  const [formData, setFormData] = useState({
    rent: 0,
    groceries: 0,
    transportation: 0,
    utilities: 0,
    healthcare: 0,
    miscellaneous: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = () => {
    alert("Calculation Complete!");
  };

  const inputs = [
    { name: "rent", label: "Rent (Monthly)" },
    { name: "groceries", label: "Groceries (Monthly)" },
    { name: "transportation", label: "Transportation (Monthly)" },
    { name: "utilities", label: "Utilities (Monthly)" },
    { name: "healthcare", label: "Healthcare (Monthly)" },
    { name: "miscellaneous", label: "Miscellaneous (Monthly)" },
  ];
  const uniimage = [
    { image: "/images/uni1.svg" },
    { image: "/images/uni2.svg" },
    { image: "/images/uni3.svg" },
    { image: "/images/uni4.svg" },
    { image: "/images/uni5.svg" },
    { image: "/images/uni1.svg" },
    { image: "/images/uni2.svg" },
  
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    
    <div className="cost-of-living-container bg-light ">
      <h1 className="md:text-5xl text-3xl font-bold text-center pt-5">Top Universities in Australia</h1>
      <div className="bg-[#F1F5EB] w-full">
        <div className="container m-auto p-2 my-5">
          <Carousel
                plugins={[plugin.current]}
            opts={{
              align: "center",
            }}
            className="w-full max-w-full"
          >
            <CarouselContent>
              {uniimage.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/4 items-center flex justify-center ">
            
                      <Image
                        width={150}
                        height={200}
                        src={item.image}
                        objectFit="cover"
                        alt="Murdoch University w-full"
                      />
          
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className=" py-12 container rounded-3xl  m-auto  p-8 bg-[#F1F5EB]">
        <h2 className="md:text-5xl text-3xl px-4 font-bold  my-6">
          Calculate Your Cost of Living
        </h2>
        <div className="md:flex grid container m-auto justify-between">
          <div className=" bg-white rounded-2xl p-6 shadow-lg">

            <div className="my-5 ">
              <label className="block text-lg font-semibold">
                Select Country
              </label>
          
              <Select>
  <SelectTrigger className="w-full rounded-full p-6">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">USA ($)</SelectItem>
    <SelectItem value="dark">Canada (CAD)</SelectItem>
    <SelectItem value="system">UK (£)</SelectItem>
  </SelectContent>
</Select>
       
            </div>

            {/* Loop over inputs array */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-6 mb-4">
              {inputs.map((input) => (
                <div key={input.name}>
                  <label className="block text-base px-2">
                    {input.label}
                  </label>
                  <input
                    type="number"
                    name={input.name}
                    value={formData[input.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-full p-3"
                  />
                </div>
              ))}
            </div>

            {/* Calculate Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 text-white py-3 rounded-full font-semibold"
            >
              Calculate
            </button>
          </div>

          {/* Image Representation */}
          <div className="mt-8 text-center">
            <img
              src="/images/coststudy.png"
              alt="Cost of Living"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOfLivingCalculator;
