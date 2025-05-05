import React from "react";
import { ArrowUp, Facebook, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-primaryDark text-white py-12">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Back to top button */}
        <a
          href="top"
          className="flex flex-col items-center mb-8 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <ArrowUp size={24} className="mb-2" />
          <span className="text-xs tracking-widest">BACK TO TOP</span>
        </a>

        {/* Social media icons */}
        <div className="flex space-x-6 mb-6">
          <a
            href="https://www.facebook.com/profile.php?id=100042025066815"
            className="hover:opacity-80 transition-opacity"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/usmanindev"
            className="hover:opacity-80 transition-opacity"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/usmanmalik9456/#"
            className="hover:opacity-80 transition-opacity"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-light">
          <span>@2025 Usman Malik</span>
          <span className="ml-1">All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
