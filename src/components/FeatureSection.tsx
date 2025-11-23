import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="relative w-full text-white py-10 md:py-20 px-6 overflow-hidden z-0 font-baloo font-bold">
      <div className="relative max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl mb-2">
          Struggle is Real (and Relatable)
        </h2>
        <p className="text-[#D2D2D2]">
          <span className="text-md md:text-xl">Everyone’s got talent. No one’s got a team.</span>
          <br />
         <span className="text-md"> Use these #hastags to showcase yours</span>
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="relative bg-white/5 rounded-3xl border border-white overflow-hidden shadow-lg text-center">
          <div className="absolute top-5 w-full text-center z-20 text-3xl">
            Writer
          </div>

          <div className="relative w-full h-80 md:h-[380px]">
            <Image src="/mic.png" alt="writer" fill className="object-cover" />
          </div>

          <div className="absolute bottom-5 w-full text-center text-white text-sm md:text-2xl opacity-90 z-20 ">
           #KreativeWords
          </div>
        </div>

        <div className="relative bg-white/5 rounded-3xl border border-white overflow-hidden shadow-lg text-center">
          <div className="absolute top-5 w-full text-center z-20 text-3xl">
            Singer
          </div>

          <div className="relative w-full h-80 md:h-[380px]">
            <Image src="/cat.png" alt="singer" fill className="object-cover" />
          </div>

           <div className="absolute bottom-5 w-full text-center text-white text-sm md:text-2xl opacity-90 z-20 ">
           #KreativeVoice
          </div>
        </div>

        <div className="relative bg-white/5 rounded-3xl border border-white overflow-hidden shadow-lg text-center">
          <div className="absolute top-5 w-full text-center z-20 text-3xl">
            Dancer
          </div>

          <div className="relative w-full h-80 md:h-[380px]">
            <Image src="/duck.png" alt="dancer" fill className="object-cover" />
          </div>

          <div className="absolute bottom-5 w-full text-center text-white text-sm md:text-2xl opacity-90 z-20 ">
           #KreativeMoves
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-14">
        <div className="relative bg-white/5 rounded-3xl border border-white overflow-hidden shadow-lg text-center">
          <div className="absolute top-5 w-full text-center z-20 text-3xl">
            Videographer
          </div>

          <div className="relative w-full h-80 md:h-[380px]">
            <Image
              src="/monkey.png"
              alt="videographer"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-5 w-full text-center text-white text-sm md:text-2xl opacity-90 z-20 ">
           #KreativeVision
          </div>
        </div>

        <div className="relative bg-white/5 rounded-3xl border border-white overflow-hidden shadow-lg text-center">
          <div className="absolute top-5 w-full text-center z-20 text-3xl">
            Editor
          </div>

          <div className="relative w-full h-80 md:h-[380px]">
            <Image
              src="/lizard.png"
              alt="editor"
              fill
              className="object-cover"
            />
          </div>

           <div className="absolute bottom-5 w-full text-center text-white text-sm md:text-2xl opacity-90 z-20 ">
           #KreativeCuts
          </div>
        </div>

         <div className="relative bg-white/5 rounded-3xl border border-white overflow-hidden shadow-lg text-center">
          <div className="absolute top-5 w-full text-center z-20 text-3xl">
            Innovators
          </div>

          <div className="relative w-full h-80 md:h-[380px]">
            <Image
              src="/innovation.png"
              alt="editor"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-5 w-full text-center text-white text-sm md:text-2xl opacity-90 z-20 ">
           #KreativeMinds
          </div>
        </div>
      </div>

      <div>
        <img
          src="/camera.png"
          className="hidden md:block absolute right-[5%] top-[52%] -rotate-30 h-30 w-30"
          alt="fgdf"
        />
      </div>
    </section>
  );
}
