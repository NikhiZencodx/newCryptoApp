import BasicPageLayout from '@/components/layout/BasicPageLayout';

export const metadata = {
  title: 'Trading Platform | RVC Infinity',
  description: 'Explore our advanced crypto trading platform features',
};

export default function TradingPlatformPage() {
  const pageData = {
    title: "Trading Platform",
    subtitle: "Experience seamless crypto trading with our advanced and user-friendly platform",
    content: [
      {
        title: "Platform Features",
        type: "grid",
        columns: 3,
        items: [
          {
            title: "Advanced Charts",
            description: "Professional TradingView charts with multiple timeframes and indicators",
            icon: "/icons/platform/chart.svg"
          },
          {
            title: "Order Types",
            description: "Support for market, limit, stop-limit, and OCO orders",
            icon: "/icons/platform/order.svg"
          },
          {
            title: "Mobile Trading",
            description: "Trade on the go with our responsive mobile web platform",
            icon: "/icons/platform/mobile.svg"
          },
          {
            title: "Portfolio Tracker",
            description: "Monitor your crypto portfolio performance in real-time",
            icon: "/icons/platform/portfolio.svg"
          },
          {
            title: "Price Alerts",
            description: "Set custom price alerts for your favorite cryptocurrencies",
            icon: "/icons/platform/alert.svg"
          },
          {
            title: "API Access",
            description: "Connect to our platform via REST and WebSocket APIs",
            icon: "/icons/platform/api.svg"
          }
        ]
      },
      {
        title: "Trading Modes",
        type: "list",
        items: [
          {
            title: "Basic Mode",
            description: "Simple interface for beginners with essential trading functions"
          },
          {
            title: "Advanced Mode",
            description: "Full-featured trading interface with advanced order types and chart tools"
          },
          {
            title: "OTC Trading",
            description: "Large volume trades with personalized service and competitive rates"
          }
        ]
      }
    ],
    cta: {
      title: "Ready to start trading?",
      description: "Create an account today and experience our advanced trading platform",
      buttonText: "Create Account",
      buttonLink: "/register"
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