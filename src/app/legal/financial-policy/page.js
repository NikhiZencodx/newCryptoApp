import PolicyLayout from '@/components/layout/PolicyLayout';

export const metadata = {
  title: 'Financial Policy Notice | RVC Infinity',
  description: 'RVC Infinity Financial Policy Notice',
};

export default function FinancialPolicyPage() {
  const content = [
    {
      heading: "Introduction",
      paragraphs: [
        "This Financial Policy Notice outlines important information regarding financial transactions, fees, and risks associated with using RVC Infinity's cryptocurrency trading services."
      ]
    },
    {
      heading: "Fee Structure",
      paragraphs: [
        "RVC Infinity charges fees for various services, including trading, deposits, and withdrawals. Our fee structure is as follows:"
      ],
      list: [
        "Trading fees: 0.1% to 0.5% based on trading volume and user tier",
        "Deposit fees: Vary by payment method",
        "Withdrawal fees: Vary by cryptocurrency and withdrawal method",
        "Additional fees may apply for specific services"
      ]
    },
    {
      heading: "Payment Processing",
      paragraphs: [
        "We process payments through various methods, including bank transfers, credit/debit cards, and other payment processors.",
        "Processing times vary depending on the payment method and may take from a few minutes to several business days."
      ]
    },
    {
      heading: "Risk Disclosure",
      paragraphs: [
        "Cryptocurrency trading involves significant risks, including:",
        "Price volatility: Cryptocurrency prices can fluctuate dramatically in short periods",
        "Liquidity risk: Some cryptocurrencies may be difficult to sell at desired prices",
        "Regulatory risk: Changes in regulations may impact cryptocurrency markets",
        "Technical risk: System failures or cyber attacks may affect trading operations",
        "You should only trade with funds you can afford to lose."
      ]
    },
    {
      heading: "Account Funding and Withdrawals",
      paragraphs: [
        "We maintain strict verification procedures for all deposits and withdrawals to prevent fraud and ensure compliance with regulatory requirements.",
        "Withdrawals may be subject to review and may require additional verification in certain circumstances."
      ]
    },
    {
      heading: "Tax Considerations",
      paragraphs: [
        "Users are responsible for determining what, if any, taxes apply to their cryptocurrency transactions.",
        "RVC Infinity does not provide tax advice. We recommend consulting with a tax professional regarding your specific situation."
      ]
    }
  ];

  return (
    <PolicyLayout 
      title="Financial Policy Notice"
      content={content}
      lastUpdated="April 22, 2023"
    />
  );
}