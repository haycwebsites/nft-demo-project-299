import { useHayc } from '../hayc/config-context';
import BreadcrumbSection from '../components/BreadcrumbSection';
import AboutSection from '../components/AboutSection';
import CtaSection from '../components/CtaSection';
import CounterSection from '../components/CounterSection';

export default function AboutPage() {
  const { t, img, config, cp } = useHayc();

  return (
    <div className="min-h-screen">
      <BreadcrumbSection />
      <AboutSection />
      <CounterSection />
      <CtaSection />
    </div>
  );
}