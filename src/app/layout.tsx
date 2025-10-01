import type { Metadata } from "next";
import { Anton, Oswald } from "next/font/google";
import "./globals.css";

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
    <html lang="es">
      <body className={`${anton.variable} ${oswald.variable} antialiased w-dvw h-dvh overflow-x-hidden`}>
      <div className="fixed inset-0 -z-10 bg-center bg-cover " style={{ backgroundImage: "url('https://res.cloudinary.com/dky2ixuo5/image/upload/v1759271763/fondo_vcidqx.png')" }}>
      </div>
      <div className="relative z-10">
        {children}
      </div>
      </body>
    </html>
  );
}
