import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Products",
      links: [
        { label: "Crypto Assets", href: "/products/crypto-assets" },
        { label: "Trading Features", href: "/products/trading-features" },
        { label: "Fiat Gateway", href: "/products/fiat-gateway" },
        { label: "Trading Platform", href: "/platform" }
      ]
    },
    
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/support" },
        { label: "FAQs", href: "/support" },
        { label: "Security", href: "/support" },
        { label: "Status", href: "/support" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Biometrics Privacy", href: "/legal/biometrics-privacy" },
        { label: "Financial Policy", href: "/legal/financial-policy" },
        { label: "Terms of Service", href: "/legal/terms-of-service" },
        { label: "Trade Desk Terms", href: "/legal/trade-desk-terms" }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: "/icons/social/twitter.svg", href: "https://twitter.com/rvcinfinity", label: "Twitter" },
    { icon: "/icons/social/facebook.svg", href: "https://facebook.com/rvcinfinity", label: "Facebook" },
    { icon: "/icons/social/instagram.svg", href: "https://instagram.com/rvcinfinity", label: "Instagram" },
    { icon: "/icons/social/telegram.svg", href: "https://t.me/rvcinfinity", label: "Telegram" },
    { icon: "/icons/social/linkedin.svg", href: "https://linkedin.com/company/rvcinfinity", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2b33]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-[18px] py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/images/RVC.png" 
                alt="RVC Logo"
                width={80}
                height={80}
                className="w-16 h-16 object-contain"
              />
            </Link>
            <p className="text-[#babcd0] mb-6">
              RVC Infinity is a secure and user-friendly platform for buying, selling, and managing cryptocurrencies.
            </p>
            
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-bold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      href={link.href} 
                      className="text-[#babcd0] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#2a2b33] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#babcd0] text-sm mb-4 md:mb-0">
            © {currentYear} RVC Infinity. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/legal/privacy-policy" className="text-[#babcd0] text-sm hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms-of-service" className="text-[#babcd0] text-sm hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/sitemap" className="text-[#babcd0] text-sm hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}