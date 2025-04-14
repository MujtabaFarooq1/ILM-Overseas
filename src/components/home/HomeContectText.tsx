import React from "react";

export const HomeContectText = () => {
  const aboutHighlights = [
    "We make it simple! No need to worry about all the complicated details of studying abroad.",
    "We find the perfect fit! We won't just send you anywhere - we'll find a program that matches your interests.",
    "We're with you all the way! Our team of experienced education experts is here to help.",
  ];
  return (
    <div className="tracking-wider w-11/12 md:px-0 px-2">
      <h2 className="md:text-5xl text-3xl font-semibold mb-6">
        About <span className="text-[#32B22E]">ILM</span> OVERSEAS
      </h2>
      <p className="text-base  mb-4">
        <span className="text-[#32B22E] font-semibold">ILM OVERSEAS</span> is
        here to help you make your dream of studying abroad a reality.
      </p>
      <p className="text-base tracking-widest  mb-6">
        We build <strong>lasting friendships</strong> with our students and want
        to see you succeed. Our <strong>expert advisors</strong> will guide you
        through every step, from choosing the{" "}
        <strong>right course and university</strong> to figuring out how much
        things cost where you’ll be living.
      </p>
      <p className="text-base  mb-4">
        We give you the <strong>best advice</strong> and help you find the
        perfect program so you don’t have to stress.
      </p>

      <h3 className="text-lg font-semibold text-[#32B22E] mb-4">
        Here's why ILM OVERSEAS is awesome:
      </h3>

      <ul className="list-disc pl-6 space-y-4 my-4  text-black">
        <li className="flex  items-start">
          <span className="text-lg">
            <strong>We make it simple!</strong> No need to worry about all the
            complicated stuff we’ll handle it.
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-lg">
            <strong> We find the perfect fit!</strong> We won’t just send you
            anywhere – we’ll find a program that matches your interests.
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-lg">
            <strong>We’re with you all the way!</strong>  We’ll be there to
            answer your questions from start to finish
          </span>
        </li>
      </ul>

      <p className="text-lg font-semibold">
        Ready to explore the world and get a great education? Contact ILM
        Overseas today!
      </p>
    </div>
  );
};
