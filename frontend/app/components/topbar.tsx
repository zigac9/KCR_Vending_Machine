"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import localeManager from "../utils/LocaleManager";

export default function Topbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname.startsWith("/pripravljanje");
  const [currentLanguage, setCurrentLanguage] = useState("SI");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectLanguage = (lang:string) => {
    // Handle language change logic here
    console.log(`Language selected: ${lang}`);
    setShowDropdown(false); // Close dropdown after selecting a language
    setCurrentLanguage(lang);
    localeManager.setLocale(lang);

  };

  return (
    <main className="px-8">
      <div className="border-b-2 border-black border-opacity-50 w-full flex justify-between items-center">
        {!isHomePage ? (
          <button
            onClick={router.back}
            className="btn-back bg-coffe-400 text-white rounded-md py-2 px-3 font-semibold"
          >
            <div className="flex items-center">
              <ArrowLeft size={24} />
              <span className="ml-2">Nazaj</span>
            </div>
          </button>
        ) : (
          <div className="w-8" />
        )}
        <div className="relative">
          <Image
            src={`/${currentLanguage}.svg`}
            alt="Language selection"
            width={60}
            height={50}
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-neutral-500 border border-gray-300 rounded-md shadow-lg z-10">
              <button
                onClick={() => selectLanguage("SI")}
                className="flex items-center px-2 py-1 hover:bg-gray-100  w-full"
              >
                <Image src="/SI.svg" alt="Slovenian" width={24} height={24} />
                <span className="ml-2">Slovenian</span>
              </button>
              <button
                onClick={() => selectLanguage("EN")}
                className="flex items-center px-2 py-1 hover:bg-gray-100 w-full"
              >
                <Image src="/EN.svg" alt="English" width={24} height={24} />
                <span className="ml-2">English</span>
              </button>
              <button
                onClick={() => selectLanguage("DE")}
                className="flex items-center px-2 py-1 hover:bg-gray-100 w-full"
              >
                <Image src="/DE.svg" alt="German" width={24} height={24} />
                <span className="ml-2">German</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
