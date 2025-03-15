import BasicPageLayout from '@/components/layout/BasicPageLayout';

export const metadata = {
  title: 'Support | RVC Infinity',
  description: 'Get help and support for your RVC Infinity account',
};

export default function SupportPage() {
  const pageData = {
    title: "Support Center",
    subtitle: "We're here to help you with any questions or issues you may have",
    content: [
      {
        title: "Support Channels",
        type: "grid",
        columns: 2,
        items: [
          {
            title: "Help Center",
            description: "Browse our knowledge base for answers to common questions",
            icon: "/icons/support/help.svg"
          },
          {
            title: "Email Support",
            description: "Contact our support team at support@rvcinfinity.com",
            icon: "/icons/support/email.svg"
          },
          {
            title: "Live Chat",
            description: "Chat with our support agents in real-time during business hours",
            icon: "/icons/support/chat.svg"
          },
          {
            title: "Ticket System",
            description: "Submit a support ticket for complex issues requiring investigation",
            icon: "/icons/support/ticket.svg"
          }
        ]
      },
      {
        title: "Common Issues",
        type: "list",
        items: [
          {
            title: "Account Verification",
            description: "Get help with KYC verification and account setup"
          },
          {
            title: "Deposits & Withdrawals",
            description: "Assistance with payment methods and transaction issues"
          },
          {
            title: "Trading Questions",
            description: "Help with placing orders and understanding trading features"
          },
          {
            title: "Security Concerns",
            description: "Support for account security and suspicious activity"
          }
        ]
      }
    ],
    cta: {
      title: "Need immediate assistance?",
      description: "Our support team is available 24/7 to help you with any issues",
      buttonText: "Contact Support",
      buttonLink: "/support/contact"
    }
  };

  return (
    <BasicPageLayout 
      title={pageData.title}
      subtitle={pageData.subtitle}
      content={pageData.content}
      cta={pageData.cta}
    />
  );
}