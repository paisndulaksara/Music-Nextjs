import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your site description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <Navbar />
      <body className={`${jost.variable} antialiased`}>
      
        {children}
      </body>
    </html>
  );
}
