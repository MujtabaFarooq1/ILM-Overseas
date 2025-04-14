"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";


const contactFormFields = [
  {
    id: "name",
    label: "Name*",
    placeholder: "Your Name",
    required: true,
  },
  {
    id: "lastName",
    label: "Last Name*",
    placeholder: "Your Last Name",
    required: true,
  },
  {
    id: "email",
    label: "Email*",
    placeholder: "Your Email",
    type: "email",
    required: true,
  },
  {
    id: "phone",
    label: "Phone*",
    placeholder: "Your Phone Number",
    required: true,
  },
  {
    id: "qualification",
    label: "Highest Qualification*",
    placeholder: "Your Highest Qualification",
    required: true,
  },
  {
    id: "message",
    label: "Message*",
    placeholder: "Your Message",
    required: true,
    type: "textarea",
    rows: 4,
  },
];

const ContactAboutSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    qualification: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
   
          <div className="bg-white p-6 w-full rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">
              Reach Us with a Simple Click
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {contactFormFields.slice(0, 2).map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-base font-medium mb-1 pl-3"
                    >
                      {field.label}
                    </label>
                    <Input
                      className="rounded-full h-15"
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required}
                    />
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {contactFormFields.slice(2, 4).map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-base font-medium mb-1 pl-3"
                    >
                      {field.label}
                    </label>
                    <Input
                      className="rounded-full h-15"
                      id={field.id}
                      name={field.id}
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required}
                    />
                  </div>
                ))}
              </div>

              {contactFormFields.slice(4).map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-base font-medium mb-1 pl-3"
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <Textarea
                      className="rounded-full h-15 p-3"
                      id={field.id}
                      name={field.id}
                      rows={field.rows}
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required}
                    />
                  ) : (
                    <Input
                      className="rounded-full h-15"
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required}
                    />
                  )}
                </div>
              ))}

              <Button
                type="submit"
                className="bg-[#32B22E] hover:bg-[#32B22E] rounded-full h-15 w-full"
              >
                Submit
              </Button>
            </form>
          </div>
         
       
  );
};

export default ContactAboutSection;
