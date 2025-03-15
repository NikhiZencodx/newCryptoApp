'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Subscribing email:', email);
    // Reset form after submission
    setEmail('');
  };

  return (
    <section className="py-20 lg:py-16 md:py-12 sm:py-10">
      <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto w-full">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="lg:text-[48px] md:text-[40px] sm:text-[36px] text-[32px] font-[900] text-white mb-4">
            Receive transmissions
          </h2>
          
          <p className="text-[#babcd0] text-base mb-8">
            Unsubscribe at any time. <Link href="/privacy" className="text-white hover:text-[#b982ff] transition-colors">Privacy policy</Link>
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto">
            <div className={`relative p-[1px] rounded-lg ${isFocused ? 'bg-gradient-to-r from-[#18c8ff] to-[#933ffe]' : 'bg-[#3a3a3a]'} transition-all duration-300`}>
              <div className="relative bg-[#0a0a0a] rounded-lg">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  required
                  className="w-full h-14 bg-transparent rounded-lg px-5 text-white focus:outline-none transition-colors"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-[#b982ff] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}