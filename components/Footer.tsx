import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import regulator from "@/assets/regulator.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Column 1 */}
          <div className="space-y-4">
            <a
              href="/privacy-cookies"
              className="block hover:text-gray-300 transition-colors"
            >
              Privacy and Cookies
            </a>
            <a
              href="/modern-slavery-act"
              className="block hover:text-gray-300 transition-colors"
            >
              Modern Slavery Act
            </a>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <a
              href="/terms-conditions"
              className="block hover:text-gray-300 transition-colors"
            >
              T&Cs
            </a>
            <a
              href="/legal-site-information"
              className="block hover:text-gray-300 transition-colors"
            >
              Legal and site information
            </a>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <a
              href="/sitemap"
              className="block hover:text-gray-300 transition-colors"
            >
              Sitemap
            </a>
            <a
              href="/gift-aid"
              className="block hover:text-gray-300 transition-colors"
            >
              Gift Aid
            </a>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <a
              href="/careers"
              className="block hover:text-gray-300 transition-colors"
            >
              Careers
            </a>
            <a
              href="/sja-connect"
              className="block hover:text-gray-300 transition-colors"
            >
              SJA Connect
            </a>
          </div>

          {/* Column 5 */}
          <div className="space-y-4">
            <a
              href="/press-centre"
              className="block hover:text-gray-300 transition-colors"
            >
              Press Centre
            </a>
            <a
              href="/contact-us"
              className="block hover:text-gray-300 transition-colors"
            >
              Contact Us
            </a>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-end mt-8 space-x-4">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} fill="white" strokeWidth={1} />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-300 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} fill="white" strokeWidth={1} />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} fill="white" strokeWidth={1} />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} fill="white" strokeWidth={1} />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-300 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} fill="white" strokeWidth={1} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright Text */}
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2025 St John Ambulance. Registered charity no. 1077265/1. A
              company registered in England no. 3866129
            </div>

            {/* Fundraising Regulator Logo */}
            <div className="flex items-center">
              <Image
                src={regulator}
                height={48}
                width={160}
                alt="Fundraising regulator logo"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
