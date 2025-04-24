import { FAQSection } from "@/components/AustraliaStudy/Faqs";
import Banner from "@/components/CommonBanner";
import { IeltsComponent } from "@/components/IeltsComponent";
import { StudyCommonTextComponent } from "@/components/StudyCommonTextComponent";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner
        imageSrc="/images/Faqsbg.jpeg"
        title="Preparation "
        colortitle="IELTS"
        description="Turn your dream of studying, working, or migrating overseas into reality faster with our quick and efficient two-hour, computer-based English proficiency test."
        buttonText="Get Started Today"
        bannerClass="flex item-start  h-100"
        contentClass="max-w-2xl item-start md:text-start text-center px-15  "
        titleClass="text-3xl font-semibold"
        descriptionClass="text-xl"
        //
        buttonClass=""
      />
      <IeltsComponent title="IELTS" />

      <div className="container px-6 m-auto">
        <StudyCommonTextComponent
          title="Important Update for IELTS for UKVI in Pakistan"
          text="Starting October 1, 2024, IELTS for UKVI will be available exclusively as a computer-based test in Pakistan. This streamlined format provides test-takers with faster results, often within just 1-5 days, and greater flexibility with multiple test slots available throughout the week. This change ensures quicker turnaround times without compromising the integrity or quality of the test.
          Choose the IELTS for UKVI on computer for a fast, convenient, and secure testing experience, with smaller test groups and better availability to suit your schedule.
          "
          bgColor="bg-[#32B22E]"
        />
      </div>
      <FAQSection title="Frequently Asked Questions" />
    </div>
  );
};

export default page;
