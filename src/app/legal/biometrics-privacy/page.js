import PolicyLayout from '@/components/layout/PolicyLayout';

export const metadata = {
  title: 'Biometrics Privacy Policy | RVC Infinity',
  description: 'RVC Infinity Biometrics Privacy Policy',
};

export default function BiometricsPrivacyPage() {
  const content = [
    {
      heading: "Introduction",
      paragraphs: [
        "This Biometrics Privacy Policy explains how RVC Infinity collects, uses, stores, and protects biometric information from our users.",
        "Biometric information refers to data derived from biometric identifiers, such as fingerprints, facial geometry, or voice recognition patterns."
      ]
    },
    {
      heading: "Collection of Biometric Information",
      paragraphs: [
        "We may collect biometric information for the following purposes:"
      ],
      list: [
        "To verify your identity when accessing your account",
        "To enhance security and prevent unauthorized access",
        "To comply with regulatory requirements for identity verification"
      ]
    },
    {
      heading: "Consent",
      paragraphs: [
        "We will obtain your explicit consent before collecting any biometric information. You have the right to refuse to provide biometric information, though this may limit your access to certain features of our services."
      ]
    },
    {
      heading: "Storage and Protection",
      paragraphs: [
        "We implement industry-standard security measures to protect your biometric information from unauthorized access, disclosure, alteration, and destruction.",
        "Biometric information is encrypted and stored separately from other personal information."
      ]
    },
    {
      heading: "Retention and Deletion",
      paragraphs: [
        "We retain biometric information only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations.",
        "We will permanently destroy biometric information when the initial purpose for collecting it has been satisfied, or within 3 years of your last interaction with our services, whichever occurs first."
      ]
    },
    {
      heading: "Disclosure to Third Parties",
      paragraphs: [
        "We do not sell, trade, or otherwise transfer your biometric information to third parties except as described in this policy or with your explicit consent.",
        "We may share biometric information with service providers who assist us in identity verification, but only as necessary to provide our services."
      ]
    }
  ];

  return (
    <PolicyLayout 
      title="Biometrics Privacy Policy"
      content={content}
      lastUpdated="June 10, 2023"
    />
  );
}