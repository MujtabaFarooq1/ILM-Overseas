import { FAQSection } from '@/components/AustraliaStudy/Faqs'
import Banner from '@/components/CommonBanner'
import { StudyCommonTextComponent } from '@/components/StudyCommonTextComponent'
import ServicesSection from '@/components/home/Servicecomp'
import {  testpte } from '@/lib/data'
import React from 'react'

const page = () => {
  return (
    <div>
 <Banner
       imageSrc="/images/Faqsbg.jpeg"
        title="PTE "
        colortitle='Academic'
        description="Reach your goal to study, work, or move abroad quickly with a two-hour, computer-based English test."
        buttonText="Get Started Today"
        bannerClass="flex item-start  h-100"
        contentClass="max-w-2xl item-start md:text-start text-center px-15  "
        titleClass="text-3xl font-semibold"
        descriptionClass="text-xl"
         
      
        buttonClass=""
      />
      <div className="container m-auto px-8 space-y-2 my-3">
        <h1 className="text-3xl font-bold">The world’s top-growing English proficiency test</h1>
        <p className="text-base text-gray-600">PTE Academic is recognized by more than 3,500 universities and colleges worldwide for study, as well as by Australia and UK for work and migration visas, and for professional licensing.</p>
     
      <ServicesSection
        title="The fast and fair way to test your English"
        subtitle=""
        services={testpte}
      />
      
         <StudyCommonTextComponent
                title="Important Update for Retake Policy"
                text="Starting August 2024, Pearson introduced a new retake policy, limiting candidates to 12 attempts per year. However, there are provisions for exceptions, allowing those with legitimate needs to apply for additional attempts by submitting a formal request.
                "
                bgColor="bg-[#32B22E]"
              />
                    <FAQSection title="Frequently Asked Questions" />
              
               </div>
    </div>
  )
}

export default page