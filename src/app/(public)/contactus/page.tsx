import Banner from "@/components/CommonBanner";
import InformationCont from "@/components/contact/InformationCont";

import React from "react";
import ContactPageform from "./ContactPageform";

const page = () => {
  return (
    <div className="space-y-2 pb-12">
      <Banner
        imageSrc="/images/australiastud.png"
        title="Contact Us"
        description="We'd love to hear from you!"
        buttonText=""
        bannerClass=""
        contentClass="max-w-2xl  m-auto"
        titleClass=""
        descriptionClass="md:text-3xl"
        colortitle=""
        buttonClass=""
      />
  <ContactPageform/>
      <InformationCont/>
    </div>
  );
};

export default page;
