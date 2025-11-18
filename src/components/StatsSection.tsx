export default function StatsSection() {
  const stats = [
    { number: "10k+", label: "Active Creators" },
    { number: "250+", label: "Premium Templates" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "120+", label: "Countries Reached" },
  ];

  return (
    <section className="w-full bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Growing Every Day
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          Our community keeps expanding—here are some numbers we’re proud of.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, i) => (
          <div
            key={i}
            className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all"
          >
            <h3 className="text-4xl font-bold mb-2">{item.number}</h3>
            <p className="text-white/60 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
