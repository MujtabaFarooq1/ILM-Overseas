import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Facebook, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Top Section with Logo and Newsletter */}
        <div className="md:flex-row flex-col-reverse flex gap-2   justify-between  md:items-center mb-10">
          <div className="">
            <Image
              src="/images/logowhite.png"
              alt="ILM OVERSEAS (PVT) LTD"
              width={150}
              objectFit="cover"
              height={50}
            />
          </div>
          <p className="text-xl md:block hidden mt-2 ">
            Subscribe to Newsletter
          </p>
          <div className="mt-6 md:mt-0">
            <p className="text-xl md:hidden text-center font-extrabold block mb-4">
              Subscribe to Newsletter
            </p>
            <div className="w-full">
              <div className="flex  w-full border rounded-full border-gray-500 border-r-none relative ">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-none pr-5  outline-0 w-8/12 focus-visible:ring-0"
                />
                <Button className="bg-[#32B22E]  hover:bg-[#32B22E] -right-3 absolute rounded-full ">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 border-gray-800 border-y py-10 md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-extrabold text-lg mb-4">
              Shaping Futures Through Global Education
            </h3>
            <div className="flex space-x-3 mt-4">
              <Link
                href="#"
                className="bg-[#32B22E] p-2 rounded-full text-black"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="bg-[#32B22E] p-2 rounded-full text-black"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="bg-[#32B22E] p-2 rounded-full text-black"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="bg-[#32B22E] p-2 rounded-full text-black"
              >
                <Youtube className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="bg-[#32B22E] p-2 rounded-full text-black"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Test Preparation */}
          <div>
            <h3 className="font-extrabold text-lg mb-4">Test Preparation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  IELTS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  PTE Academic
                </Link>
              </li>
            </ul>

            <h3 className="font-extrabold text-lg mt-8 mb-4">Latest News</h3>
            <p className="text-sm text-gray-300">
              Stay connected and get latest updates from ILM OVERSEAS (PVT) LTD
            </p>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="font-extrabold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Director{"'"}s Message
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Location */}
          <div>
            <h3 className="font-extrabold text-lg mb-4">Our Location</h3>
            <p className="text-sm text-gray-300 mb-4">
              A Street 6, Block A Muslim Town, Lahore, Punjab
            </p>
            <div className="h-[120px] w-full bg-gray-800 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27221.015547274557!2d74.3050646!3d31.5096998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b9ebaaaab%3A0xa7f967f98b83f6b9!2sMuslim%20Town%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1712832690749!5m2!1sen!2s"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4   text-center text-sm text-gray-500">
          Copyright © 2023 ILM Overseas
        </div>
      </div>
    </footer>
  );
};

export default Footer;
