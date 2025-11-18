import React from "react";

export default function Concert() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-start md:justify-center text-white px-6"
      style={{ backgroundImage: "url('/golden-bg.png')" }}
    >
      <div className="mt-40 md:mt-10 px-6 py-2 border border-white font-bold font-baloo text-xl rounded-full backdrop-blur-sm">
        December 31, 2025
      </div>

      <h1 className="text-3xl md:text-7xl font-extrabold font-baloo text-center mt-6">
        The Kreative Nexus
      </h1>
      <h2 className="text-3xl md:text-6xl font-extrabold font-baloo text-center mt-2">
        New Year Concert
      </h2>

      <h3 className="text-2xl font-bold font-baloo text-center mt-10">Performers Wanted</h3>
      <p className="text-center font-baloo font-semibold text-md md:text-xl mt-3 text-white">
        Work hard. Collab harder. And your art could light up our stage on December 31st.
      </p>

      <button className="mt-8 px-8 py-3 rounded-2xl cursor-pointer bg-yellow-400 text-black font-bold font-baloo text-xl shadow-lg">
        Be On the Stage
      </button>

      <img
        src="/speakers.png"
        alt="speakers"
        className="absolute bottom-3 left-0 w-32 md:w-48 select-none"
      />

      <img
        src="/band.png"
        alt="band silhouette"
        className="absolute bottom-5 right-0 w-40 md:w-56 select-none"
      />
    </div>
  );
}
