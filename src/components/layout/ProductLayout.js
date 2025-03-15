import Image from 'next/image';
import Link from 'next/link';

export default function ProductLayout({ title, subtitle, children }) {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-[#babcd0] text-lg max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        {/* Content */}
        {children}
      </div>
    </div>
  );
}