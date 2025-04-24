import React from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";

const StudyAbroadSection = () => {
  return (
    <section className="py-12 container m-auto px-4 bg-light">
    
      <div className="">
        <h1 className="text-xl font-semibold text-[#32B22E] mb-2">Ready to Study Abroad?</h1>
        <h2 className="md:text-5xl text-3xl md:w-1/2 font-extrabold mb-6">
          Ensure Your Documents Are in Order!
        </h2>
        <p className="text-lg tracking-wider">
          At <strong className="text-xl">ILM OVERSEAS PVT LTD.</strong>, we understand that the study
          visa process can feel overwhelming. Our expert team is here to guide
          you through every step, making sure you have all the essential
          documents ready for a smooth application. With years of experience
          helping students secure study visas for countries like the{" "}
          <strong className="text-xl">UK, USA, CANADA,</strong> and beyond, we’re
          committed to turning your study abroad dreams into reality.
        </p>
      </div>

     <div className="md:flex grid items-start pt-3 justify-between">
      <div className="">
        <h3 className="text-xl font-[700] mb-4">What You Will Need for Your Study Visa Application:</h3>
        <ul className="space-y-4">
          <li className="flex text-lg items-center">
            <span className="mr-3 "><BookOpen className="w-9 h-9"/></span>
            <span>Valid Passport</span>
          </li>
          <li className="flex text-lg items-center">
            <span className="mr-3 "><BookOpen className="w-9 h-9"/></span>
            <span>Proof of Admission from a Recognized Institution</span>
          </li>
          <li className="flex text-lg items-center">
            <span className="mr-3 "><BookOpen className="w-9 h-9"/></span>
            <span>Financial Statements</span>
          </li>
          <li className="flex text-lg items-center">
            <span className="mr-3 "><BookOpen className="w-9 h-9"/></span>
            <span>Academic Records and Transcripts</span>
          </li>
          <li className="flex text-lg items-center">
            <span className="mr-3 "><BookOpen className="w-9 h-9"/></span>
            <span>Proof of Language Proficiency</span>
          </li>
          <li className="flex text-lg items-center">
            <span className="mr-3 "><BookOpen className="w-9 h-9"/></span>
            <span>Health and Travel Insurance</span>
          </li>
          <li className="flex text-lg items-center">
            <span className="mr-3 "><BookOpen className="w-9 h-9"/></span>
            <span>Statement of Purpose</span>
          </li>
          <li className="flex text-lg items-center">
            <span className="mr-3 "><BookOpen className="w-9 h-9"/></span>
            <span>Visa Application Form and Fees</span>
          </li>
        </ul>
      </div>

      {/* Country Flags & Illustration */}
     
      

        <div className="">
          <Image
            src="/images/consul.jpeg"
            alt="Study Abroad Illustration"
            width={500}
            height={400}
          />
        </div>
        </div>
   
    </section>
  );
};

export default StudyAbroadSection;
