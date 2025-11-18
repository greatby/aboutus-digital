export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0" />

      {/* <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-white text-5xl md:text-6xl font-light leading-tight">
          Building India's <span className="font-bold text-[#c9a961]">Digital Future</span>
        </h1>
        <p className="text-white/90 text-xl mt-6 max-w-2xl mx-auto">
          Transforming how millions of people across India connect, discover, and grow.
        </p>
      </div> */}
    </section>
  );
}
