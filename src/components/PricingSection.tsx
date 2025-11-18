// CreativeRevolutionSection.tsx
import React from "react";

export default function CreativeRevolutionSection() {
  return (
    <section className="w-full text-white py-10 md:py-20 px-6 relative  min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 z-10"
        style={{
          backgroundImage: "url('/golden-gradient.jpg')",
          transformOrigin: "center",
        }}
      />

      <div className="w-full h-full  py-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-baloo mb-2">
              15 Days of <br className="block md:hidden" />
              <span className="text-yellow-400">Creative Revolution</span>
            </h2>
            <p className="text-[#D2D2D2] font-baloo font-bold text-lg md:text-xl">
              Your creative journey starts here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative w-full max-w-sm mx-auto bg-black text-center rounded-3xl border border-white p-6 md:px-2 md:py-10 shadow-lg">
              {/* DATE BADGE — TOP LEFT */}
              <div className="absolute top-4 font-baloo font-bold left-4 px-5 py-2 border-2 border-white rounded-xl text-white text-sm tracking-wide bg-black">
                NOV 11 - 17
              </div>

              {/* ICON */}
              <div className="mt-16 flex justify-center">
                <img src="/rocket.png" alt="" />
              </div>

              {/* TITLE */}
              <h3 className="mt-10 font-baloo text-2xl font-extrabold text-white">
                The Revolution Begins
              </h3>

              {/* SUBTEXT */}
              <p className="mt-4 text-[#D2D2D2] font-baloo text-base">
                Upload with your hashtags
              </p>

              {/* BUTTON */}
              <div className="w-full flex justify-center items-end">
                <button className="mt-10 w-fit bg-[#FFB700] text-black text-xl px-4 py-3 rounded-full flex items-center justify-center gap-3 hover:bg-yellow-300 transition-all font-bold font-baloo">
                  Learn More <span className="text-2xl">→</span>
                </button>
              </div>
            </div>

            <div className="relative w-full max-w-sm mx-auto bg-black text-center rounded-3xl border border-white p-6 md:px-2 md:py-10 shadow-lg">
              {/* DATE BADGE — TOP LEFT */}
              <div className="absolute top-4 font-baloo font-bold left-4 px-5 py-2 border-2 border-white rounded-xl text-white text-sm tracking-wide bg-black">
                NOV 11 - 17
              </div>

              {/* ICON */}
              <div className="mt-16 flex justify-center">
                <img src="/flood.png" alt="" />
              </div>

              {/* TITLE */}
              <h3 className="mt-10 font-baloo text-2xl font-extrabold text-white">
                The Revolution Begins
              </h3>

              {/* SUBTEXT */}
              <p className="mt-4 text-[#D2D2D2] font-baloo text-base">
                Upload with your hashtags
              </p>

              {/* BUTTON */}
              <div className="w-full flex justify-center items-end">
                <button className="mt-10 w-fit bg-[#FFB700] text-black text-xl px-4 py-3 rounded-full flex items-center justify-center gap-3 hover:bg-yellow-300 transition-all font-bold font-baloo">
                  Learn More <span className="text-2xl">→</span>
                </button>
              </div>
            </div>

            <div className="relative w-full max-w-sm mx-auto bg-black text-center rounded-3xl border border-white p-6 md:px-2 md:py-10 shadow-lg">
              {/* DATE BADGE — TOP LEFT */}
              <div className="absolute top-4 font-baloo font-bold left-4 px-5 py-2 border-2 border-white rounded-xl text-white text-sm tracking-wide bg-black">
                NOV 11 - 17
              </div>

              {/* ICON */}
              <div className="mt-16 flex justify-center">
                <img src="/flag.png" alt="" />
              </div>

              {/* TITLE */}
              <h3 className="mt-10 font-baloo text-2xl font-extrabold text-white">
                The Revolution Begins
              </h3>

              {/* SUBTEXT */}
              <p className="mt-4 text-[#D2D2D2] font-baloo text-base">
                Upload with your hashtags
              </p>

              {/* BUTTON */}
              <div className="w-full flex justify-center items-end">
                <button className="mt-10 w-fit bg-[#FFB700] text-black text-xl px-4 py-3 rounded-full flex items-center justify-center gap-3 hover:bg-yellow-300 transition-all font-bold font-baloo">
                  Learn More <span className="text-2xl">→</span>
                </button>
              </div>
            </div>

            <div className="relative w-full max-w-sm mx-auto bg-black text-center rounded-3xl border border-white p-6 md:px-2 md:py-10 shadow-lg">
              <div className="absolute top-4 font-baloo font-bold left-4 px-5 py-2 border-2 border-white rounded-xl text-white text-sm tracking-wide bg-black">
                NOV 11 - 17
              </div>

              <div className="mt-16 flex justify-center">
                <img src="/aim.png" alt="" />
              </div>

              <h3 className="mt-10 font-baloo text-2xl font-extrabold text-white">
                The Revolution Begins
              </h3>

              <p className="mt-4 text-[#D2D2D2] font-baloo text-base">
                Upload with your hashtags
              </p>

              <div className="w-full flex justify-center items-end">
                <button className="mt-10 w-fit bg-[#FFB700] text-black text-xl px-4 py-3 rounded-full flex items-center justify-center gap-3 hover:bg-yellow-300 transition-all font-bold font-baloo">
                  Learn More <span className="text-2xl">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
