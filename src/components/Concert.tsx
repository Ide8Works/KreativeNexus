"use client";

import { useState, useEffect } from "react";

export default function Concert() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const section = document.getElementById("concert-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="concert-section"
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-start md:justify-center text-white px-6 font-brand overflow-hidden"
      style={{ backgroundImage: "url('/golden-bg.png')" }}
    >
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

      {/* Floating Light Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Spotlight Effect that follows mouse */}
      <div
        className="absolute w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Warning Message with Pulse */}
      <div
        className="relative z-10 transform transition-all duration-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <div className="relative inline-block group">
          <div className="absolute -inset-2 bg-red-500/20 blur-lg rounded-lg animate-pulse" />
          <p className="relative text-center font-semibold text-md md:text-2xl mt-3 text-white bg-black/40 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-500/50 shadow-xl">
            <span className="inline-block animate-pulse text-red-400 mr-2">
              ⚠️
            </span>
            If we have the numbers, we announce the Concert Venues. If we are
            silent, the revolution ends here.
            <span className="inline-block animate-pulse text-red-400 ml-2">
              ⚠️
            </span>
          </p>
        </div>
      </div>

      {/* Date Badge with Glow */}
      <div
        className="relative mt-10 group cursor-default transform transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateY(0) scale(1)"
            : "translateY(20px) scale(0.9)",
          transitionDelay: "200ms",
        }}
      >
        <div className="absolute -inset-1 bg-yellow-400/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative px-6 py-2 border-2 border-white font-bold text-xl rounded-full backdrop-blur-sm bg-black/30 transition-all duration-300 group-hover:border-yellow-400 group-hover:text-yellow-400 group-hover:scale-110 group-hover:bg-black/50 shadow-lg">
          <span className="inline-block transition-transform duration-300 group-hover:scale-110">
            December 31, 2025
          </span>
        </div>
      </div>

      {/* Main Title with Animated linear */}
      <div
        className="relative transform transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transitionDelay: "400ms",
        }}
      >
        <h1 className="text-3xl md:text-7xl font-extrabold text-center mt-6 relative group cursor-default">
          <span className="relative inline-block transition-all duration-300 hover:scale-105">
            The Kreative Nexus
            <div className="absolute -inset-2 bg-linear-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </span>
        </h1>
      </div>

      <div
        className="relative transform transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transitionDelay: "500ms",
        }}
      >
        <h2 className="text-3xl md:text-6xl font-extrabold text-center mt-2 relative group cursor-default">
          <span className="relative inline-block bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-shimmer bg-size-[200%_100%] transition-all duration-300 hover:scale-105">
            New Year Concert
          </span>
        </h2>
      </div>

      {/* Performers Section */}
      <div
        className="relative transform transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transitionDelay: "600ms",
        }}
      >
        <h3 className="text-2xl font-bold text-center mt-10 relative group cursor-default">
          <span className="relative inline-block transition-all duration-300 hover:text-yellow-400">
            Performers Wanted
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </span>
        </h3>
      </div>

      <div
        className="relative transform transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transitionDelay: "700ms",
        }}
      >
        <p className="text-center font-semibold text-md md:text-xl mt-3 text-white max-w-2xl transition-all duration-300 hover:text-yellow-100">
          Work hard. Collab harder. And your art could light up our stage on
          December 31st.
        </p>
      </div>

      {/* CTA Button with Advanced Effects */}
      <div
        className="relative transform transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateY(0) scale(1)"
            : "translateY(30px) scale(0.9)",
          transitionDelay: "800ms",
        }}
      >
        <button className="relative mt-8 px-8 py-3 rounded-2xl cursor-pointer bg-linear-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/50 hover:scale-110 hover:-translate-y-1 active:scale-105 active:translate-y-0">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-linear-to-r from-yellow-300 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/40 to-transparent" />

          {/* Ripple Effect Container */}
          <div
            className="absolute inset-0 group-hover:animate-ping opacity-0 group-hover:opacity-20 bg-yellow-300 rounded-2xl"
            style={{ animationDuration: "0.8s", animationIterationCount: "1" }}
          />

          <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
            Be On the Stage
            <span className="inline-block transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
              🎤
            </span>
          </span>
        </button>
      </div>

      {/* Speakers - Left Bottom with Parallax */}
      <div
        className="absolute bottom-3 left-0 transition-all duration-700"
        style={{
          transform: `translateX(${isVisible ? 0 : -100}px) translateY(${
            scrollY * 0.1
          }px)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="relative group">
          <div className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src="/speakers.png"
            alt="speakers"
            className="relative w-32 md:w-48 select-none transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 20px rgba(250, 204, 21, 0.3))",
            }}
          />
        </div>
      </div>

      {/* Band - Right Bottom with Parallax */}
      <div
        className="absolute bottom-5 right-0 transition-all duration-700"
        style={{
          transform: `translateX(${isVisible ? 0 : 100}px) translateY(${
            scrollY * 0.1
          }px)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="relative group">
          <div className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src="/band.png"
            alt="band silhouette"
            className="relative w-40 md:w-56 select-none transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 20px rgba(250, 204, 21, 0.3))",
            }}
          />
        </div>
      </div>

      {/* Sound Wave Animation at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-yellow-400 to-transparent opacity-50">
        <div className="h-full w-full animate-pulse" />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
