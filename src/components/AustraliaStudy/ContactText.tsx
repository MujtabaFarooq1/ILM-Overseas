import { CheckCircle } from "lucide-react";
import React from "react";

export const ContectText = () => {
  const aboutHighlights = [
  { desc: " No need to worry about all the complicated details of studying abroad.",tit:"We make it simple!"},
   { desc:" We won't just send you anywhere - we'll find a program that matches your interests.",tit:"We find the perfect fit!"},
{  desc: " Our team of experienced education experts is here to help.",tit:"We're with you all the way!"}
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold mb-6">
        Why Choose <span className="text-[#32B22E]">ILM</span> OVERSEAS?
      </h2>
      <p className="text-lg  mb-4">
        Unlike others, we offer personalized support tailored to your unique
        needs, ensuring your visa application stands out. From document
        preparation to interview coaching, we've got you covered.
      </p>
      <p className="text-sm  mb-6">
        Our success rate speaks for itself—trust the experts who know what it
        takes to get your visa approved.
      </p>
<p className="text-lg">Contact <strong> ILM OVERSEAS</strong> today and start your journey with confidence!</p>
      <h3 className="text-xl font-semibold text-[#32B22E] mb-4">
        Here’s why ILM OVERSEAS is awesome:
      </h3>

      <ul className="list-disc pl-6 my-6 space-y-2">
        {aboutHighlights.map((item, index) => (
          <li key={index} className="text-lg">
          <strong>{item.tit}</strong>  {item.desc}
          </li>
        ))}
      </ul>

      <p className="text-base font-semibold">
        Ready to explore the world and get a great education? Contact ILM
        Overseas today!
      </p>
    </div>
  );
};
