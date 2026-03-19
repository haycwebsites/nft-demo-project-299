import { useHayc } from '../hayc/config-context';

interface NeighborhoodItem {
  name: { en: string };
  description: { en: string };
  icon: string;
}

interface NeighborhoodsConfig {
  title: { en: string };
  subtitle: { en: string };
  items: NeighborhoodItem[];
}

export function NeighborhoodsSection() {
  const { t, config, cp } = useHayc();

  const neighborhoodsConfig: NeighborhoodsConfig = {
    title: { en: 'Neighborhoods' },
    subtitle: { en: 'villa neihborhoods' },
    items: [
      {
        name: { en: 'Hospital' },
        description: { en: 'Christ, General Hospital 0.18km' },
        icon: 'far fa-star-half'
      },
      {
        name: { en: 'Super Market' },
        description: { en: 'Moonfrog Super Market 0.25km' },
        icon: 'far fa-star-half'
      },
      {
        name: { en: 'Restaurant' },
        description: { en: 'hot chicken grill 0.4km' },
        icon: 'far fa-star-half'
      },
      {
        name: { en: 'Shopping Mall' },
        description: { en: 'Amsterdam Shopping Mall 0.13km' },
        icon: 'far fa-star-half'
      },
      {
        name: { en: 'Coffee Pot' },
        description: { en: 'McAfee Coffee Shop 0.35km' },
        icon: 'far fa-star-half'
      },
      {
        name: { en: 'Metro Stations' },
        description: { en: 'Metro Stations 0.50km' },
        icon: 'far fa-star-half'
      }
    ]
  };

  return (
    <section id="services" className="services-area services-bg services-two pt-120 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
              <span {...cp('neighborhoodsConfig.subtitle')}>{t(neighborhoodsConfig.subtitle)}</span>
              <h2 {...cp('neighborhoodsConfig.title')}>{t(neighborhoodsConfig.title)}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {neighborhoodsConfig.items.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className={`s-single-services ${index === 1 ? 'active' : ''} wow fadeInUp animated`} data-animation="fadeInDown animated" data-delay=".2s">
                <div className="second-services-content">
                  <h5 {...cp(`neighborhoodsConfig.items.${index}.name`)}>{t(item.name)}</h5>
                  <p {...cp(`neighborhoodsConfig.items.${index}.description`)}>{t(item.description)}</p>
                </div>
                <div className="services-icon">
                  <i className={item.icon}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}