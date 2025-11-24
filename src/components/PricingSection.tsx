"use client";

import React, { useState, useEffect } from "react";

export default function CreativeRevolutionSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("creative-revolution");
      if (section) {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(
          0,
          Math.min(1, 1 - rect.top / window.innerHeight)
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phases = [
    {
      id: 1,
      date: "DEC 1 - 7",
      icon: "/rocket.png",
      title: "THE AWAKENING",
      description:
        "Rally the creators and build the army with us. Choose your identity, join the HQ, and ready your masterpiece.",
      color: "from-purple-500/20 to-pink-500/20",
      accentColor: "bg-purple-500",
      glowColor: "shadow-purple-500/50",
    },
    {
      id: 2,
      date: "DEC 8 - 14",
      icon: "/flood.png",
      title: "THE NOISE FLOOD",
      description:
        "Unleash your best work and flood the internet with pure art. Use your hashtags, rep your city, and make the algorithm surrender.",
      color: "from-blue-500/20 to-cyan-500/20",
      accentColor: "bg-blue-500",
      glowColor: "shadow-blue-500/50",
    },
    {
      id: 3,
      date: "DEC 15",
      icon: "/flag.png",
      title: "JUDGEMENT DAY",
      description:
        "All uploads and engagement get counted today. Either we unlock the 4 stages in 4 cities or the dream goes dark.",
      color: "from-orange-500/20 to-red-500/20",
      accentColor: "bg-orange-500",
      glowColor: "shadow-orange-500/50",
    },
  ];

  return (
    <section
      id="creative-revolution"
      className="w-full text-white py-10 md:py-20 px-6 relative min-h-screen font-brand overflow-hidden"
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 z-0 transition-transform duration-1000"
        style={{
          backgroundImage: "url('/golden-linear.jpg')",
          transform: `scale(${1 + scrollProgress * 0.1})`,
          transformOrigin: "center",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full h-full py-0 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header with Animation */}
          <div
            className="text-center mb-16 transform transition-all duration-1000"
            style={{
              opacity: scrollProgress,
              transform: `translateY(${(1 - scrollProgress) * 50}px)`,
            }}
          >
            <div className="inline-block mb-4 px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm">
              <span className="text-yellow-400 font-bold text-sm tracking-wider">
                🚀 MISSION TIMELINE
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 relative">
              15 Days of <br className="block md:hidden" />
              <span className="text-yellow-400 relative inline-block">
                Creative Revolution
                <div className="absolute -inset-1 bg-yellow-400/20 blur-xl -z-10 animate-pulse" />
              </span>
            </h2>
            <p className="text-gray-300 font-bold text-lg md:text-xl max-w-2xl mx-auto">
              Your creative journey starts here. Three phases. One mission.
              Infinite possibilities.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center gap-3 mb-12">
            {phases.map((phase, index) => (
              <React.Fragment key={phase.id}>
                <div
                  className={`transition-all duration-500 ${
                    hoveredCard === phase.id
                      ? "w-16 h-3 bg-yellow-400 rounded-full"
                      : "w-3 h-3 bg-white/30 rounded-full"
                  }`}
                />
                {index < phases.length - 1 && (
                  <div className="w-8 h-0.5 bg-white/20" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-20">
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(phase.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Card Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-linear-to-r ${phase.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${phase.glowColor}`}
                />

                {/* Main Card */}
                <div className="relative w-full bg-linear-to-br from-black/90 to-black/50 backdrop-blur-sm text-center rounded-3xl border-2 border-white/20 p-8 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:border-white/40 overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-linear-to-br from-white to-transparent animate-pulse" />
                  </div>

                  {/* Phase Number */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-bold transform transition-transform group-hover:rotate-12">
                    {phase.id}
                  </div>

                  {/* Date Badge with Animation */}
                  <div className="absolute top-4 left-4 group/badge">
                    <div className="px-4 py-2 border-2 border-white/30 rounded-xl text-white text-xs font-bold tracking-wider bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover/badge:border-yellow-400 group-hover/badge:text-yellow-400 group-hover/badge:scale-110 group-hover/badge:bg-yellow-400/10">
                      {phase.date}
                    </div>
                  </div>

                  {/* Icon Container with Bounce Animation */}
                  <div className="mt-12 mb-8 flex justify-center">
                    <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                      <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full animate-pulse" />
                      <img
                        src={phase.icon}
                        alt=""
                        className="relative w-20 h-20 object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Title with linear */}
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight relative group-hover:text-yellow-400 transition-colors duration-300">
                    {phase.title}
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-yellow-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed mb-8 min-h-[100px] transition-colors duration-300 group-hover:text-white sm:text-lg sm:leading-tight">
                    {phase.description}
                  </p>

                  {/* CTA Button with Advanced Hover */}
                  <div className="w-full flex justify-center">
                    <button className="relative w-fit bg-linear-to-r from-yellow-400 to-yellow-500 text-black text-lg font-bold px-6 py-3 rounded-full flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:gap-5 hover:px-8 shadow-lg hover:shadow-yellow-400/50 group/btn cursor-pointer">
                      {/* Button Background Animation */}
                      <div className="absolute inset-0 bg-linear-to-r from-yellow-300 to-yellow-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                      <span className="relative z-10">Learn More</span>
                      <span className="relative z-10 text-2xl transform transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/30 to-transparent" />
                    </button>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${phase.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />
                </div>

                {/* Connecting Arrow (Desktop) */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-20 transform -translate-y-1/2">
                    <div className="text-yellow-400 text-3xl font-bold opacity-50 animate-pulse">
                      →
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 transform transition-all duration-1000 hover:scale-105">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm group cursor-pointer hover:border-yellow-400 transition-all duration-300">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-white font-bold group-hover:text-yellow-400 transition-colors">
                Join the revolution and create history
              </span>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
