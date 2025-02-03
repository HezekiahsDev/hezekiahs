import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hezekiahs Olushola | Full-Stack Software Engineer",
  description:
    "Professional portfolio of Hezekiahs Olushola, showcasing projects, skills, and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <main className="min-h-screen flex flex-col">
          <NavBar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
