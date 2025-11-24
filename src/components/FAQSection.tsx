"use client";

import { useState, useEffect } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("faq-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqs = [
    {
      q: "Do I need a degree to join?",
      a: "Nope! Absolutely no formal education is required. All you need is passion and consistency—everything else we help you build inside the program.",
      icon: "🎓",
    },
    {
      q: "Is AI Allowed?",
      a: "Yes! AI is fully allowed and even encouraged. We teach you how to use it responsibly and creatively to boost your content and workflow.",
      icon: "🤖",
    },
    {
      q: "What if I'm shy?",
      a: "Totally okay. Many creators start out shy. We'll help you gradually build confidence through guided challenges and supportive feedback.",
      icon: "😊",
    },
    {
      q: "What's the fee?",
      a: "We offer multiple tiers depending on how deep you want to go. All pricing details are shared during your onboarding call.",
      icon: "💰",
    },
    {
      q: "Can I perform at the New Year concert?",
      a: "Yes! Members get exclusive opportunities to perform, collaborate, and feature in annual events—including the New Year concert.",
      icon: "🎤",
    },
    {
      q: "What if my content flops?",
      a: "Happens to everyone. Inside, we teach you how to iterate, analyze, and create consistently—so you grow no matter what.",
      icon: "📈",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq-section"
      className="w-full bg-black text-white py-10 md:py-20 px-6 font-bold font-brand relative overflow-hidden"
    >
      {/* Background linear Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating Question Marks */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-400 text-4xl font-bold animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            ?
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header with Animation */}
        <div
          className="text-center mb-16 transform transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-30px)",
          }}
        >
          <div className="w-full flex justify-center">
            <div className="w-fit mb-6 px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm group cursor-default hover:bg-yellow-400/20 transition-all duration-300">
              <span className="text-yellow-400 font-bold text-sm tracking-wider flex items-center gap-2">
                <span className="inline-block animate-bounce">💡</span>
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold relative inline-block">
            <span className="relative group cursor-default">
              Questions?{" "}
              <div className="absolute -inset-2 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            </span>
            <span className="text-[#FFB700] relative inline-block group cursor-default">
              <br className="block md:hidden" />
              We Got Answers.
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </span>
          </h2>
          <p className="text-[#D2D2D2] text-xl font-bold mt-4 hover:text-white transition-colors duration-300">
            (And they're actually helpful)
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-5xl mx-auto space-y-6">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="transform transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateX(0)"
                  : `translateX(${i % 2 === 0 ? "-50px" : "50px"})`,
                transitionDelay: `${i * 100}ms`,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative group">
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-linear-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur-lg opacity-0 transition-opacity duration-500 ${
                    hoveredIndex === i || openIndex === i ? "opacity-100" : ""
                  }`}
                />

                {/* Main Card */}
                <div
                  className={`relative w-full rounded-2xl border-2 bg-black overflow-hidden transition-all duration-500 ${
                    openIndex === i
                      ? "border-yellow-400 bg-linear-to-br from-yellow-400/5 to-transparent shadow-2xl shadow-yellow-400/20"
                      : hoveredIndex === i
                      ? "border-yellow-400/50 bg-white/5"
                      : "border-white/20 hover:border-white/40"
                  }`}
                >
                  {/* Question Header */}
                  <div
                    onClick={() => handleToggle(i)}
                    className="cursor-pointer flex items-center justify-between px-6 py-5 text-left text-md md:text-xl font-bold transition-all duration-300 group/header"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {/* Icon with Animation */}
                      <span
                        className={`text-2xl transition-all duration-500 ${
                          openIndex === i ? "scale-125 rotate-12" : "scale-100"
                        } ${hoveredIndex === i ? "animate-bounce" : ""}`}
                      >
                        {f.icon}
                      </span>

                      {/* Question Text */}
                      <span
                        className={`transition-colors duration-300 ${
                          openIndex === i
                            ? "text-yellow-400"
                            : "text-white group-hover/header:text-yellow-100"
                        }`}
                      >
                        {f.q}
                      </span>
                    </div>

                    {/* Arrow with Animation */}
                    <div className="relative flex items-center justify-center w-8 h-8">
                      <div
                        className={`absolute inset-0 bg-yellow-400/20 rounded-full transition-all duration-300 ${
                          openIndex === i
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        }`}
                      />
                      <span
                        className={`relative text-yellow-400 text-2xl transition-all duration-500 ${
                          openIndex === i
                            ? "rotate-90 scale-110"
                            : "rotate-0 scale-100"
                        } ${
                          hoveredIndex === i && openIndex !== i
                            ? "translate-x-1"
                            : ""
                        }`}
                      >
                        ▶
                      </span>
                    </div>
                  </div>

                  {/* Answer with Smooth Expand */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openIndex === i
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-1">
                        {/* Divider Line */}
                        <div
                          className="w-full h-px bg-linear-to-r from-transparent via-yellow-400/50 to-transparent mb-4 scale-x-0 animate-expand"
                          style={{ animationDelay: "100ms" }}
                        />

                        {/* Answer Text */}
                        <p className="text-[#D2D2D2] text-sm md:text-base font-normal leading-relaxed transition-all duration-300 hover:text-white">
                          {f.a}
                        </p>

                        {/* Decorative Element */}
                        <div className="mt-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                          <div className="flex-1 h-px bg-linear-to-r from-yellow-400/30 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className={`h-1 bg-linear-to-r from-yellow-400 to-orange-400 transition-all duration-500 ${
                      openIndex === i ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>

                {/* Index Number (Decorative) */}
                <div
                  className={`absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black border-2 flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                    openIndex === i
                      ? "border-yellow-400 text-yellow-400 scale-110"
                      : "border-white/30 text-white/30 scale-100"
                  }`}
                >
                  {i + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 transform transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "800ms",
          }}
        >
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-400 text-lg">Still have questions?</p>
            <button className="relative px-8 py-3 bg-linear-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg rounded-full overflow-hidden group hover:shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 active:scale-100">
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/30 to-transparent" />

              <span className="relative z-10 flex items-center gap-2">
                Ask Us Directly
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-30px) rotate(3deg);
          }
        }

        @keyframes expand {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-expand {
          animation: expand 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
