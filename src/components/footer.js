import React from "react";
import { ArrowUp, Facebook, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-primaryDark text-white py-12">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex flex-col items-center mb-8 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <ArrowUp size={24} className="mb-2" />
          <span className="text-xs tracking-widest">BACK TO TOP</span>
        </button>

        {/* Social media icons */}
        <div className="flex space-x-6 mb-6">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-light">
          <span>@2020 Tomasz Gajda</span>
          <span className="ml-1">All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
