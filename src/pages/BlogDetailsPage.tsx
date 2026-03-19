import { useHayc } from '../hayc/config-context';
import BreadcrumbSection from '../components/BreadcrumbSection';
import BlogDetailsSection from '../components/BlogDetailsSection';
import SidebarSection from '../components/SidebarSection';

export default function BlogDetailsPage() {
  const { t, img, config, cp } = useHayc();

  return (
    <div className="bg-white">
      <BreadcrumbSection />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <BlogDetailsSection />
        </div>
        <div className="lg:col-span-1">
          <SidebarSection />
        </div>
      </div>
    </div>
  );
}