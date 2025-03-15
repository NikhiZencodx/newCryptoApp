import PolicyLayout from '@/components/layout/PolicyLayout';

export const metadata = {
  title: 'Terms of Service | RVC Infinity',
  description: 'RVC Infinity Terms of Service',
};

export default function TermsOfServicePage() {
  const content = [
    {
      heading: "Acceptance of Terms",
      paragraphs: [
        "By accessing or using RVC Infinity's services, website, or mobile application, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
        "If you do not agree with any part of these terms, you may not use our services."
      ]
    },
    {
      heading: "Eligibility",
      paragraphs: [
        "You must be at least 18 years old to use our services.",
        "You must have the legal capacity to enter into a binding agreement.",
        "You must not be a resident of a country subject to sanctions or embargoes.",
        "You must not be prohibited from using cryptocurrency services under applicable laws."
      ]
    },
    {
      heading: "Account Registration",
      paragraphs: [
        "You must provide accurate, current, and complete information during the registration process.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You are responsible for all activities that occur under your account."
      ]
    },
    {
      heading: "Prohibited Activities",
      paragraphs: [
        "When using our services, you agree not to:"
      ],
      list: [
        "Violate any applicable laws or regulations",
        "Infringe on the rights of others",
        "Use our services for illegal activities, including money laundering or terrorist financing",
        "Attempt to gain unauthorized access to our systems",
        "Engage in market manipulation or fraudulent activities",
        "Use our services to harass, abuse, or harm others"
      ]
    },
    {
      heading: "Termination",
      paragraphs: [
        "We reserve the right to suspend or terminate your account and access to our services at any time, for any reason, without notice."
      ]
    },
    {
      heading: "Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by law, RVC Infinity shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services."
      ]
    },
    {
      heading: "Changes to Terms",
      paragraphs: [
        "We may modify these Terms of Service at any time. Continued use of our services after any such changes constitutes your acceptance of the new terms."
      ]
    }
  ];

  return (
    <PolicyLayout 
      title="Terms of Service"
      content={content}
      lastUpdated="March 30, 2023"
    />
  );
}