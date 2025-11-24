"use client";
import Image from "next/image";

export default function StepsSection() {
  return (
    <section className="w-full bg-black text-white py-10 md:py-20 px-6 md:px-0 max-w-6xl mx-auto font-brand">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          3 Steps to Go From <span className="text-yellow-400">Meme</span> to
          Masterpiece
        </h2>
        <p className="text-[#D2D2D2] mt-3 font-bold text-lg md:text-xl">
          Your creative journey starts here
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="relative rounded-2xl border border-white bg-black px-8 py-16 text-center shadow-[0_0_40px_10px_rgba(255,180,0,0.1)]">
          <div className="absolute top-5 left-5">
            <Image
              src="/upload.png"
              alt="Upload Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="text-5xl font-extrabold tracking-tight">
              01
            </h3>

            <p className="text-2xl mt-4 font-bold">
              Drop In (Like a Meme)
            </p>

            <p className="text-[#D2D2D2] font-bold mt-3 leading-relaxed max-w-[300px] text-sm">
              Join our WhatsApp community — no gatekeeping, just good vibes.
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl border border-white bg-black px-8 py-16 text-center shadow-[0_0_40px_10px_rgba(255,180,0,0.1)]">
          <div className="absolute top-5 left-5">
            <Image
              src="/search.png"
              alt="Upload Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="text-5xl font-extrabold tracking-tight">
              02
            </h3>

            <p className="text-2xl mt-4 font-bold">
              Find Your Missing Piece
            </p>

            <p className="text-[#D2D2D2] font-bold mt-3 leading-relaxed max-w-[300px] text-sm">
              Match with others in your genre — singers, dancers, editors, all
              under one roof.
            </p>
          </div>
        </div>
        <div className="relative rounded-2xl border border-white bg-black px-8 py-16 text-center shadow-[0_0_40px_10px_rgba(255,180,0,0.1)]">
          <div className="absolute top-5 left-5">
            <Image
              src="/community.png"
              alt="Upload Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="text-5xl font-extrabold tracking-tight">
              03
            </h3>

            <p className="text-2xl mt-4 font-bold">
              Make Stuff Together
            </p>

            <p className="text-[#D2D2D2] font-bold mt-3 leading-relaxed max-w-[300px] text-sm">
              Upload your work, build teams, and create magic for the world to
              see
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
