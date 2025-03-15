import ProductLayout from '@/components/layout/ProductLayout';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Trading Features | RVC Infinity',
  description: 'Explore our advanced trading features and tools for crypto trading',
};

export default function TradingFeaturesPage() {
  const tradingFeatures = [
    {
      title: "Spot Trading",
      description: "Buy and sell cryptocurrencies at current market prices with low fees and high liquidity.",
      icon: "/icons/trade/spot.svg"
    },
    {
      title: "Instant Swap",
      description: "Exchange one cryptocurrency for another instantly without placing orders on the order book.",
      icon: "/icons/trade/swap.svg"
    },
    {
      title: "P2P Trading",
      description: "Trade directly with other users using preferred payment methods with our secure escrow service.",
      icon: "/icons/trade/p2p.svg"
    },
    {
      title: "Liquidity Pool Access",
      description: "Participate in liquidity pools and earn passive income through yield farming and staking.",
      icon: "/icons/trade/liquidity.svg"
    },
    {
      title: "Advanced Order Types",
      description: "Place limit, market, stop-limit, and OCO (One Cancels the Other) orders for precise trading.",
      icon: "/icons/trade/orders.svg"
    },
    {
      title: "Trading Bots",
      description: "Automate your trading strategies with our user-friendly trading bots and API access.",
      icon: "/icons/trade/bots.svg"
    }
  ];

  const tradingTools = [
    {
      title: "Advanced Charts",
      description: "Professional-grade TradingView charts with multiple timeframes and over 100 indicators.",
      image: "/images/products/charts.jpg"
    },
    {
      title: "Market Data",
      description: "Real-time market data, order book depth, and trade history for informed decision making.",
      image: "/images/products/market-data.jpg"
    },
    {
      title: "Portfolio Tracker",
      description: "Track your portfolio performance, profit/loss, and asset allocation in real-time.",
      image: "/images/products/portfolio.jpg"
    },
    {
      title: "Price Alerts",
      description: "Set custom price alerts and notifications for your favorite cryptocurrencies.",
      image: "/images/products/alerts.jpg"
    }
  ];

  const feeStructure = [
    { tier: "Regular", tradingVolume: "< ₹10 Lakh", makerFee: "0.15%", takerFee: "0.20%" },
    { tier: "Silver", tradingVolume: "₹10 Lakh - ₹50 Lakh", makerFee: "0.12%", takerFee: "0.18%" },
    { tier: "Gold", tradingVolume: "₹50 Lakh - ₹2 Crore", makerFee: "0.08%", takerFee: "0.15%" },
    { tier: "Platinum", tradingVolume: "> ₹2 Crore", makerFee: "0.05%", takerFee: "0.10%" }
  ];

  return (
    <ProductLayout 
      title="Trading Features"
      subtitle="Experience advanced trading tools and features designed for both beginners and professional traders"
    >
      {/* Trading Features */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Trading Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tradingFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#1a1b23]/70 backdrop-blur-sm rounded-xl p-6 border border-[#2a2b33] hover:border-[#3a3b43] transition-all duration-300"
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
      </section>

      {/* Trading Tools */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Trading Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tradingTools.map((tool, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#1a1b23]/80 to-[#2a2b33]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#2a2b33] hover:border-[#3a3b43] transition-all duration-300"
            >
              <div className="relative h-[200px]">
                <Image 
                  src={tool.image} 
                  alt={tool.title} 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b23] to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                <p className="text-[#babcd0]">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fee Structure */}
      <section className="mb-20 bg-[#0a0a0a]/30 py-12 rounded-2xl">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Fee Structure</h2>
          <p className="text-[#babcd0] text-center mb-10">
            Competitive trading fees with volume-based discounts
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#2a2b33]">
                  <th className="py-4 px-4 text-left text-white font-bold">Tier</th>
                  <th className="py-4 px-4 text-left text-white font-bold">30-Day Trading Volume</th>
                  <th className="py-4 px-4 text-left text-white font-bold">Maker Fee</th>
                  <th className="py-4 px-4 text-left text-white font-bold">Taker Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((tier, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-[#2a2b33] ${index % 2 === 0 ? 'bg-[#1a1b23]/30' : ''}`}
                  >
                    <td className="py-4 px-4 text-white font-semibold">{tier.tier}</td>
                    <td className="py-4 px-4 text-[#babcd0]">{tier.tradingVolume}</td>
                    <td className="py-4 px-4 text-[#babcd0]">{tier.makerFee}</td>
                    <td className="py-4 px-4 text-[#babcd0]">{tier.takerFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to start trading?</h2>
        <p className="text-[#babcd0] mb-8 max-w-2xl mx-auto">
          Create an account today and experience our advanced trading platform with all features
        </p>
        <Link 
          href="/register" 
          className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#18c8ff] to-[#933ffe] text-white font-semibold hover:opacity-90 transition-all duration-300"
        >
          Create Account
        </Link>
      </section>
    </ProductLayout>
  );
}