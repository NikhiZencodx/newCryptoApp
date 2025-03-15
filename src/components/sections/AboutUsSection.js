import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsSection() {
  const leadershipTeam = [
    {
      name: "RAGHUVIR PATEL",
      position: "Principal Officer",
      qualification: "Graduated",
      experience: "3 years in AML/CFT domain",
      shareholding: "90%",
      image: "/images/team/raghuvir.jpg" // Replace with actual image path
    },
    {
      name: "SAPNA PATEL",
      position: "Designated Director",
      qualification: "Graduated",
      experience: "Finance and Management",
      shareholding: "10%",
      image: "/images/team/sapna.jpg" // Replace with actual image path
    }
  ];

  const companyStats = [
    {
      label: "FIU-IND Registration",
      value: "30/10/2024",
      icon: "/icons/calendar.svg"
    },
    {
      label: "REID",
      value: "VA00058135",
      icon: "/icons/id-card.svg"
    },
    {
      label: "Operations Started",
      value: "13/03/2024",
      icon: "/icons/rocket.svg"
    },
    {
      label: "Company Net Worth",
      value: "1 lakh",
      icon: "/icons/wallet.svg"
    }
  ];

  return (
    <div className="py-20 lg:py-24">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                About RVC Infinity
              </h1>
              <p className="text-[#babcd0] text-lg mb-8 leading-relaxed">
                We redefine the digital asset experience by offering a seamless crypto-to-crypto and crypto-to-INR trading ecosystem. Our platform is designed to cater to both novice traders and institutional investors, ensuring a secure, efficient, and dynamic trading environment.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="bg-[#1a1b23]/70 backdrop-blur-sm rounded-xl p-5 border border-[#2a2b33]">
                  <h3 className="text-white font-bold mb-2">Trade Name</h3>
                  <p className="text-[#babcd0]">RVC STABILITY ADVISORS PRIVATE LIMITED</p>
                </div>
                <div className="bg-[#1a1b23]/70 backdrop-blur-sm rounded-xl p-5 border border-[#2a2b33]">
                  <h3 className="text-white font-bold mb-2">Jurisdiction</h3>
                  <p className="text-[#babcd0]">Onshore (India)</p>
                </div>
              </div>
              <Link 
                href="http://rvcinfinity.com" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#18c8ff] to-[#933ffe] text-white font-semibold hover:opacity-90 transition-all duration-300"
              >
                Visit Website
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#18c8ff]/20 to-[#933ffe]/20"></div>
              <Image 
                src="/images/about-hero.jpg" // Replace with actual image
                alt="RVC Infinity Office" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="mb-24 bg-[#0a0a0a]/30 py-16">
        <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-[#1a1b23]/50 backdrop-blur-sm rounded-xl p-6 border border-[#2a2b33] hover:border-[#3a3b43] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#1a1b23] flex items-center justify-center">
                      <Image src={stat.icon} alt={stat.label} width={20} height={20} />
                    </div>
                  </div>
                  <h3 className="text-white font-bold">{stat.label}</h3>
                </div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="mb-24">
        <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-[#babcd0] text-lg max-w-2xl mx-auto">
              Meet the visionaries behind RVC Infinity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipTeam.map((member, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1b23]/80 to-[#2a2b33]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#2a2b33] hover:border-[#3a3b43] transition-all duration-300"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] lg:grid-cols-[200px_1fr]">
                  <div className="relative h-[200px] sm:h-full">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-[#b982ff] font-semibold mb-4">{member.position}</p>
                    
                    <div className="space-y-3 text-[#babcd0]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#2a2b33] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                        </div>
                        <span>Qualification: {member.qualification}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#2a2b33] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                          </svg>
                        </div>
                        <span>Experience: {member.experience}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#2a2b33] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                        <span>Shareholding: {member.shareholding}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Banner */}
      <section className="bg-gradient-to-r from-[#18c8ff]/10 to-[#933ffe]/10 py-12 backdrop-blur-sm">
        <div className="max-w-[1440px] px-6 md:px-8 lg:px-[18px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#1a1b23] flex items-center justify-center">
                  <Image src="/icons/verified.svg" alt="Verified" width={20} height={20} />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Registered with FIU-IND</h3>
                <p className="text-[#babcd0]">REID: VA00058135</p>
              </div>
            </div>
            
            <div className="h-10 w-px bg-[#2a2b33] hidden md:block"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#1a1b23] flex items-center justify-center">
                  <Image src="/icons/shield.svg" alt="Shield" width={20} height={20} />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Full AML/KYC Compliance</h3>
                <p className="text-[#babcd0]">Adhering to all regulatory requirements</p>
              </div>
            </div>
            
            <Link 
              href="/compliance" 
              className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300 whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}