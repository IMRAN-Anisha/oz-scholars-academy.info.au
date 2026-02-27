import { HeroSection } from './components/HeroSection';
import { SystemSection } from './components/SystemSection';
import { ComparisonSection } from './components/ComparisonSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <HeroSection />
      <SystemSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <BookingSection />
      <Footer />
    </div>
  );
}