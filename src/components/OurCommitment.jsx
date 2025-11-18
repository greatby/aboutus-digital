import { SectionWrapper } from "./SectionWrapper";

export function OurCommitment() {
  const items = [
    "Privacy & Security",
    "Accessibility",
    "Innovation",
    "Social Responsibility",
    "Excellence",
  ];

  return (
    <SectionWrapper title="Our Commitment">
      <ul className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <li
            key={i}
            className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200 text-lg text-gray-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
