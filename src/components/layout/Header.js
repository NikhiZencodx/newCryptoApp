import Link from 'next/link';

export default function Header() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <header className="relative min-h-screen flex items-center">
        {/* Background decorative elements */}
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-24 h-24 rounded-full bg-[#FF7E5F] blur-2xl opacity-20" />
          <div className="absolute top-40 right-1/4 w-32 h-32 rounded-full bg-[#7B61FF] blur-3xl opacity-20" />
          <div className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-[#00FFD1] blur-3xl opacity-10" />
          <div className="absolute -bottom-10 right-20 w-80 h-80 rounded-full bg-[#7B61FF] blur-3xl opacity-10" />
        </div> */}

        {/* Main content */}
        <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto w-full">
          <div className="relative z-10 max-w-[900px] mx-auto text-center">
            <h1 className="text-[25px] md:text-[40px] lg:text-[60px] text-white font-[900] leading-[1.1] mb-6 sm:mb-8">
              RVC Infinity - India's Compliant Crypto Trading Ecosystem
            </h1>
            <p className="text-[#babcd0] text-lg sm:text-xl md:text-2xl font-normal leading-[1.4] mb-10 sm:mb-12 lg:mb-16 max-w-[800px] mx-auto">
              Seamless crypto-to-crypto and crypto-to-INR trading with full regulatory compliance
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link 
                href="#" 
                className="inline-flex h-12 sm:h-14 px-8 sm:px-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#18c8ff] to-[#933ffe] text-white font-semibold text-base sm:text-lg hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
              >
                Start Trading
              </Link>
              <Link 
                href="#" 
                className="inline-flex h-12 sm:h-14 px-8 sm:px-10 items-center justify-center rounded-lg border border-white/20 text-white font-semibold text-base sm:text-lg hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}