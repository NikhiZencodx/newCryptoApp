import { Inter, Space_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RVC Infinity | Crypto Trading Platform',
  description: 'Secure and user-friendly platform for buying, selling, and managing cryptocurrencies',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <div className="bg-[url('/images/bg-full.png')] bg-cover bg-no-repeat overflow-hidden bg-[#1b1b1b]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
