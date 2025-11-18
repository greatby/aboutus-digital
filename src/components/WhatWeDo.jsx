import { SectionWrapper } from "./SectionWrapper";

export function WhatWeDo() {
  const items = [
    {
      title: "Digital Platforms",
      text: "Cutting-edge websites and web applications serving millions across India.",
    },
    {
      title: "Mobile Innovation",
      text: "Fast, intuitive, accessible mobile apps for the mobile-first generation.",
    },
    {
      title: "Emerging Technologies",
      text: "AI, cloud infrastructure, and next-gen systems for scalable impact.",
    },
    {
      title: "Business Solutions",
      text: "Tools and platforms to help Indian businesses grow, scale, and succeed.",
    },
  ];

  return (
    <SectionWrapper title="What We Do">
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item, i) => (
          <div key={i} className="p-8 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-[#c9a961] mb-3">{item.title}</h3>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
