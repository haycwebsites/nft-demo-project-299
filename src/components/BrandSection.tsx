import { useHayc } from '../hayc/config-context';

export default function BrandSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <div className="brand-area pt-60 pb-60" style={{ backgroundColor: config.brandConfig.backgroundColor }}>
      <div className="container">
        <div className="row brand-active">
          {config.brandConfig.brands.map((brand, index) => (
            <div key={index} className="col-xl-2">
              <div className="single-brand">
                <img src={img(brand.logo)} alt={brand.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Add to config.ts:
/*
export interface BrandConfig {
  backgroundColor: string;
  brands: {
    logo: string;
    alt: string;
  }[];
}

export const brandConfig: BrandConfig = {
  backgroundColor: '#d29751',
  brands: [
    { logo: '/img/brand/c-logo1.png', alt: 'Brand 1' },
    { logo: '/img/brand/c-logo2.png', alt: 'Brand 2' },
    { logo: '/img/brand/c-logo3.png', alt: 'Brand 3' },
    { logo: '/img/brand/c-logo4.png', alt: 'Brand 4' },
    { logo: '/img/brand/c-logo5.png', alt: 'Brand 5' },
    { logo: '/img/brand/c-logo6.png', alt: 'Brand 6' },
    { logo: '/img/brand/c-logo1.png', alt: 'Brand 7' }
  ]
};
*/