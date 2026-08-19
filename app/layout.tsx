import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIA Jewels Dubai | Fine Diamond Jewellery & Bespoke Rings",
  description: "Certified fine diamond jewellery, engagement rings and bespoke designs at DIA Jewels in Dubai.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
