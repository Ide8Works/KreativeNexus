import React from "react";

export default function ContactSection() {
  return (
    <section
      className="w-full md:min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-24 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/lightning.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center max-w-6xl mx-auto">

        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight font-baloo">
          Stop scrolling memes.
        </h1>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2 text-yellow-400 font-baloo">
          Start creating them.
        </h2>

        <p className="text-[#D2D2D2] mt-6 text-md md:text-xl font-baloo font-semibold w-full">
          Your seat at the 2025 New Year's stage is waiting. Join thousands of
          creators turning chaos into content.
        </p>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="flex items-center gap-3 bg-[#FFD000] cursor-pointer font-baloo font-bold text-black px-8 py-2 rounded-2xl text-lg shadow-lg">
            <img src="/globe.svg" className="h-5 w-5" alt="" /> Join the
            Community
          </button>
          <button className="flex items-center gap-3 bg-[#FFD000] cursor-pointer font-baloo font-bold text-black px-8 py-2 rounded-2xl text-lg shadow-lg">
            📸 Follow on Instagram
          </button>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="flex items-center gap-3 bg-[#FFD000] cursor-pointer font-baloo font-bold text-black px-10 py-2 rounded-2xl text-lg shadow-lg">
            ⬆️ Upload your work with #Kreative
          </button>
        </div>
      </div>
    </section>
  );
}
