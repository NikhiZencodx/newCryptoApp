import Link from 'next/link';

export default function ComingSoon({ title, description }) {
  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="max-w-[600px] px-6 text-center">
        <div className="inline-block mb-6 p-4 rounded-full bg-gradient-to-r from-[#18c8ff]/20 to-[#933ffe]/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title} - Coming Soon</h1>
        <p className="text-[#babcd0] text-lg mb-8">{description}</p>
        <Link 
          href="/dashboard" 
          className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#18c8ff] to-[#933ffe] text-white font-semibold hover:opacity-90 transition-all duration-300"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}