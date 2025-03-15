import PolicyLayout from '@/components/layout/PolicyLayout';

export const metadata = {
  title: 'Privacy Policy | RVC Infinity',
  description: 'RVC Infinity Privacy Policy',
};

export default function PrivacyPolicyPage() {
  const content = [
    {
      heading: "Introduction",
      paragraphs: [
        "This Privacy Policy describes how RVC Infinity collects, uses, and discloses your personal information when you use our services, website, and mobile application.",
        "We are committed to protecting your privacy and ensuring the security of your personal information. By using our services, you agree to the collection and use of information in accordance with this policy."
      ]
    },
    {
      heading: "Information We Collect",
      paragraphs: [
        "We collect several types of information from and about users of our services, including:"
      ],
      list: [
        "Personal identifiers such as name, email address, phone number, and government-issued ID",
        "Financial information such as bank account details and transaction history",
        "Device information including IP address, browser type, and operating system",
        "Usage data such as pages visited, time spent on the platform, and features used"
      ]
    },
    {
      heading: "How We Use Your Information",
      paragraphs: [
        "We use the information we collect to:",
        "Provide, maintain, and improve our services",
        "Process transactions and send related information",
        "Verify your identity and prevent fraud",
        "Communicate with you about your account, updates, and promotional offers",
        "Comply with legal and regulatory requirements"
      ]
    },
    {
      heading: "Data Sharing and Disclosure",
      paragraphs: [
        "We may share your personal information with:",
        "Service providers who perform services on our behalf",
        "Financial institutions to facilitate transactions",
        "Regulatory authorities as required by law",
        "We do not sell your personal information to third parties."
      ]
    },
    {
      heading: "Data Security",
      paragraphs: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
      ]
    },
    {
      heading: "Your Rights",
      paragraphs: [
        "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict processing of your data."
      ]
    },
    {
      heading: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date."
      ]
    }
  ];

  return (
    <PolicyLayout 
      title="Privacy Policy"
      content={content}
      lastUpdated="May 15, 2023"
    />
  );
}