import ProductLayout from '@/components/layout/ProductLayout';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Fiat Gateway | RVC Infinity',
  description: 'Seamlessly deposit and withdraw Indian Rupees (INR) on our crypto platform',
};

export default function FiatGatewayPage() {
  const paymentMethods = [
    {
      name: "UPI",
      description: "Instant deposits using UPI apps like Google Pay, PhonePe, and BHIM",
      icon: "/icons/payment/upi.svg",
      depositTime: "Instant",
      withdrawalTime: "1-3 hours",
      depositFee: "Free",
      withdrawalFee: "₹10 per transaction"
    },
    {
      name: "IMPS/NEFT/RTGS",
      description: "Bank transfers using IMPS, NEFT, or RTGS from any Indian bank account",
      icon: "/icons/payment/bank.svg",
      depositTime: "1-3 hours",
      withdrawalTime: "1-24 hours",
      depositFee: "Free",
      withdrawalFee: "₹20 per transaction"
    },
    {
      name: "Net Banking",
      description: "Direct transfers from your bank account using net banking",
      icon: "/icons/payment/netbanking.svg",
      depositTime: "Instant to 3 hours",
      withdrawalTime: "1-24 hours",
      depositFee: "Free",
      withdrawalFee: "₹20 per transaction"
    },
    {
      name: "Debit/Credit Card",
      description: "Deposit funds using Visa, Mastercard, or RuPay debit/credit cards",
      icon: "/icons/payment/card.svg",
      depositTime: "Instant",
      withdrawalTime: "N/A",
      depositFee: "1.5%",
      withdrawalFee: "N/A"
    }
  ];

  const fiatFeatures = [
    {
      title: "INR Wallet",
      description: "Dedicated INR wallet to store your Indian Rupees securely on the platform",
      icon: "/icons/fiat/wallet.svg"
    },
    {
      title: "Instant Buy/Sell",
      description: "Instantly buy or sell cryptocurrencies using your INR balance",
      icon: "/icons/fiat/exchange.svg"
    },
    {
      title: "Auto-KYC",
      description: "Automated KYC verification for seamless INR deposits and withdrawals",
      icon: "/icons/fiat/kyc.svg"
    },
    {
      title: "Recurring Purchases",
      description: "Set up automatic recurring purchases of cryptocurrencies using INR",
      icon: "/icons/fiat/recurring.svg"
    }
  ];

  const faqItems = [
    {
      question: "What is the minimum deposit amount?",
      answer: "The minimum deposit amount is ₹100 for all payment methods."
    },
    {
      question: "What is the maximum deposit limit?",
      answer: "The maximum deposit limit depends on your KYC verification level. Basic KYC users can deposit up to ₹50,000 per day, while full KYC users can deposit up to ₹10,00,000 per day."
    },
    {
      question: "How long do withdrawals take to process?",
      answer: "Withdrawals are typically processed within 1-24 hours, depending on the payment method and banking hours."
    },
    {
      question: "Are there any limits on withdrawals?",
      answer: "Yes, withdrawal limits depend on your KYC verification level. Basic KYC users can withdraw up to ₹50,000 per day, while full KYC users can withdraw up to ₹10,00,000 per day."
    },
    {
      question: "Do I need to complete KYC to use the fiat gateway?",
      answer: "Yes, as per regulatory requirements, you need to complete at least basic KYC to deposit or withdraw INR."
    }
  ];

  return (
    <ProductLayout 
      title="Fiat Gateway"
      subtitle="Seamlessly deposit and withdraw Indian Rupees (INR) on our platform with multiple payment options"
    >
      {/* Payment Methods */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Payment Methods</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paymentMethods.map((method, index) => (
            <div 
              key={index}
              className="bg-[#1a1b23]/70 backdrop-blur-sm rounded-xl p-6 border border-[#2a2b33] hover:border-[#3a3b43] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#1a1b23] flex items-center justify-center">
                    <Image src={method.icon} alt={method.name} width={24} height={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{method.name}</h3>
                </div>
              </div>
              
              <p className="text-[#babcd0] mb-4">{method.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-[#babcd0] text-sm">Deposit Time</p>
                  <p className="text-white font-semibold">{method.depositTime}</p>
                </div>
                <div>
                  <p className="text-[#babcd0] text-sm">Withdrawal Time</p>
                  <p className="text-white font-semibold">{method.withdrawalTime}</p>
                </div>
                <div>
                  <p className="text-[#babcd0] text-sm">Deposit Fee</p>
                  <p className="text-white font-semibold">{method.depositFee}</p>
                </div>
                <div>
                  <p className="text-[#babcd0] text-sm">Withdrawal Fee</p>
                  <p className="text-white font-semibold">{method.withdrawalFee}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fiat Features */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Fiat Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fiatFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#1a1b23]/80 to-[#2a2b33]/50 backdrop-blur-sm rounded-xl p-6 border border-[#2a2b33] hover:border-[#3a3b43] transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center mb-5 mx-auto">
                <div className="w-12 h-12 rounded-full bg-[#1a1b23] flex items-center justify-center">
                  <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-[#babcd0]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="mb-20 bg-[#0a0a0a]/30 py-12 rounded-2xl">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">How It Works</h2>
          <p className="text-[#babcd0] text-center mb-10">
            Simple and secure process to deposit and withdraw INR
          </p>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#18c8ff] to-[#933ffe] -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#1a1b23] flex items-center justify-center">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                </div>
                <h3 className="text-white font-bold mb-2">Complete KYC</h3>
                <p className="text-[#babcd0]">Verify your identity to enable INR deposits and withdrawals</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#1a1b23] flex items-center justify-center">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                </div>
                <h3 className="text-white font-bold mb-2">Add Bank Account</h3>
                <p className="text-[#babcd0]">Link your bank account for seamless transfers</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#1a1b23] flex items-center justify-center">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                </div>
                <h3 className="text-white font-bold mb-2">Deposit INR</h3>
                <p className="text-[#babcd0]">Choose your preferred payment method to add funds</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#18c8ff] to-[#933ffe] flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#1a1b23] flex items-center justify-center">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                </div>
                <h3 className="text-white font-bold mb-2">Start Trading</h3>
                <p className="text-[#babcd0]">Buy cryptocurrencies with your INR balance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="mb-4 bg-[#1a1b23]/70 backdrop-blur-sm rounded-xl border border-[#2a2b33] overflow-hidden"
            >
              <div className="p-5 border-b border-[#2a2b33]">
                <h3 className="text-lg font-bold text-white">{item.question}</h3>
              </div>
              <div className="p-5">
                <p className="text-[#babcd0]">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to get started?</h2>
        <p className="text-[#babcd0] mb-8 max-w-2xl mx-auto">
          Create an account today and experience seamless INR deposits and withdrawals
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/register" 
            className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#18c8ff] to-[#933ffe] text-white font-semibold hover:opacity-90 transition-all duration-300"
          >
            Create Account
          </Link>
          <Link 
            href="/help/fiat-gateway" 
            className="inline-flex h-12 px-8 items-center justify-center rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>
    </ProductLayout>
  );
}