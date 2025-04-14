import React from "react";
import Image from "next/image";

// Define the type for the service data
interface Service {
  icon: string;
  title: string;
  description: string;
}

// Define the type for the props
interface ServicesSectionProps {
  title: string;
  subtitle: string;
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ title, subtitle, services }) => {
  return (
    <section className="container px-3 m-auto max-w-6xl py-8">
      <div className="">
        <div className="text-center mb-10">
          <p className="text-green-500 md:text-2xl text-base font-medium">{subtitle}</p>
          <h2 className="md:text-5xl text-2xl font-bold md:mt-2">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col group duration-200 cursor-pointer text-justify hover:bg-[#32B22E] border-[#32B22E40] text-[#717171] hover:text-white border-2 py-5 px-4 rounded-[20px]"
            >
              <div className="bg-[#32B22E] rounded-full p-4 w-18 h-18 flex items-center justify-center mb-4">
                <Image
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-lg text-black group-hover:text-white font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
