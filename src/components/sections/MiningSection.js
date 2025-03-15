import Link from 'next/link';

export default function MiningSection() {
  return (
    <section className="py-36 lg:py-28 md:py-20 sm:py-16 flex items-center justify-center">
      <div className="max-w-[1440px] px-[18px] mx-auto w-full">
        <div className="text-center">
          <div className="max-w-[780px] mx-auto">
            <h2 className="lg:text-[50px] md:text-[36px] sm:text-[28px] text-[24px] text-white font-[900] leading-[1.4] mb-4">
              A crypto mining platform that invest in you.
            </h2>
            <p className="text-[#babcd0] text-md font-normal leading-[150%] font-poppins mb-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus qui ipsum libero, porro accusamus possimus.
            </p>
            <Link 
              href="#" 
              className="inline-flex h-14 sm:h-12 px-10 sm:px-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#18c8ff] to-[#933ffe] text-white font-semibold text-base hover:opacity-90 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}