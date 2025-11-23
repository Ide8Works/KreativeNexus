"use client";

import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Globe, Upload } from "lucide-react";

export default function FooterSection() {
  return (
    <footer
      className="
      w-full bg-[#1E1E1E] text-white rounded-t-[60px]
      px-6 py-10 md:px-16 md:py-16
      font-baloo font-bold
    "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-20">
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-start items-center gap-5">
              <Image
                src="/logo.png"
                width={50}
                height={50}
                alt="Kreative Nexus"
                className="font-climate"
              />
              <span className="font-climate text-xl md:text-3xl">
                KREATIVE <br /> NEXUS
              </span>
            </div>

            <p className="text-lg md:text-xl max-w-lg">
              Where Ideas Glow, and Brands Flow.
            </p>
          </div>

          <div className="mt-10 md:mt-16">
            <h3 className="text-[#F4D04E] text-3xl">About US</h3>

            <p className="mt-6 text-white/80 text-sm md:text-md leading-relaxed max-w-xl">
              AI is taking the boring jobs. That leaves the magic for us. But
              artists are lonely. Writers need singers. Dancers need editors.
              The Mission: Unite India's creators, flood the internet with Human
              Art, and force the big brands to give us a Stage on Dec 31st.
            </p>
          </div>
        </div>

        <div className="md:pl-24">
          <h3 className="text-[#F4D04E] text-3xl md:text-4xl mb-3 md:mb-10">
            Quick Links
          </h3>

          <ul className="space-x-6 md:space-y-6 text-xl flex md:flex md:flex-col">
            <li className="cursor-pointer hover:text-[#F4D04E]">Home</li>
            <li className="cursor-pointer hover:text-[#F4D04E]">About</li>
            <li className="cursor-pointer hover:text-[#F4D04E]">Concert</li>
            <li className="cursor-pointer hover:text-[#F4D04E]">FAQS</li>
          </ul>
        </div>

        <div className="md:mt-14 flex flex-col justify-start items-start md:items-center gap-10 md:gap-20">
          <div className="flex gap-8 md:mt-10 text-[#F4D04E] text-2xl md:text-3xl">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
          <button
            className="
              flex items-center gap-4 bg-[#FFD000] hover:bg-[#FFD700] text-black
              px-8 py-5 rounded-xl text-xl font-bold cursor-pointer
            "
          >
            <Globe className="w-6 h-6" />
            Join Whatsapp Channel
          </button>
        </div>
      </div>
    </footer>
  );
}
