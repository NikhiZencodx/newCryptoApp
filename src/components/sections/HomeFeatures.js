import Image from 'next/image';
import Link from 'next/link';

export default function HomeFeatures() {
  const keyFeatures = [
    {
      title: "Comprehensive Asset Portfolio",
      description: "Access a wide range of cryptocurrencies and digital assets all in one platform",
      icon: "/icons/portfolio.svg"
    },
    {
      title: "Secure Trading Environment",
      description: "Advanced security measures to protect your assets and transactions",
      icon: "/icons/security.svg"
    },
    {
      title: "Regulatory Compliant",
      description: "Operating within India's regulatory framework for cryptocurrency exchanges",
      icon: "/icons/compliance.svg"
    },
    {
      title: "INR Integration",
      description: "Seamless trading between crypto and Indian Rupee with multiple payment options",
      icon: "/icons/inr.svg"
    }
  ];

  const featuredCryptos = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      icon: "/icons/bitcoin.png",
      color: "#F7931A"
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      icon: "/icons/ethereum.png",
      color: "#627EEA"
    },
    {
      name: "Tether",
      symbol: "USDT",
      icon: "/icons/crypto/usdt.svg",
      color: "#26A17B"
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      icon: "/icons/crypto/usdc.svg",
      color: "#2775CA"
    },
    {
      name: "BNB",
      symbol: "BNB",
      icon: "/icons/binance.png",
      color: "#F0B90B"
    },
    {
      name: "Solana",
      symbol: "SOL",
      icon: "/icons/crypto/sol.svg",
      color: "#00FFA3"
    },
    {
      name: "Avalanche",
      symbol: "AVAX",
      icon: "/icons/crypto/avax.svg",
      color: "#E84142"
    },
    {
      name: "Cardano",
      symbol: "ADA",
      icon: "/icons/crypto/ada.svg",
      color: "#0033AD"
    },
    {
      name: "Polygon",
      symbol: "MATIC",
      icon: "/icons/polygon.png",
      color: "#8247E5"
    }
  ];

  const tradeTypes = [
    {
      title: "Spot Trading",
      description: "Buy and sell cryptocurrencies at current market prices",
      icon: "/icons/trade/spot.svg"
    },
    {
      title: "Instant Swap",
      description: "Exchange one cryptocurrency for another instantly",
      icon: "/icons/trade/swap.svg"
    },
    {
      title: "Fiat Gateway",
      description: "Deposit and withdraw using Indian Rupee (INR)",
      icon: "/icons/trade/fiat.svg"
    },
    {
      title: "P2P Trading",
      description: "Trade directly with other users using preferred payment methods",
      icon: "/icons/trade/p2p.svg"
    },
    {
      title: "Liquidity Pool Access",
      description: "Participate in liquidity pools and earn passive income",
      icon: "/icons/trade/liquidity.svg"
    }
  ];

  return (
    <div className="py-20 lg:py-24">
      {/* Key Features Section */}
      <section className="mb-24">
        <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-[#babcd0] text-lg max-w-2xl mx-auto">
              Experience the best of crypto trading with our comprehensive platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-[#1a1b23]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#2a2b33] hover:border-[#3a3b43] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#1a1b23] flex items-center justify-center">
                    <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[#babcd0]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cryptocurrencies */}
      <section className="mb-24 bg-[#0a0a0a]/30 py-20">
        <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured Cryptocurrencies
            </h2>
            <p className="text-[#babcd0] text-lg max-w-2xl mx-auto">
              Trade popular cryptocurrencies on our secure platform
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {featuredCryptos.map((crypto, index) => (
              <div 
                key={index} 
                className="bg-[#1a1b23]/70 backdrop-blur-sm rounded-xl p-5 border border-[#2a2b33] hover:border-[#3a3b43] transition-all duration-300 flex flex-col items-center"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${crypto.color}20` }}
                >
                  <Image src={crypto.icon} alt={crypto.name} width={32} height={32} />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{crypto.name}</h3>
                <p className="text-[#babcd0] text-sm">{crypto.symbol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Types */}
      <section className="mb-24">
        <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Trade Types
            </h2>
            <p className="text-[#babcd0] text-lg max-w-2xl mx-auto">
              Multiple ways to trade and invest in cryptocurrencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tradeTypes.map((type, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-[#1a1b23]/80 to-[#2a2b33]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2a2b33] hover:border-[#3a3b43] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#1a1b23] flex items-center justify-center">
                    <Image src={type.icon} alt={type.title} width={24} height={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-[#babcd0]">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Banner */}
      {/* <section className="bg-gradient-to-r from-[#18c8ff]/10 to-[#933ffe]/10 py-12 backdrop-blur-sm">
        <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#1a1b23] flex items-center justify-center">
                  <Image src="/icons/verified.svg" alt="Verified" width={20} height={20} />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Registered with FIU-IND</h3>
                <p className="text-[#babcd0]">REID: VA00058135</p>
              </div>
            </div>
            
            <div className="h-10 w-px bg-[#2a2b33] hidden md:block"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#1a1b23] flex items-center justify-center">
                  <Image src="/icons/shield.svg" alt="Shield" width={20} height={20} />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Full AML/KYC Compliance</h3>
                <p className="text-[#babcd0]">Adhering to all regulatory requirements</p>
              </div>
            </div>
            
            <Link 
              href="/compliance" 
              className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300 whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}