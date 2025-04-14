"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import headerData from "@/lib/data";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const toggleDropdown = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="">
          <Image
            src="/images/ilmlogo.png"
            alt="ILM Overseas"
            width={100}
            height={100}
            className="w-32"
          />
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black md:hidden flex focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {headerData.map((item, index) => {
            if (item.type === "link") {
              return (
                <Link
                    key={index}
                    href={item.href || "/"}
                    className={`text-gray-800 font-semibold ${
                      pathname === item.href
                        ? "text-green-600"
                        : "hover:text-[#32B22E]"
                    }`}
                  >
                  {item.label}
                </Link>
              );
            }

            if (item.type === "dropdown" && item.items) {
              return (
                <DropdownMenu key={index}>
                <DropdownMenuTrigger className="outline-none  font-semibold flex items-center cursor-pointer">
                  {item.label} <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-0">
                  {item.items.map((subItem, subIndex) => (
                    <DropdownMenuItem key={subIndex} className="p-0">
                      <Link
                        href={subItem.href || "/"}
                        className={`hover:bg-[#32B22E] hover:text-white w-full px-3 py-2 font-medium ${
                          pathname === subItem.href ? "text-green-600" : "text-black"
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              );
            }
          })}
        </nav>

        {/* Mobile Toggle Button */}

        <Button className="bg-[#32B22E] md:flex hidden text-white rounded-full px-8 py-6 text-lg">
          Get Our Consultation
        </Button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t absolute h-screen top-17 left-0 right-0 bottom-0">
          <div className="px-6 py-4 grid space-y-4">
            {headerData.map((item, index) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={index}
                    href={item.href || "/"}
                    className={`text-gray-800  font-medium ${
                      pathname === item.href
                        ? "text-green-600"
                        : "hover:text-[#32B22E]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.type === "dropdown" && item.items) {
                return (
                  <div key={index}>
                    {/* Mobile Dropdown Toggle */}
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex justify-between items-center w-full text-black font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transform ${
                          dropdownOpen === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {dropdownOpen === index && (
                      <div className="ml-4 space-y-3">
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href || "/"}
                            className={`block font-medium ${
                              pathname === subItem.href
                                ? "text-green-600"
                                : "text-black"
                            }`}
                            onClick={handleLinkClick} // Close menu when clicked
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
