export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Built for creators, designers, and dreamers.
          </h2>

          <p className="text-white/80 max-w-md text-lg">
            Whether you're building your first portfolio or crafting your next
            big launch, we give you the tools, structure, and creative freedom
            to bring your ideas to life.
          </p>

          <p className="text-white/60 max-w-md">
            From templates to tutorials, from workflows to community support —
            it’s everything you need, all in one place.
          </p>
        </div>

        <div className="relative w-full h-[350px] bg-white/5 rounded-3xl backdrop-blur-md border border-white/10 flex items-center justify-center">
          <p className="text-white/40">Add image or animation here</p>
        </div>
      </div>
    </section>
  );
}
