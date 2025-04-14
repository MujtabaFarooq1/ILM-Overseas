import StudyAbroadSection from "@/components/AustraliaStudy/AbradStudy";
import { ContectText } from "@/components/AustraliaStudy/ContactText";
import CostOfLivingCalculator from "@/components/AustraliaStudy/CostLiving";
import { FAQSection } from "@/components/AustraliaStudy/Faqs";
import StudyAustralia from "@/components/AustraliaStudy/StudyinAus";
import Banner from "@/components/CommonBanner";
import ContactAboutSection from "@/components/home/ContactForm";
import StatsSection from "@/components/home/StatusSec";
import React from "react";

const Page = () => {
  const statsData = [
    {
      icon: "/images/ausicon1.png",
      value: "5+",
      label: "Countries",
    },
    {
      icon: "/images/ausicon2.png",
      value: "1000+",
      label: "Universities",
    },
    {
      icon: "/images/ausicon3.png",
      value: "1000+",
      label: "Visa Processing",
    },
    {
      icon: "/images/ausicon4.png",
      value: "95%",
      label: "Visa Grant",
    },
  ];
  return (
    <div className="overflow-hidden">
      <Banner
        imageSrc="/images/australiastud.png"
        title="Study in "
        description=""
        buttonText="Get Started Today"
        bannerClass="flex  item-center md:h-100 h-50 justify-center"
        contentClass="max-w-2xl m-auto"
        titleClass="text-3xl font-semibold"
        descriptionClass="text-xl"
        colortitle="Australia"
        buttonClass=""
      />
      <StudyAustralia />
      <StatsSection
        title="Don’t Hesitate To Contact Us"
        subtitle="Success Story"
        description=""
        showButton={true}
        
        buttonText="Call Us"
        stats={statsData}
      />
      <CostOfLivingCalculator/>
      <StudyAbroadSection/>
      <section className="py-12 px-4 bg-[#F1F5EB]">
      <div className="container  mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactAboutSection/>
        <ContectText/>
        </div>
      </div>
    </section>
      <FAQSection
             title="FAQs"
             />
    </div>
  );
};

export default Page;
