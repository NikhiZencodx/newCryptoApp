import SecurityLayout from '@/components/layout/SecurityLayout';

export const metadata = {
  title: 'AML Framework | RVC Infinity',
  description: 'Learn about our Anti-Money Laundering (AML) framework and policies',
};

export default function AMLPage() {
  const content = {
    mainPoints: [
      {
        title: "Our AML Framework",
        description: "RVC Infinity has implemented a comprehensive Anti-Money Laundering (AML) framework to prevent financial crimes and ensure compliance with regulatory requirements. Our AML policies are designed to detect, prevent, and report suspicious activities."
      },
      {
        title: "Key AML Measures",
        description: "Our AML framework includes several key components:",
        items: [
          "Transaction monitoring systems to detect suspicious patterns",
          "Risk-based customer due diligence procedures",
          "Ongoing screening against sanctions and PEP lists",
          "Regular internal audits and compliance reviews",
          "Mandatory reporting of suspicious transactions to FIU-IND"
        ]
      },
      {
        title: "Compliance Training",
        description: "Our team undergoes regular training on AML regulations and best practices to ensure effective implementation of our AML policies. This includes staying updated on the latest regulatory changes and emerging money laundering techniques."
      }
    ],
    highlights: [
      "Real-time transaction monitoring",
      "Automated risk scoring system",
      "Regular regulatory reporting",
      "Dedicated compliance team",
      "Collaboration with regulatory authorities"
    ]
  };

  return (
    <SecurityLayout 
      title="AML Framework"
      subtitle="Our comprehensive Anti-Money Laundering policies and procedures"
      content={content}
    />
  );
}