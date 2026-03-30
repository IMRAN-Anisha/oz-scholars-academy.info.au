import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SystemProcessSection } from './components/SystemProcessSection';
import { SystemSection } from './components/SystemSection';
import { ComparisonSection } from './components/ComparisonSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { DiscountSection } from './components/DiscountSection';
import { FAQSection } from './components/FAQSection';
import { BookingSection } from './components/BookingSection';
import { ContactFormSection } from './components/ContactFormSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <HeroSection />
      <SystemProcessSection />
      <SystemSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <DiscountSection />
      <FAQSection />
      <BookingSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}