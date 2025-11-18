import Image from "next/image";

export default function DecorativeElements() {
  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Main text */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-16">
          Creativity that floats around you
        </h2>

        {/* Floating Decorations */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/decor/star.png"
            alt="Star"
            width={80}
            height={80}
            className="absolute top-0 left-10 animate-bounce"
          />

          <Image
            src="/decor/sparkle.png"
            alt="Sparkle"
            width={60}
            height={60}
            className="absolute top-20 right-20 animate-pulse"
          />

          <Image
            src="/decor/shape1.png"
            alt="Shape"
            width={120}
            height={120}
            className="absolute bottom-10 left-1/3 animate-float-slow"
          />

          <Image
            src="/decor/shape2.png"
            alt="Shape"
            width={150}
            height={150}
            className="absolute bottom-0 right-10 animate-float-slower"
          />
        </div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes floatSlower {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: floatSlower 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
