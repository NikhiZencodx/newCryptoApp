'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AuthForm({ mode = 'login' }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Redirect to dashboard after successful auth
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 pb-10 flex items-center justify-center">
      <div className="w-full max-w-md px-6">
        <div className="bg-[#1a1b23]/70 backdrop-blur-sm rounded-xl p-8 border border-[#2a2b33]">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/RVC.png" 
                alt="RVC Logo"
                width={80}
                height={80}
                className="mx-auto"
              />
            </Link>
            <h1 className="text-2xl font-bold text-white mb-2">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-[#babcd0]">
              {mode === 'login' 
                ? 'Sign in to access your account' 
                : 'Join RVC Infinity crypto trading platform'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#babcd0] mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg bg-[#2a2b33]/50 border border-[#3a3b43] text-white focus:outline-none focus:border-[#933ffe]"
                  placeholder="Enter your full name"
                  required={mode === 'register'}
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#babcd0] mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg bg-[#2a2b33]/50 border border-[#3a3b43] text-white focus:outline-none focus:border-[#933ffe]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#babcd0] mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg bg-[#2a2b33]/50 border border-[#3a3b43] text-white focus:outline-none focus:border-[#933ffe]"
                placeholder="Enter your password"
                required
              />
            </div>

            {mode === 'register' && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#babcd0] mb-1">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg bg-[#2a2b33]/50 border border-[#3a3b43] text-white focus:outline-none focus:border-[#933ffe]"
                  placeholder="Confirm your password"
                  required={mode === 'register'}
                />
              </div>
            )}

            {mode === 'login' && (
              <div className="flex justify-end">
                <Link href="/forgot-password" className="text-sm text-[#933ffe] hover:text-[#b982ff]">
                  Forgot password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-lg bg-gradient-to-r from-[#18c8ff] to-[#933ffe] text-white font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                mode === 'login' ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#babcd0]">
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <Link 
                href={mode === 'login' ? '/register' : '/login'} 
                className="text-[#933ffe] hover:text-[#b982ff]"
              >
                {mode === 'login' ? 'Sign Up' : 'Sign In'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}