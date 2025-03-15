import Image from 'next/image';
import Link from 'next/link';

const cryptoData = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$56,290.30',
    change: '+1.68%',
    graph: '/images/small-graph1.png'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$7,290.30',
    change: '+4.25%',
    graph: '/images/small-graph2.png'
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    price: '$1.8',
    change: '+3.43%',
    graph: '/images/small-graph3.png'
  },
  {
    name: 'Wax',
    symbol: 'WAXP',
    price: '$0.97',
    change: '+2.62%',
    graph: '/images/small-graph4.png'
  },
  {
    name: 'Polkadot',
    symbol: 'DOT',
    price: '$42.22',
    change: '+7.56%',
    graph: '/images/small-graph5.png'
  }
];

export default function FeesSection() {
  return (
    <section className="py-[180px] pb-[100px] lg:py-20 sm:py-10 flex items-center">
      <div className="max-w-[1440px] px-[18px] mx-auto w-full">
        <div className="text-center">
          <div className="max-w-[780px] mx-auto">
            <h2 className="lg:text-[50px] md:text-[36px] sm:text-[28px] text-[24px] text-white font-[900] leading-[1.4]">
              Buy and sell with the lowest fees in the industry
            </h2>
            <p className="text-[#babcd0] text-base font-normal leading-[150%] font-poppins">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, pariatur sit. Id nisi perspiciatis eveniet?
            </p>
            <Link href="#" className="inline-flex items-center group">
              <span className="text-[#b982ff] text-base font-poppins transition-colors duration-300 group-hover:text-white">
                Learn More
              </span>
              <Image 
                src="/icons/arrow.svg" 
                alt="arrow" 
                width={24} 
                height={24} 
                className="w-6 ml-1.5 opacity-20"
              />
            </Link>
          </div>

          <div className="overflow-hidden">
            <div className="bg-[#1a1b23] rounded-[25px] mt-[46px] p-[20px_32px] lg:p-4 w-full overflow-x-auto 
              scrollbar-thin scrollbar-thumb-[#b982ff] scrollbar-track-transparent scrollbar-h-2">
              <table className="lg:w-[1180px] md:w-[800px] :w-[680px] mx-auto">
                <tbody>
                  {cryptoData.map((crypto, index) => (
                    <tr key={index} 
                      className="grid grid-cols-[2fr_2fr_3fr_1fr_3fr_2fr] border-b border-[#2b2c3b] last:border-none">
                      <td className="flex items-center justify-center h-[88px] lg:h-[78px] text-white sm:h-[60px] font-[900] px-3">
                        {crypto.name}
                      </td>
                      <td className="flex items-center justify-center h-[88px] lg:h-[78px] sm:h-[60px] font-[900] px-3 text-[#b982ff]">
                        {crypto.symbol}
                      </td>
                      <td className="flex items-center justify-center h-[88px] lg:h-[78px] text-white sm:h-[60px] font-[900] px-3">
                        {crypto.price}
                      </td>
                      <td className="flex items-center justify-center h-[88px] lg:h-[78px] sm:h-[60px] font-[900] px-3 text-[#0dbb7c]">
                        {crypto.change}
                      </td>
                      <td className="flex items-center justify-center h-[88px] lg:h-[78px] sm:h-[60px] font-[900] px-3">
                        <Image 
                          src={crypto.graph} 
                          alt={`${crypto.name} graph`} 
                          width={208} 
                          height={60} 
                          className="max-w-[208px]"
                        />
                      </td>
                      <td className="flex items-center justify-center h-[88px] lg:h-[78px] sm:h-[60px] px-3">
                        <Link href="#" className="flex items-center group">
                          <span className="whitespace-nowrap text-base">Trade Now</span>
                          <Image 
                            src="/icons/arrow_white.svg" 
                            alt="arrow" 
                            width={24} 
                            height={24} 
                            className="w-6 ml-2"
                          />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}