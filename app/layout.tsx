import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const serif = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vatoto.live | Little Learners. Timeless Wisdom.",
  description: "Joyful, live Bhagavad Gita and Hanuman Chalisa classes for children ages 4–16. Help your child connect with Indian culture, stories, and values. Book a free demo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
