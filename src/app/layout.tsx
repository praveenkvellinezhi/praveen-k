import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praveen K. — Frontend & Full-Stack Developer",
  description: "Portfolio of Praveen K., a developer building thoughtful web experiences, dashboards, and SaaS products.",
  openGraph: { title: "Praveen K. — Developer", description: "Building useful digital products with thoughtful interfaces.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
