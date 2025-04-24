import Banner from "@/components/CommonBanner";
import Image from "next/image";
import React from "react";
import ContactPageform from "../contactus/ContactPageform";

const page = () => {
  const cards = [
    {
      class: "bg-white p-6 rounded-xl shadow-md h-55 ",
      number: "01",
      title: "Visa Voyage Agency",
      description:
        "Loren ipsum is simply dummy text the printing and typesetting industry.",
    },
    {
      class: "bg-white p-6 rounded-xl md:mt-10 shadow-md h-55 ",
      number: "02",
      title: "International Access Visas",
      description:
        "Loren ipsum is simply dummy text the printing and typesetting industry.",
    },
    {
      class: "bg-white p-6 rounded-xl shadow-md h-55 ",
      number: "03",
      title: "Gateway to Global Citizenship",
      description:
        "Loren ipsum is simply dummy text the printing and typesetting industry.",
    },
  ];
  return (
    <div>
      <Banner
        imageSrc="/images/australiastud.png"
        title="About Us"
        description="Empowering students to explore, learn, and thrive across the globe."
        buttonText=""
        bannerClass=""
        contentClass="max-w-4xl px-2 m-auto"
        titleClass=""
        descriptionClass="md:text-3xl md:text-nowrap text-base"
        colortitle=""
        buttonClass=""
      />
      <div className="md:flex grid  container m-auto py-8 px-4 justify-between items-center">
        <div className="">
          <Image
            width={490}
            height={300}
            src="/images/aboutframe.svg"
            alt=""
            className="md:block hidden "
          />
          <div className="md:hidden block space-y-5">
            <img src="/images/ab1.svg" alt="" />
            <img src="/images/ab2.svg" alt="" className="w-full" />
          </div>
        </div>
        <div className=" md:space-y-5 space-y-2 mt-1 md:w-200 px-6">
          <h2 className="md:text-2xl text-sm text-[#32B22E] md:font-bold">
            Why Choose Us
          </h2>
          <h1 className="md:text-5xl text-3xl md:w-8/12 font-bold">
            Because Your Future Deserves the Best
          </h1>
          <p className="md:text-lg text-sm md:tracking-wider">
            At{" "}
            <strong className="md:text-xl text-lg">ILMOVERSEAS PTV LTD</strong>,
            we believe that education has no boundaries. Our mission is to
            empower students with the knowledge, confidence, and support they
            need to pursue academic excellence across the globe. With a team of
            experienced counselors and a deep understanding of international
            education systems, we guide students through every step of their
            journey. Whether you{"'"}re dreaming of studying in the{" "}
            <strong className="md:text-xl text-lg"> UK, USA, Canada</strong>, or
            beyond,{" "}
            <strong className="md:text-xl text-lg"> ILMOVERSEAS </strong> is
            your trusted partner in turning global ambitions into reality.
          </p>
        </div>
      </div>
      <div className="w-11/12 bg-[#32B22E] relative  md:p-12 p-4 my-6 rounded-4xl m-auto">
        <div
          className="absolute bg-cover inset-0 z-0"
          style={{
            backgroundImage: "url('/images/image 5.png')",
            backgroundRepeat: "repeat",
          }}
        ></div>
        <div className="mb-10 md:w-1/2 m-auto text-center ">
          <h2 className="text-xl font-normal text-white mb-2">
            Process Overview
          </h2>
          <h1 className="md:text-5xl text-3xl font-bold text-white">
            Unforgettable Getaways Escaping Routine
          </h1>
        </div>

        <div className="md:flex grid justify-between gap-4  relative ">
          {cards.map((card, index) => (
            <div key={index} className={card.class}>
              <h3
                className="text-[56px] font-extrabold text-transparent  
  [-webkit-text-stroke:2px_black] [text-shadow:white]"
              >
                {card.number}
              </h3>

              <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactPageform />
    </div>
  );
};

export default page;
