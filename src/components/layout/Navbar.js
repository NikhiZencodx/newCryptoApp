'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && 
          dropdownRefs.current[activeDropdown] && 
          !dropdownRefs.current[activeDropdown].contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const navItems = [
    { key: 'home', label: 'Home', href: '/' },
    { key: 'about', label: 'About Us', href: '/about' },
    { 
      key: 'products', 
      label: 'Products & Services', 
      href: '#',
      children: [
        { label: 'Crypto Assets', href: '/products/crypto-assets' },
        { label: 'Trading Features', href: '/products/trading-features' },
        { label: 'Fiat Gateway', href: '/products/fiat-gateway' },
      ]
    },
    { 
      key: 'security', 
      label: 'Security & Compliance', 
      href: '#',
      children: [
        { label: 'KYC Process', href: '/security/kyc' },
        { label: 'AML Framework', href: '/security/aml' },
        { label: 'Risk Assessment', href: '/security/risk' },
      ]
    },
    { key: 'platform', label: 'Trading Platform', href: '/platform' },
    { key: 'support', label: 'Support', href: '/support' },
  ];

  return (
    <nav className="h-20 w-full fixed top-0 left-0 z-50 bg-transparent">
      <div className="max-w-[1440px] h-full px-[18px] mx-auto">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/RVC.png" 
              alt="RVC Logo"
              width={80}
              height={80}
              className="w-24 h-24 object-contain"
              priority
              quality={100}
            />
            <span className="font-[900] text-2xl text-white">RVC Infinity</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div 
                key={item.key} 
                className="relative"
                ref={el => dropdownRefs.current[item.key] = el}
              >
                {item.children ? (
                  <>
                    <button 
                      onClick={() => toggleDropdown(item.key)}
                      className="text-white font-semibold hover:text-[#b982ff] transition-colors flex items-center gap-1"
                    >
                      {item.label}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${activeDropdown === item.key ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    {activeDropdown === item.key && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-[#1a1b23] rounded-lg shadow-lg overflow-hidden z-50">
                        {item.children.map((child, idx) => (
                          <Link 
                            key={idx} 
                            href={child.href}
                            className="block px-4 py-3 text-white hover:bg-[#2a2b33] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    href={item.href} 
                    className="text-white font-semibold hover:text-[#b982ff] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Sign In/Up Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="/login" 
              className="h-10 px-6 rounded-lg border border-white/20 inline-flex items-center justify-center font-semibold text-white hover:bg-white/5 transition-all"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="h-10 px-6 rounded-lg bg-gradient-to-r from-[#18c8ff] to-[#933ffe] inline-flex items-center justify-center font-semibold text-white hover:opacity-90 transition-all"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className="lg:hidden p-2" 
            onClick={toggleMenu}
          >
            <Image 
              src={isMenuOpen ? "/icons/close.svg" : "/icons/menu_icon.svg"}
              alt="Menu"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>

          {/* Mobile Menu */}
          <div className={`
            lg:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-3">
                  <Image 
                    src="/images/RVC.png" 
                    alt="RVC Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                    quality={100}
                  />
                  <span className="font-semibold text-2xl text-white">RVC Infinity</span>
                </Link>
                <button 
                  type="button" 
                  className="p-2" 
                  onClick={toggleMenu}
                >
                  <Image 
                    src="/icons/close.svg"
                    alt="Close"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-8 overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.key} className="flex flex-col">
                    {item.children ? (
                      <>
                        <button 
                          onClick={() => toggleDropdown(item.key)}
                          className="text-white font-semibold text-lg hover:text-[#b982ff] transition-colors flex items-center justify-between"
                        >
                          {item.label}
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            className={`transition-transform duration-200 ${activeDropdown === item.key ? 'rotate-180' : ''}`}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>
                        {activeDropdown === item.key && (
                          <div className="ml-4 mt-2 flex flex-col gap-2">
                            {item.children.map((child, idx) => (
                              <Link 
                                key={idx} 
                                href={child.href}
                                className="text-[#babcd0] py-2 hover:text-white transition-colors"
                                onClick={toggleMenu}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link 
                        href={item.href} 
                        className="text-white font-semibold text-lg hover:text-[#b982ff] transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 mt-auto mb-8">
                <Link 
                  href="/login" 
                  className="h-12 rounded-lg border border-white/20 flex items-center justify-center font-semibold text-white hover:bg-white/5 transition-all"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="h-12 rounded-lg bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center font-semibold text-white hover:opacity-90 transition-all"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}