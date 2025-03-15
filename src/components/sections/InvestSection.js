import Image from 'next/image';
import Link from 'next/link';

const investmentCards = [
  {
    title: 'Invest in Bitcoin',
    description: 'Buy, sell, and store BTC and other cryptocurrencies with ease.',
    icon: '/icons/bitcoin_icon.svg'
  },
  {
    title: 'Trading Tools',
    description: 'Advanced trading features and real-time market data.',
    icon: '/icons/trading_icon.svg'
  },
  {
    title: 'Secure Storage',
    description: 'Industry-leading security for your digital assets.',
    icon: '/icons/secure_icon.svg'
  }
];

export default function InvestSection() {
  return (
    <section className="py-20 sm:py-10">
      <div className="max-w-[1440px] px-[18px] mx-auto w-full">
        <div className="w-full">
          <div className="text-center">
            <h2 className="text-[50px] lg:text-[36px] sm:text-[28px] xs:text-[24px] font-black leading-[1.4]">
              Start investing in cryptocurrency
            </h2>
            <p className="text-[#babcd0] text-base font-normal leading-[150%] font-poppins max-w-2xl mx-auto mt-4">
              Join millions of users worldwide in trading and investing in digital assets with our secure and user-friendly platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {investmentCards.map((card, index) => (
              <div key={index} className="bg-[#1a1b23] p-6 rounded-2xl">
                <div className="mb-4">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-inter">
                  {card.title}
                </h3>
                <p className="text-[#babcd0] font-poppins">
                  {card.description}
                </p>
                <Link 
                  href="#" 
                  className="flex items-center mt-4 text-[#b982ff] hover:opacity-80 transition-all duration-300"
                >
                  Learn more
                  <Image
                    src="/icons/arrow.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}