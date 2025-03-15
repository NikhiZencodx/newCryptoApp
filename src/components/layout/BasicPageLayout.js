import Image from 'next/image';
import Link from 'next/link';

export default function BasicPageLayout({ title, subtitle, content, cta }) {
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
        
        {/* Content Sections */}
        <div className="space-y-16">
          {content.map((section, index) => (
            <section key={index} className="bg-[#1a1b23]/70 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#2a2b33]">
              <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
              
              {section.type === 'grid' && (
                <div className={`grid grid-cols-1 ${section.columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
                  {section.items.map((item, idx) => (
                    <div key={idx} className="bg-[#2a2b33]/50 rounded-lg p-5 hover:bg-[#2a2b33]/70 transition-colors">
                      <div className="flex items-center gap-4 mb-3">
                        {/* {item.icon && (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-[#1a1b23] flex items-center justify-center">
                              <Image src={item.icon} alt={item.title} width={16} height={16} />
                            </div>
                          </div>
                        )} */}
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-[#babcd0]">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {section.type === 'list' && (
                <ul className="space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full bg-[#1a1b23] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <p className="text-[#babcd0]">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
        
        {/* CTA Section */}
        {cta && (
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{cta.title}</h2>
            <p className="text-[#babcd0] mb-6 max-w-2xl mx-auto">{cta.description}</p>
            <Link 
              href={cta.buttonLink} 
              className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#18c8ff] to-[#933ffe] text-white font-semibold hover:opacity-90 transition-all duration-300"
            >
              {cta.buttonText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}