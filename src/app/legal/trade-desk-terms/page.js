import PolicyLayout from '@/components/layout/PolicyLayout';

export const metadata = {
  title: 'Trade Desk Terms of Service | RVC Infinity',
  description: 'RVC Infinity Trade Desk Terms of Service',
};

export default function TradeTermsPage() {
  const content = [
    {
      heading: "Introduction",
      paragraphs: [
        "These Trade Desk Terms of Service govern your use of RVC Infinity's OTC (Over-The-Counter) trading services, referred to as the 'Trade Desk'.",
        "By using our Trade Desk services, you agree to these terms in addition to our general Terms of Service."
      ]
    },
    {
      heading: "Eligibility",
      paragraphs: [
        "To use the Trade Desk services, you must:",
        "Have a verified RVC Infinity account with completed KYC/AML procedures",
        "Meet minimum trade size requirements (currently ₹10,00,000 or equivalent)",
        "Comply with all applicable laws and regulations"
      ]
    },
    {
      heading: "Trade Execution",
      paragraphs: [
        "The Trade Desk facilitates large cryptocurrency transactions with personalized service and competitive pricing.",
        "All trade quotes are indicative and subject to market conditions at the time of execution.",
        "Once you accept a quote, you are obligated to complete the transaction according to the agreed terms."
      ]
    },
    {
      heading: "Settlement",
      paragraphs: [
        "All trades must be settled according to the agreed timeline, typically within 24 hours of trade confirmation.",
        "Failure to complete settlement may result in penalties, including but not limited to cancellation fees and temporary or permanent suspension from Trade Desk services."
      ]
    },
    {
      heading: "Fees",
      paragraphs: [
        "Trade Desk fees are negotiated on a per-transaction basis and depend on factors including trade size, asset type, market conditions, and client relationship.",
        "All fees will be disclosed and agreed upon before trade execution."
      ]
    },
    {
      heading: "Risk Disclosure",
      paragraphs: [
        "OTC trading involves significant risks, including price volatility, counterparty risk, and settlement risk.",
        "You should carefully consider your financial situation and risk tolerance before using our Trade Desk services."
      ]
    },
    {
      heading: "Confidentiality",
      paragraphs: [
        "All Trade Desk communications and transactions are confidential.",
        "We may disclose information about your trades if required by law or regulation."
      ]
    },
    {
      heading: "Termination",
      paragraphs: [
        "We reserve the right to suspend or terminate your access to Trade Desk services at any time, for any reason, without notice.",
        "Termination of Trade Desk services does not necessarily affect your access to other RVC Infinity services."
      ]
    }
  ];

  return (
    <PolicyLayout 
      title="Trade Desk Terms of Service"
      content={content}
      lastUpdated="April 15, 2023"
    />
  );
}