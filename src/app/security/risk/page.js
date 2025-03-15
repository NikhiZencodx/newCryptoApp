import SecurityLayout from '@/components/layout/SecurityLayout';

export const metadata = {
  title: 'Risk Assessment | RVC Infinity',
  description: 'Learn about our risk assessment framework for crypto transactions',
};

export default function RiskPage() {
  const content = {
    mainPoints: [
      {
        title: "Risk-Based Approach",
        description: "RVC Infinity employs a risk-based approach to assess and mitigate potential risks associated with cryptocurrency transactions. This approach allows us to allocate resources efficiently while maintaining high security standards."
      },
      {
        title: "Risk Assessment Factors",
        description: "Our risk assessment framework considers various factors to evaluate transaction and customer risk:",
        items: [
          "Customer profile and activity patterns",
          "Transaction size, frequency, and counterparties",
          "Geographic risk factors and jurisdictional concerns",
          "Source of funds and wealth verification",
          "Cryptocurrency wallet analysis and blockchain analytics"
        ]
      },
      {
        title: "Risk Mitigation Measures",
        description: "Based on our risk assessment, we implement appropriate measures to mitigate identified risks, including enhanced due diligence for high-risk customers, additional verification steps for certain transactions, and ongoing monitoring of high-risk activities."
      }
    ],
    highlights: [
      "Automated risk scoring algorithm",
      "Blockchain analytics integration",
      "Regular risk assessment reviews",
      "Tailored due diligence measures",
      "Continuous transaction monitoring"
    ]
  };

  return (
    <SecurityLayout 
      title="Risk Assessment"
      subtitle="Our comprehensive approach to evaluating and mitigating risks"
      content={content}
    />
  );
}