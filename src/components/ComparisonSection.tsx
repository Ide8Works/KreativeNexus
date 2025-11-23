"use client";
import Image from "next/image";

export default function ComparisonSection() {
  return (
    <section className="relative w-full bg-black text-white py-10 md:py-20 px-6 md:px-0 max-w-6xl mx-auto">
      <div
        className="hidden md:block absolute inset-0 z-20 top-64 h-[700px] bg-center bg-no-repeat bg-contain opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url('/lightning.png')",
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold font-baloo leading-tight">
          Where Chaos Becomes <span className="text-yellow-400">Creation</span>
        </h2>
        <p className="text-[#D2D2D2] font-bold font-baloo text-xl mt-2">
          Watch the magic happen when misfits collaborate
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-40 z-0">
        <div>
          <h3 className="text-3xl font-baloo font-bold mb-4 text-center">
            Before Chaos
          </h3>

          <div className="rounded-3xl border border-white overflow-hidden shadow-xl bg-white/5 backdrop-blur-md h-[400px]">
            <Image
              src="/before-chaos.png"
              alt="before chaos"
              width={500}
              height={500}
              className="w-full h-auto bg-cover scale-125"
            />
          </div>

          <div className="mt-6 space-y-3">
            <h4 className="text-3xl font-bold font-baloo">
              Everyone’s grinding... <br /> the collab is loading 🔄
            </h4>
            <p className="text-[#D2D2D2] text-md md:text-lg leading-relaxed font-bold font-baloo">
              In a studio buzzing with untamed ideas, every creator is lost in
              their own world — the writer chasing rhymes, the singer chasing
              notes, the dancer chasing rhythm, the videographer chasing the
              perfect shot, and the editor chasing perfection.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-baloo font-bold mb-4 text-center">
            After Chaos
          </h3>

          <div className="rounded-3xl border border-white overflow-hidden shadow-xl bg-white/5 backdrop-blur-md h-[400px]">
            <video
              src="/chaos.mp4"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div className="mt-6 space-y-3">
            <h4 className="text-3xl font-bold font-baloo">
              Where Misfits Collab and Turn Chaos Into Content
            </h4>
            <p className="text-[#D2D2D2] text-md md:text-lg leading-relaxed font-bold font-baloo">
              The only place where your incomplete ideas find their perfect
              match. Where lyricists meet producers, singers find songwriters,
              and creators build something impossibly awesome together.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center mt-16">
        <button className="flex items-center justify-center gap-3 bg-[#FFB700] cursor-pointer text-black px-8 py-3 rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:bg-yellow-300 transition font-baloo font-bold text-lg">
          <span className="text-xs md:text-lg text-black">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/1A1A1A/globe--v1.png"
              alt="globe--v1"
            />
          </span>
          Join Whatsapp Channel
        </button>
      </div>
    </section>
  );
}
