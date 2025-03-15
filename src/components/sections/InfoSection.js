import Image from 'next/image';
import Link from 'next/link';
const infoCards = [
  {
    icon: '/icons/create_icon.svg',
    title: 'Create',
    text: 'Join RVC Infinity in just a few steps and unlock secure, fast, and seamless crypto transactions.',
    linkText: 'Get Started'
  },
  {
    icon: '/icons/login_icon.svg',
    title: 'Login',
    text: 'Access your RVC Infinity account anytime and manage your crypto assets with confidence and ease.',
    linkText: 'Find an ATM'
  },
  {
    icon: '/icons/manage_icon.svg',
    title: 'Manage',
    text: 'Stay in full control of your crypto portfolio with real-time insights, secure transactions, and 24/7 support.',
    linkText: 'Get Started'
  }
];


export default function InfoSection() {
  return (
    <section className="py-20 lg:py-16 md:py-12 sm:py-8">
      <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
          {infoCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#1A1B23]/80 backdrop-blur-sm rounded-[24px] p-8 md:p-6 flex flex-col items-center text-center group hover:bg-[#1A1B23] transition-all duration-300"
            >
              <div className="w-16 h-16 md:w-14 md:h-14 rounded-full bg-[#2B2C3B] mb-6">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={32}
                  height={32}
                  className="w-16 h-16 md:w-14 md:h-14"
                />
              </div>
              
              <h3 className="text-2xl md:text-xl font-bold text-white mb-4">
                {card.title}
              </h3>
              
              <p className="text-[#babcd0] text-base leading-relaxed mb-6">
                {card.text}
              </p>
              
              <Link 
                href="#" 
                className="inline-flex items-center text-[#b982ff] hover:text-white transition-colors duration-300 mt-auto group"
              >
                <span className="font-medium">
                  {card.linkText}
                </span>
                <svg 
                  className="w-5 h-5 ml-2 opacity-20 group-hover:opacity-100 transition-opacity" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}