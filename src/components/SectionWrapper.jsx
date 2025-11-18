export function SectionWrapper({ title, children }) {
  return (
    <section className="py-20 px-[5%] bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-black mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
