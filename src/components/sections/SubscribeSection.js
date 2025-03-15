import InputGroup from '@/components/ui/InputGroup';

export default function SubscribeSection() {
  return (
    <section className="py-20 pb-[120px] sm:py-10">
      <div className="max-w-[1440px] px-[18px] mx-auto w-full">
        <div className="text-center">
          <h2 className="text-[50px] lg:text-[36px] sm:text-[28px] xs:text-[24px] font-black leading-[1.4]">
            Receive transmissions
          </h2>
          <p className="text-[#babcd0] text-base font-normal leading-[150%] font-poppins mt-4 mb-8">
            Unsubscribe at any time. <span className="text-white">Privacy policy</span>
          </p>

          <form className="flex items-center justify-center">
            <InputGroup 
              placeholder="Email Address"
              type="email"
              icon="/icons/arrow_white.svg"
            />
          </form>
        </div>
      </div>
    </section>
  );
}