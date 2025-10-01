import type { Metadata } from "next";
import { Anton, Oswald } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Background from "@/components/background";

const anton = Anton({
  variable: "--font-anton",
  weight: ["400"],
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"], 
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Bike Bros",
  description: "",
  icons: {
    icon: "./icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${anton.variable} ${oswald.variable} antialiased w-dvw h-dvh overflow-x-hidden`}>
      <Background />

      <div className="z-10">
        {children}
      </div>
      </body>
    </html>
  );
}
