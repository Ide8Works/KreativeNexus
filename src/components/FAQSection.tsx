export default function FAQSection() {
  const faqs = [
    {
      q: "Do I need a degree to join?",
      a: "Nope! Absolutely no formal education is required. All you need is passion and consistency—everything else we help you build inside the program.",
    },
    {
      q: "Is AI Allowed?",
      a: "Yes! AI is fully allowed and even encouraged. We teach you how to use it responsibly and creatively to boost your content and workflow.",
    },
    {
      q: "What if I'm shy?",
      a: "Totally okay. Many creators start out shy. We’ll help you gradually build confidence through guided challenges and supportive feedback.",
    },
    {
      q: "What's the fee?",
      a: "We offer multiple tiers depending on how deep you want to go. All pricing details are shared during your onboarding call.",
    },
    {
      q: "Can I perform at the New Year concert?",
      a: "Yes! Members get exclusive opportunities to perform, collaborate, and feature in annual events—including the New Year concert.",
    },
    {
      q: "What if my content flops?",
      a: "Happens to everyone. Inside, we teach you how to iterate, analyze, and create consistently—so you grow no matter what.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-10 md:py-20 px-6 font-baloo font-bold">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-2">
          Questions?{" "}
          <span className="text-[#FFB700]">
            <br className="block md:hidden" />
            We Got Answers.
          </span>
        </h2>
        <p className="text-[#D2D2D2] text-xl font-baloo font-bold">
          (And they're actually helpful)
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="group w-full rounded-2xl border border-white bg-black overflow-hidden hover:bg-white/5 transition-all"
          >
            <summary className="cursor-pointer flex items-center justify-between px-6 py-5 text-left text-md md:text-xl font-bold list-none">
              <span>{f.q}</span>
              <span className="text-yellow-400 text-2xl group-open:rotate-90 transition-transform">
                ▶
              </span>
            </summary>

            <p className="px-6 pb-6 pt-1 text-[#D2D2D2] text-sm md:text-base font-normal font-baloo">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
