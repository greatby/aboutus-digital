import { SectionWrapper } from "./SectionWrapper";

export function OurApproach() {
  const items = [
    "User-Centric Design — intuitive, accessible, and delightful experiences.",
    "Innovation at Scale — bold thinking with world-class execution.",
    "Indian First, Global Ready — built for India, crafted with global standards.",
    "Sustainable Growth — long-term value for users and communities.",
  ];

  return (
    <SectionWrapper title="Our Approach">
      <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[#c9a961] text-xl">•</span>
            {item}
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
