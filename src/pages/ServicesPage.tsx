import { useHayc } from '../hayc/config-context';
import BreadcrumbSection from '../components/BreadcrumbSection';
import MainServicesSection from '../components/MainServicesSection';
import CtaSection from '../components/CtaSection';
import ServicesFeaturesSection from '../components/ServicesFeaturesSection';

export default function ServicesPage() {
  const { t, img, config, cp } = useHayc();

  return (
    <div className="services-page">
      <BreadcrumbSection />
      <MainServicesSection />
      <CtaSection />
      <ServicesFeaturesSection />
    </div>
  );
}