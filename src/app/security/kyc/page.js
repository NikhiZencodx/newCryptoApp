import SecurityLayout from '@/components/layout/SecurityLayout';

export const metadata = {
  title: 'KYC Process | RVC Infinity',
  description: 'Learn about our Know Your Customer (KYC) verification process',
};

export default function KYCPage() {
  const content = {
    mainPoints: [
      {
        title: "Our KYC Approach",
        description: "At RVC Infinity, we implement a robust Know Your Customer (KYC) process to verify the identity of our users, prevent fraud, and comply with regulatory requirements. Our KYC process is designed to be simple, secure, and efficient."
      },
      {
        title: "KYC Verification Levels",
        description: "We offer a tiered KYC approach to provide flexibility while maintaining compliance:",
        items: [
          "Basic Verification: Email and phone verification with limited transaction capabilities",
          "Level 1 Verification: ID proof and basic personal information with increased limits",
          "Level 2 Verification: Address verification and enhanced due diligence for full platform access"
        ]
      },
      {
        title: "Required Documents",
        description: "To complete the KYC process, you will need to provide the following documents:",
        items: [
          "Government-issued photo ID (Aadhaar, PAN, Passport, or Driving License)",
          "Selfie for facial verification",
          "Proof of address (for Level 2 verification)",
          "PAN card (mandatory for all Indian users)"
        ]
      }
    ],
    highlights: [
      "Automated verification process",
      "Typically completed within 24 hours",
      "Bank-grade encryption for document storage",
      "Compliant with FIU-IND guidelines",
      "Regular re-verification as per regulations"
    ]
  };

  return (
    <SecurityLayout 
      title="KYC Process"
      subtitle="Our secure and efficient Know Your Customer verification process"
      content={content}
    />
  );
}