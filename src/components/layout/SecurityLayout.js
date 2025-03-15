import Image from 'next/image';
import Link from 'next/link';

export default function SecurityLayout({ title, subtitle, content }) {
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Main Content */}
            <div className="bg-[#1a1b23]/70 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#2a2b33]">
              {content.mainPoints.map((point, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{point.title}</h2>
                  <p className="text-[#babcd0] mb-4">{point.description}</p>
                  {point.items && (
                    <ul className="space-y-2 ml-4">
                      {point.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#b982ff] mt-2 flex-shrink-0"></div>
                          <span className="text-[#babcd0]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            {/* Sidebar */}
            <div className="bg-[#1a1b23]/70 backdrop-blur-sm rounded-xl p-6 border border-[#2a2b33] mb-6">
              <h3 className="text-lg font-bold text-white mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                {content.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-[#1a1b23] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-[#babcd0]">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#18c8ff]/10 to-[#933ffe]/10 backdrop-blur-sm rounded-xl p-6 border border-[#2a2b33]">
              <h3 className="text-lg font-bold text-white mb-4">Need Assistance?</h3>
              <p className="text-[#babcd0] mb-6">Have questions about our {title.toLowerCase()} procedures? Our team is here to help.</p>
              <Link 
                href="/support" 
                className="w-full h-10 rounded-lg bg-gradient-to-r from-[#18c8ff] to-[#933ffe] inline-flex items-center justify-center font-semibold text-white hover:opacity-90 transition-all"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}