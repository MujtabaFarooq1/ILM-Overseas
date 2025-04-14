import { FAQSection } from '@/components/AustraliaStudy/Faqs'
import Banner from '@/components/CommonBanner'
import React from 'react'

const page = () => {
  return (
    <div>
           <Banner
        imageSrc="/images/Faqsbg.jpeg"
        title="Studying Abroad "
        colortitle="FAQs"

        description=""
        buttonText="Get Started Today"
        bannerClass="flex  item-center md:h-100 h-50 justify-center"
        contentClass="max-w-2xl m-auto"
        titleClass="text-3xl font-semibold"
        descriptionClass="text-2xl"
      
        buttonClass=""
      />
    <div className="">
  <div className="bg-white text-black p-8 container m-auto">
    <p className="xl">
      At <strong>ILM OVERSEAS</strong>, we understand that embarking on an international educational journey comes with many questions. We have created this FAQ section to provide you with everything you need to know about studying abroad. From choosing the right country and university to navigating visa applications, scholarships, and financial aid, we’ve got you covered every step of the way.
    </p>

    <div className="mb-4">
      <h3 className="text-2xl font-semibold my-2">What You Will Find Here:</h3>
      <p>
        Whether you are aiming for the UK’s prestigious institutions, the innovative campuses of the USA, the vibrant academic atmosphere of Australia, or the facilities in Malaysia, Dubai, and Canada, we help you pick the best option for your goals and budget.
      </p>
    </div>

    <div className="mb-4">
      <h3 className="text-2xl font-semibold my-2">How to Apply</h3>
      <p>
        Our application process ensures that you are well-prepared for admissions, with expert advice on documents, deadlines, and interviews.
      </p>
    </div>

    <div className="mb-4">
      <h3 className="text-2xl font-semibold my-2">Entry Requirements</h3>
      <p>
        Every country has unique academic and visa entry requirements. We simplify these for you, ensuring you meet the eligibility criteria and understand what’s needed to get accepted.
      </p>
    </div>

    <div className="mb-4">
      <h3 className="text-2xl font-semibold my-2">Student Visa Process</h3>
      <p>
        Navigating the visa process can be daunting. We offer step-by-step guidance, ensuring your visa application is flawless and stress-free, with mock interview sessions and real-time updates.
      </p>
    </div>

    <div className="mb-4">
      <h3 className="text-2xl font-semibold my-2">Tuition Fees and Funding</h3>
      <p>
        Understanding the cost of education abroad is crucial. We provide transparent insights into tuition fees and guide you through the various funding opportunities, including government loans and financial aid packages.
      </p>
    </div>

    <div className="mb-4">
      <h3 className="text-2xl font-semibold my-2">Test Structure</h3>
      <ul className="space-y-4 mt-2">
        <li><strong>Listening:</strong> 30 minutes of audio-based tasks to evaluate your ability to understand spoken English.</li>
        <li><strong>Reading:</strong> 60 minutes to assess your comprehension of various texts, including essays, articles, and everyday material.</li>
        <li><strong>Writing:</strong> 60 minutes to demonstrate your written communication skills, including essay writing and report or letter writing.</li>
        <li><strong>Speaking:</strong> 11-14 minutes of face-to-face conversation with an examiner, testing your fluency, pronunciation, and ability to express ideas clearly.</li>
      </ul>
    </div>

    <div className="mb-4">
      <h3 className="text-2xl font-semibold my-2">Scholarship Opportunities</h3>
      <p>
        Scholarships can significantly reduce the cost of studying abroad. We help you find and apply for scholarships that match your academic background, skills, and chosen destination.
      </p>
    </div>

    <div className="mb-4">
      <h3 className="text-2xl font-semibold my-2">Practical Information</h3>
      <p>
        From accommodation arrangements to post-arrival support, our team ensures you are fully prepared for life abroad, offering personalized advice to make your transition smooth and enjoyable.
      </p>
    </div>
  </div>
        <FAQSection title="FAQs" />
  
</div>

    </div>
  )
}

export default page