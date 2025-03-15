import Image from 'next/image';
import Link from 'next/link';

export default function SecureInvestSection() {
  return (
    <section className="relative py-24 lg:py-20 md:py-16 sm:py-12 overflow-hidden">
      <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center grid-cols-1 md:gap-12">
          {/* Left side - Content */}
          <div className="lg:max-w-[580px] md:max-w-[480px] max-w-full md:text-center md:mx-auto">
            <h2 className="lg:text-[48px] md:text-[40px] sm:text-[36px] text-[32px] font-black leading-[1.2] text-white mb-6">
              Take your first step into safe, secure crypto investing
            </h2>
            <p className="text-[#babcd0] text-base font-normal leading-[150%] font-poppins mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit, laudantium voluptatem incidunt, aperiam reiciendis corporis, exercitationem abcaecati ut cum excepturi! Ea, alias dolores.
            </p>
            <Link 
              href="#" 
              className="inline-flex h-12 px-8 items-center justify-center rounded-lg border border-white text-white font-semibold text-base hover:bg-white/10 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[500px] w-full max-w-[600px] lg:h-[450px] md:h-[400px] sm:h-[350px] mx-auto">
            <Image
              src="/images/support.png"
              alt="24/7 Customer Support"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}