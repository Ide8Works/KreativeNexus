import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-3 pt-32 md:pb-20 bg-black font-brand">
      <Image
        src="/lyrics.png"
        alt="music"
        width={120}
        height={120}
        className="hidden md:block absolute left-10 bottom-10 opacity-20 animate-float z-20"
      />

      <div className="hidden md:block absolute top-36 right-[30%] md:right-[55%] translate-x-[20%] -rotate-8 bg-white/10 border border-white/20 text-[#D2D2D2] px-4 py-1 rounded-full backdrop-blur-sm text-xs md:text-lg z-20">
        Doggo wrote a banger rap but can't sing
      </div>

      <div className=" hidden md:block absolute bottom-16 md:right-[45%] rotate-[8deg] bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm text-xs md:text-md z-20 font-bold">
        Kitty can sing, but only knows meow-meow.
      </div>

      <div className="flex flex-col gap-12 md:flex-row justify-between items-center w-full  max-w-6xl">
        <div className="relative gap-12 items-center z-10">
          <div className="md:-space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)] uppercase">
              The War Against <br /> AI Begins Now
            </h1>

            <p className="md:mt-5 text-white text-xs md:text-2xl">
              4 stages , 4 cities. Unlock them by Dec 15 <br />will you fight for your art?
            </p>

            <button className=" mt-5 md:mt-10 flex items-center gap-2 bg-[#FFD000] text-black px-6 py-3 rounded-2xl text-lg shadow-[0_3px_8px_rgba(0,0,0,0.3)] hover:bg-[#F8D146] transition cursor-pointer font-bold">
              <span className="text-xl">
                <img src="/globe.svg" className="h-5 w-5" alt="" />
              </span>
          Join Whatsapp Channel
            </button>
          </div>
        </div>

        <div className="relative z-30">
          <img src="/heroimg2.png" className="opacity-100 pointer-events-none" alt="" />
        </div>
      </div>

      <div
        className="absolute inset-0 bg-cover opacity-60 z-0"
        style={{ backgroundImage: "url('/bg-gradient.jpg')" }}
      ></div>
    </section>
  );
}
