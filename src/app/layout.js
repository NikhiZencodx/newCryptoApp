import { Inter, Space_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata = {
  title: "RVC Infinity - Crypto Trading Platform",
  description: "Modern cryptocurrency trading platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable} antialiased`}>
        <div className="bg-[url('/images/bg-full.png')] bg-cover bg-no-repeat overflow-hidden bg-[#1b1b1b]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
