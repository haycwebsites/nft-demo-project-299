import { useHayc } from '../hayc/config-context';
import BreadcrumbSection from '../components/BreadcrumbSection';
import ContactSection from '../components/ContactSection';
import BrandSection from '../components/BrandSection';

export default function ContactPage() {
  const { t, img, config, cp } = useHayc();

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSection />
      <ContactSection />
      <BrandSection />
    </div>
  );
}