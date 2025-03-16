'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  const router = useRouter();
  
  const dashboardSections = [
    {
      title: "Assets",
      description: "View and manage your crypto assets",
      icon: "/icons/assets.png",
      href: "/dashboard/assets",
      bgGradient: "from-[#18c8ff]/20 to-[#933ffe]/20"
    },
    {
      title: "Trade",
      description: "Buy, sell, and exchange cryptocurrencies",
      icon: "/icons/stock.png",
      href: "/dashboard/trade",
      bgGradient: "from-[#ff9f18]/20 to-[#ff3989]/20"
    },
    {
      title: "Market",
      description: "Explore market trends and prices",
      icon: "/icons/pie-graph.png",
      href: "/dashboard/market",
      bgGradient: "from-[#18ff9f]/20 to-[#18c8ff]/20"
    },
    {
      title: "Account",
      description: "Manage your profile and settings",
      icon: "/icons/user.png",
      href: "/dashboard/account",
      bgGradient: "from-[#933ffe]/20 to-[#ff3989]/20"
    }
  ];

  const handleSectionClick = (href) => {
    router.push(href);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-[#babcd0]">Welcome to your RVC Infinity dashboard</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link 
              href="/" 
              className="inline-flex h-10 px-6 items-center justify-center rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Sign Out
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardSections.map((section, index) => (
            <div 
              key={index}
              onClick={() => handleSectionClick(section.href)}
              className={`bg-gradient-to-br ${section.bgGradient} backdrop-blur-sm rounded-xl p-6 border border-[#2a2b33] hover:border-[#3a3b43] transition-all duration-300 cursor-pointer h-[200px] flex flex-col`}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1a1b23] flex items-center justify-center">
                  <Image src={section.icon || "/icons/dashboard/placeholder.svg"} alt={section.title} width={20} height={20} />
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{section.title}</h2>
              <p className="text-[#babcd0]">{section.description}</p>
              <div className="mt-auto pt-4 flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}