export default function PolicyLayout({ title, content, lastUpdated }) {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1000px] px-6 md:px-8 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          {title}
        </h1>
        
        <div className="bg-[#1a1b23]/70 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#2a2b33]">
          <div className="prose prose-invert max-w-none">
            {content.map((section, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {section.heading && (
                  <h2 className="text-xl font-bold text-white mb-4">{section.heading}</h2>
                )}
                {section.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-[#babcd0] mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="text-[#babcd0]">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          
          {lastUpdated && (
            <div className="mt-8 pt-6 border-t border-[#2a2b33] text-[#babcd0] text-sm">
              Last Updated: {lastUpdated}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}