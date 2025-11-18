import { SectionWrapper } from "./SectionWrapper";

export function ContactInfo() {
  const items = [
    { label: "Business / Press", value: "Contact details to be added" },
    { label: "Careers", value: "Careers page link to be added" },
    { label: "Support", value: "Support page link to be added" },
  ];

  return (
    <>
      <SectionWrapper title="Join Us">
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          We're always looking for talented individuals who share our passion
          for innovation and our commitment to excellence. Together, we can
          build something extraordinary.
        </p>
        <p className="italic text-gray-600 text-lg">
          Empowering India. Connecting the world. Building the future.
        </p>
      </SectionWrapper>
      <SectionWrapper title="Contact Information">
        <ul className="space-y-6">
          {items.map((item, i) => (
            <li
              key={i}
              className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
            >
              <span className="font-semibold text-[#c9a961]">
                {item.label}:
              </span>
              <span className="block text-gray-700 mt-1">{item.value}</span>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </>
  );
}
