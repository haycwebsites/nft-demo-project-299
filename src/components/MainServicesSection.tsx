import { useHayc } from '../hayc/config-context';

export interface MainServicesConfig {
  title: { en: string };
  services: Array<{
    icon: string;
    title: { en: string };
    description: { en: string };
    readMoreText: { en: string };
    readMoreLink: string;
  }>;
}

export const mainServicesConfig: MainServicesConfig = {
  title: { en: 'Services' },
  services: [
    {
      icon: 'fad fa-megaphone',
      title: { en: 'Dedicated Production & Planning Teams' },
      description: { en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.' },
      readMoreText: { en: 'Read More' },
      readMoreLink: '#'
    },
    {
      icon: 'far fa-building',
      title: { en: "We're Here To Make You Successful" },
      description: { en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.' },
      readMoreText: { en: 'Read More' },
      readMoreLink: '#'
    },
    {
      icon: 'fad fa-home',
      title: { en: 'Premium, Fresh Cuisine Made Onsite' },
      description: { en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.' },
      readMoreText: { en: 'Read More' },
      readMoreLink: '#'
    },
    {
      icon: 'fas fa-search-location',
      title: { en: 'Flexible, Contemporary & Included Spaces' },
      description: { en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.' },
      readMoreText: { en: 'Read More' },
      readMoreLink: '#'
    },
    {
      icon: 'far fa-car-garage',
      title: { en: 'Human-Centered Design Friendly Spaces' },
      description: { en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.' },
      readMoreText: { en: 'Read More' },
      readMoreLink: '#'
    },
    {
      icon: 'fas fa-comments-alt',
      title: { en: 'Broker Cutting-Edge And Technology' },
      description: { en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.' },
      readMoreText: { en: 'Read More' },
      readMoreLink: '#'
    }
  ]
};

export function MainServicesSection() {
  const { t, config, cp } = useHayc();

  return (
    <>
      <section className="breadcrumb-area bread-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="breadcrumb-wrap text-center">
                <div className="breadcrumb-title mb-30">
                  <h2 {...cp('mainServicesConfig.title')}>{t(config.mainServicesConfig.title)}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-area services-bg services-two pt-120 pb-90">
        <div className="container">
          <div className="row">
            {config.mainServicesConfig.services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-30">
                <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                  <div className="services-ico2">
                    <i className={service.icon}></i>
                  </div>
                  <div className="second-services-content2">
                    <h5 {...cp(`mainServicesConfig.services.${index}.title`)}>{t(service.title)}</h5>
                    <p {...cp(`mainServicesConfig.services.${index}.description`)}>{t(service.description)}</p>
                    <a href={service.readMoreLink} {...cp(`mainServicesConfig.services.${index}.readMoreText`)}>{t(service.readMoreText)}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}