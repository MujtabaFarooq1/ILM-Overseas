import Image from "next/image";
import React from "react";

const InformationCont = () => {
  const contactInfo = [
    {
      id: 1,
      icon: "/images/Phone.svg",
      label: "Requesting A Call:",
      value: "+92 325 7788877",
    },
    {
      id: 2,
      icon: "/images/mail.svg",
      label: "E-mail:",
      value: "info@ilmoverses.com",
    },
    {
      id: 3,
      icon: "/images/Location.svg",
      label: "Location:",
      value: "A Street 6, Block A Muslim Town, Lahore, Punjab",
    },
  ];

  return (
    <div className="container m-auto bg-[#F1F5EB] py-12 px-4 md:px-16 rounded-4xl">
      <div className="md:w-1/2 m-auto text-center mb-3">
        <h2 className="md:text-2xl text-sm font-semibold text-[#32B22E] mb-1">
          Contact Information
        </h2>
        <h1 className="md:text-5xl text-3xl md:font-extrabold font-bold  mb-6">
          Follow Your Curiosity, Find Us
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="flex flex-col items-start md:space-y-6 space-y-2">
          {contactInfo.map(({ id, icon, label, value }) => (
            <div key={id} className="flex items-center space-x-4">
              <Image
                width={33}
                height={33}
                src={icon}
                alt={`${label} icon`}
                className=""
              />
              <div className="">
                <span className="text-gray-500 md:text-base text-sm">{label}</span>
                <strong className="block text-black md:text-lg">{value}</strong>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Image
            width={652}
            height={652}
            src="/images/tapcont.svg"
            alt="world map and coins"
            className=" rounded-3xl "
          />
        </div>
      </div>
    </div>
  );
};

export default InformationCont;
