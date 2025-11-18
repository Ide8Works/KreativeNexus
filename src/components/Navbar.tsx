import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full fixed top-5 left-0 z-50 flex justify-center">
      <div className="flex items-center justify-between w-[95%] max-w-[1400px] bg-white rounded-full border-[3px] border-[#D4AF37] py-2 px-6 shadow-[0_4px_20px_rgba(212,175,55,0.25)]">
        <div className="flex items-center md:gap-3">
          <Image
            src="/logo.png"
            alt="Kreative Nexus"
            className="md:scale-125"
            width={35}
            height={35}
          />

          <div className="flex flex-col ml-3 font-climate">
            <span className="text-black font-bold tracking-wide text-xs md:text-lg">
              KREATIVE
            </span>
            <span className="text-black font-bold tracking-wide text-xs md:text-lg">
              NEXUS
            </span>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-[#FFB700] text-black px-2 md:px-5 py-2 rounded-2xl shadow-sm hover:bg-[#FFD000]/70 transition cursor-pointer font-baloo font-bold md:text-xl">
          <span className="text-xs md:text-lg text-black">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/1A1A1A/globe--v1.png"
              alt="globe--v1"
            />
          </span>
          Community
        </button>
      </div>
    </header>
  );
}
