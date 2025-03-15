import ProductLayout from '@/components/layout/ProductLayout';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Crypto Assets | RVC Infinity',
  description: 'Explore our wide range of supported cryptocurrencies and digital assets',
};

export default function CryptoAssetsPage() {
  const featuredAssets = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      description: "The original cryptocurrency and the largest by market capitalization.",
      icon: "/icons/crypto/btc.svg",
      color: "#F7931A"
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      description: "A decentralized platform that enables smart contracts and dApps.",
      icon: "/icons/crypto/eth.svg",
      color: "#627EEA"
    },
    {
      name: "Tether",
      symbol: "USDT",
      description: "A stablecoin pegged to the US dollar, providing stability in the volatile crypto market.",
      icon: "/icons/crypto/usdt.svg",
      color: "#26A17B"
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      description: "A regulated stablecoin backed by US dollars held in reserve.",
      icon: "/icons/crypto/usdc.svg",
      color: "#2775CA"
    },
    {
      name: "BNB",
      symbol: "BNB",
      description: "Native token of the Binance ecosystem with multiple use cases.",
      icon: "/icons/crypto/bnb.svg",
      color: "#F0B90B"
    },
    {
      name: "Solana",
      symbol: "SOL",
      description: "High-performance blockchain supporting fast, secure, and scalable decentralized apps.",
      icon: "/icons/crypto/sol.svg",
      color: "#00FFA3"
    },
    {
      name: "Avalanche",
      symbol: "AVAX",
      description: "Platform for launching decentralized applications with high throughput.",
      icon: "/icons/crypto/avax.svg",
      color: "#E84142"
    },
    {
      name: "Cardano",
      symbol: "ADA",
      description: "Proof-of-stake blockchain platform built with research-driven approach.",
      icon: "/icons/crypto/ada.svg",
      color: "#0033AD"
    },
    {
      name: "Polygon",
      symbol: "MATIC",
      description: "Layer 2 scaling solution for Ethereum that enables faster and cheaper transactions.",
      icon: "/icons/crypto/matic.svg",
      color: "#8247E5"
    }
  ];

  const assetCategories = [
    {
      title: "Layer 1 Blockchains",
      description: "Native cryptocurrencies of major blockchain networks",
      assets: ["Bitcoin (BTC)", "Ethereum (ETH)", "Solana (SOL)", "Avalanche (AVAX)", "Cardano (ADA)"]
    },
    {
      title: "Stablecoins",
      description: "Cryptocurrencies designed to minimize price volatility",
      assets: ["Tether (USDT)", "USD Coin (USDC)", "Binance USD (BUSD)", "DAI (DAI)", "TrueINR (TINR)"]
    },
    {
      title: "DeFi Tokens",
      description: "Tokens powering decentralized finance applications",
      assets: ["Uniswap (UNI)", "Aave (AAVE)", "Compound (COMP)", "Curve (CRV)", "MakerDAO (MKR)"]
    },
    {
      title: "Utility Tokens",
      description: "Tokens with specific utility within their ecosystems",
      assets: ["Chainlink (LINK)", "The Graph (GRT)", "Basic Attention Token (BAT)", "Filecoin (FIL)"]
    }
  ];

  return (
    <ProductLayout 
      title="Crypto Assets"
      subtitle="Trade a wide range of cryptocurrencies and digital assets on our secure and compliant platform"
    >
      {/* Featured Assets */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Featured Assets</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAssets.map((asset, index) => (
            <div 
              key={index}
              className="bg-[#1a1b23]/70 backdrop-blur-sm rounded-xl p-6 border border-[#2a2b33] hover:border-[#3a3b43] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${asset.color}20` }}
                >
                  <Image src={asset.icon} alt={asset.name} width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{asset.name}</h3>
                  <p className="text-[#babcd0] text-sm">{asset.symbol}</p>
                </div>
              </div>
              <p className="text-[#babcd0]">{asset.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Asset Categories */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Asset Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assetCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#1a1b23]/80 to-[#2a2b33]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#2a2b33] hover:border-[#3a3b43] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-[#babcd0] mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.assets.map((asset, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#b982ff]"></div>
                    <span className="text-white">{asset}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Asset Listing Process */}
      <section className="bg-[#0a0a0a]/30 py-12 rounded-2xl">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Asset Listing Process</h2>
          <p className="text-[#babcd0] text-center mb-10">
            We carefully evaluate all assets before listing them on our platform to ensure security and compliance
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-[#1a1b23] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">Technical Review</h3>
              <p className="text-[#babcd0]">Thorough assessment of the asset's technical architecture and security</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-[#1a1b23] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">Compliance Check</h3>
              <p className="text-[#babcd0]">Verification that the asset meets all regulatory requirements</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-[#1a1b23] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">Market Analysis</h3>
              <p className="text-[#babcd0]">Evaluation of liquidity, market demand, and trading volume</p>
            </div>
          </div>
        </div>
      </section>
    </ProductLayout>
  );
}