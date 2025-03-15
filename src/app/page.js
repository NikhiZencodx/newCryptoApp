import ErrorBoundary from '@/components/ui/ErrorBoundary';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Header from '@/components/layout/Header';
import InfoSection from '@/components/sections/InfoSection';
import FeesSection from '@/components/sections/FeesSection';
import InvestSection from '@/components/sections/InvestSection';
import SubscribeSection from '@/components/sections/SubscribeSection';
import Navbar from '@/components/layout/Navbar';
import MiningSection from '@/components/sections/MiningSection';
import SupportSection from '@/components/sections/SupportSection';
import SecureInvestSection from '@/components/sections/SecureInvestSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import HomeFeatures from '@/components/sections/HomeFeatures';

export default function Home() {
  return (
    <ErrorBoundary>
      <Header />
      <main>

        <AnimatedSection animation="fade-up">
          <HomeFeatures />  
        </AnimatedSection>

        <AnimatedSection animation="fade-in">
          <SupportSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-up">
          <InfoSection />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in">
          <MiningSection />
        </AnimatedSection>

        
        
        <AnimatedSection animation="fade-up">
          <FeesSection />
        </AnimatedSection>

        <AnimatedSection animation="slide-in">
          <SecureInvestSection />
        </AnimatedSection>

        <AnimatedSection animation="fade-in">
          <NewsletterSection />
        </AnimatedSection>
        
      </main>
    </ErrorBoundary>
  );
}