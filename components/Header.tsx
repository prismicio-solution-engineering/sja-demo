"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import sja_logo from "@/assets/sja_logo_correct_sized1.webp";

// Define types for the navigation data
type NavigationData = {
  [key: string]: {
    [category: string]: string[];
  };
};

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigationData: NavigationData = {
    "First Aid Courses": {
      "Workplace First Aid Courses": [
        "First Aid at work",
        "Emergency first aid at work",
        "First aid at work requalification",
        "Annual refresher training",
        "First Response Emergency Care Level 3 (FREC 3)",
        "First Responder on Scene (FROS)",
        "First Responder Emergency Care (FREC 3) Requalification",
        "First Responder On Scene (FROS) Requalification",
      ],
      "Mental health and wellbeing courses": [
        "Mental Health First Aid (2 Days)",
        "Mental Health: Workplace First Responder (1 Day)",
        "Mental Health Awareness (1/2 Day)",
        "Mental Health: Creating a supportive workplace",
        "Mental Health Manager - supporting your team",
      ],
      "E-Learning Courses": [
        "First Aid Annual Refresher",
        "IOSH Managing Safely",
        "IOSH Working Safely",
        "IOSH Safety for Executives",
        "NEBOSH National Diploma",
        "Manual Handling",
      ],
      "Other courses": [
        "Fire, health and safety courses",
        "Courses for schools",
      ],
    },
    "Online Advice": {
      "CPR Hub": [],
      "First Aid Advice": [],
      "Free First Aid Apps": [],
      "How-To Guides": [],
      "Free Resources": [],
      "Need to Know": [],
    },
    "First Aid Supplies": {
      "Defibrillators, Accessories and Training Models": [],
      "First Aid Kits": [],
      "First Aid Supplies & Consumables": [],
      "Health & Safety Equipment": [],
      "Personal Protective Equipment": [],
      "Specialist Equipment": [],
      "Training Manikins & Equipment": [],
      "Moving & Handling Equipment": [],
      "Manuals & Guides": [],
      "Working out what you need": [
        "Defibrillator buying guide",
        "What to put in a first aid kit",
        "Workplace First Aid Rooms",
        "The Circuit - National Defibrillator Network",
        "How do I become a National Account Customer?",
      ],
    },
    "Get Involved": {
      "Volunteer roles": [
        "Volunteer with us",
        "Find an opportunity",
        "Meet our volunteers",
        "Student Volunteering",
      ],
      "Youth programmes": [
        "Badgers (5-10)",
        "Cadets (11-17)",
        "Young Responders",
        "NHS Cadets",
      ],
      Fundraise: [
        "Fundraising events",
        "Organise your own fundraiser",
        "Face-to-face fundraising",
        "Ways to give",
        "Online donations",
        "Legacy giving",
        "Give in memory",
        "Philanthropy",
        "Offline donations",
        "Lottery",
      ],
    },
    "What We Do": {
      "Why train with us?": [
        "Our training venues",
        "Working out what you need",
        "In-house / On-site training",
        "Renewing your certificate tool",
        "Training blog",
        "Get up-to 70% OFF Training",
        "How do I become a National Account Customer?",
      ],
    },
  };

  const handleMouseEnter = (menuItem: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(menuItem);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={sja_logo} height={48} width={130} alt="SJA logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {Object.keys(navigationData)
              .slice(0, 4)
              .map((menuItem) => (
                <div
                  key={menuItem}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menuItem)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:text-primary-green hover:border-b-2 hover:border-primtext-primary-green">
                    {menuItem}
                  </button>
                </div>
              ))}
          </nav>

          {/* Right Side - What We Do, Divider and Donate Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="h-8 w-px bg-gray-300"></div>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("What We Do")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:text-primary-green hover:border-b-2 hover:border-primtext-primary-green">
                What We Do
              </button>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-md transition-colors">
              Donate
            </button>
          </div>

          {/* Global Dropdown Menu */}
          {activeDropdown &&
            navigationData[activeDropdown] &&
            Object.keys(navigationData[activeDropdown]).length > 0 && (
              <div
                className="absolute top-full left-10 right-10 mt-0 bg-white border-t border-gray-200 shadow-lg z-50"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-7xl mx-auto px-4">
                  <div className="flex flex-row flex-wrap py-6">
                    {Object.entries(navigationData[activeDropdown]).map(
                      ([category, items], index) => (
                        <div key={index} className="w-1/4 px-6">
                          {items.length > 0 ? (
                            // Has sub-items - show as category header with smaller links
                            <>
                              <h3 className="font-bold text-gray-900 mb-4 text-sm">
                                {category}
                              </h3>
                              <ul className="space-y-2">
                                {items.map(
                                  (item: string, itemIndex: number) => (
                                    <li key={itemIndex}>
                                      <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-primary-green transition-colors block py-1"
                                      >
                                        {item}
                                      </a>
                                    </li>
                                  )
                                )}
                              </ul>
                            </>
                          ) : (
                            // No sub-items - show as main link
                            <a
                              href="#"
                              className="text-sm text-gray-900 hover:text-primary-green transition-colors block py-2"
                            >
                              {category}
                            </a>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-green"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              {Object.keys(navigationData).map((menuItem) => (
                <div key={menuItem}>
                  <button
                    className={`block w-full text-left px-3 py-2 text-base font-medium ${
                      menuItem === "First Aid Courses"
                        ? "text-primary-green"
                        : "text-gray-700 hover:text-primary-green"
                    }`}
                  >
                    {menuItem}
                  </button>
                  {navigationData[menuItem] &&
                    Object.keys(navigationData[menuItem]).length > 0 && (
                      <div className="ml-4 mt-2 space-y-2">
                        {Object.entries(navigationData[menuItem]).map(
                          ([category, items]) => (
                            <div key={category}>
                              <div className="font-medium text-sm text-gray-900 mb-1">
                                {category}
                              </div>
                              <div className="ml-4 space-y-1">
                                {items.map(
                                  (item: string, itemIndex: number) => (
                                    <a
                                      key={itemIndex}
                                      href="#"
                                      className="block text-sm text-gray-600 hover:text-primary-green py-1"
                                    >
                                      {item}
                                    </a>
                                  )
                                )}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-md transition-colors">
                  Donate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
