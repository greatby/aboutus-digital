import "./globals.css";

export const metadata = {
  title: "About Us | Building India’s Digital Future",
  description:
    "Learn about our vision, mission, and the technology ecosystem we are building to empower millions across India. Discover how we innovate, scale, and shape the future of India’s digital transformation.",
  keywords: [
    "About Us",
    "Digital Ecosystem India",
    "Technology Conglomerate",
    "Innovation in India",
    "Digital Products India",
    "Tech Company India",
    "Future of Technology India",
    "Digital Transformation India",
    "Indian Internet Products",
  ],
  openGraph: {
    title: "About Us | Building India’s Digital Future",
    description:
      "We are building a comprehensive digital ecosystem that empowers every Indian with accessible, innovative technology solutions for daily life, business, and community growth.",
    url: "https://www.pinnacledevelopments.in/about",
    siteName: "Pinnacle Developments",
    images: [
      {
        url: "https://www.pinnacledevelopments.in/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Us - Building India’s Digital Future",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Building India’s Digital Future",
    description:
      "Discover how we're building a digital ecosystem that empowers millions across India with innovative, user-first technology.",
    images: ["https://www.pinnacledevelopments.in/images/about-twitter.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.pinnacledevelopments.in/about",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
