import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { CounterSection } from '../components/CounterSection';
import { PropertyDetailsSection } from '../components/PropertyDetailsSection';
import { ApartmentPlansSection } from '../components/ApartmentPlansSection';
import { AvailabilitySection } from '../components/AvailabilitySection';
import { NeighborhoodsSection } from '../components/NeighborhoodsSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { ContactSection } from '../components/ContactSection';
import { BrandSection } from '../components/BrandSection';

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CounterSection />
      <PropertyDetailsSection />
      <ApartmentPlansSection />
      <AvailabilitySection />
      <NeighborhoodsSection />
      <TestimonialSection />
      <ContactSection />
      <BrandSection />
    </div>
  );
}