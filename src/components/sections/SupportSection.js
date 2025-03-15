import Image from 'next/image';
import Link from 'next/link';

export default function SupportSection() {
  return (
    <section className="py-36 lg:py-28 md:py-20 sm:py-16">
      <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center grid-cols-1 md:gap-2">
          {/* Left side - Image */}
          <div className="relative h-[500px] w-full max-w-[600px] lg:h-[450px] md:h-[400px] sm:h-[350px] mx-auto">
            <Image
              src="/images/support.png"
              alt="24/7 Customer Support"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="lg:max-w-[580px] md:max-w-[480px] md:max-w-[580px] md:text-center md:mx-auto">
            <h2 className="lg:text-[50px] md:text-[36px] sm:text-[28px] text-[24px] font-black leading-[1.4] text-white mb-4">
              24/7 access to full service customer support
            </h2>
            <p className="text-[#babcd0] text-base font-normal leading-[150%] font-poppins mb-8">
              At RVC Infinity, our 24/7 expert support ensures seamless and secure crypto experiences. Whether you need help with trading, transactions, or security, our team is always ready to assist. Trade with confidence, knowing we&apos;ve got your back anytime, anywhere.
            </p>
            <Link 
              href="#" 
              className="inline-flex h-14 sm:h-12 px-10 sm:px-8 items-center justify-center rounded-lg border border-white text-white font-semibold text-base hover:bg-white/10 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}