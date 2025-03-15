'use client'
import Link from 'next/link';
import { useState } from 'react';

const companyLinks = ['About', 'Careers', 'Press', 'News', 'Links'];
const policyLinks = [
  'CoinFlip Privacy Policy',
  'Biometrics Privacy Policy',
  'Financial Policy Notice',
  'Terms of Service',
  'Trade Desk Terms of Service'
];

export default function Footer() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="py-12">
      <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
          {/* Left Column */}
          <div className="lg:pr-8">
            <p className="text-base text-[#babcd0] font-normal leading-[150%] mb-6">
              CoinFlip, the world&apos;s leading bitcoin ATM operator, makes it so flipping easy to buy and sell bitcoin via cash, card, or bank transfer.
            </p>
            <p className="text-base text-[#babcd0] font-normal leading-[150%] mb-6">
              Sign up to get the latest in CoinFlip news, discounts, and more.
            </p>
            
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="relative max-w-[320px]">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 bg-[#0a0a0a]/50 border border-[#3a3a3a] rounded-lg px-4 text-white focus:outline-none focus:border-[#b982ff] transition-colors"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-[#b982ff] transition-colors"
                  aria-label="Submit"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
            
            <p className="text-sm text-[#babcd0] font-normal">
              &copy; 2025 RVC Infinity - All rights reserved.
            </p>
          </div>

          {/* Middle Column */}
          <div className="lg:mx-auto">
            <h4 className="text-base font-semibold text-white mb-6">Company</h4>
            <ul>
              {companyLinks.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link 
                    href="#" 
                    className="text-[#babcd0] hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6">
              Privacy Policy and Terms of Services
            </h4>
            <ul>
              {policyLinks.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link 
                    href="#" 
                    className="text-[#babcd0] hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}