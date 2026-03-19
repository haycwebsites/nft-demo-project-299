import { useHayc } from '../hayc/config-context';

export default function ServicesFeaturesSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <>
      <section className="cta-area cta-bg pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <div className="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
                <p {...cp('servicesFeaturesConfig.ctaSubtitle')}>{t(config.servicesFeaturesConfig.ctaSubtitle)}</p>
                <h2 {...cp('servicesFeaturesConfig.ctaTitle')}>{t(config.servicesFeaturesConfig.ctaTitle)}</h2>
                <h3 {...cp('servicesFeaturesConfig.phoneNumber')}>{t(config.servicesFeaturesConfig.phoneNumber)}</h3>
                <div className="cta-btn s-cta-btn wow fadeInRight animated mt-30" data-animation="fadeInDown animated" data-delay=".2s">
                  <a {...cp('servicesFeaturesConfig.ctaButtonText')} href={config.servicesFeaturesConfig.ctaButtonLink} className="btn">{t(config.servicesFeaturesConfig.ctaButtonText)}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-area services-bg services-two pt-120 pb-90">
        <div className="container">
          <div className="row">
            {config.servicesFeaturesConfig.services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`s-single-services ${service.isActive ? 'active' : ''} wow fadeInUp animated`} data-animation="fadeInDown animated" data-delay=".2s">
                  <div className="second-services-content">
                    <h5 {...cp(`servicesFeaturesConfig.services.${index}.title`)}>{t(service.title)}</h5>
                  </div>
                  <div className="services-icon">
                    <i className={service.iconClass}></i>
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

// Add to config.ts:
/*
export interface ServicesFeaturesConfig {
  ctaSubtitle: LocaleString;
  ctaTitle: LocaleString;
  phoneNumber: LocaleString;
  ctaButtonText: LocaleString;
  ctaButtonLink: string;
  services: Array<{
    title: LocaleString;
    iconClass: string;
    isActive: boolean;
  }>;
}

export const servicesFeaturesConfig: ServicesFeaturesConfig = {
  ctaSubtitle: { en: "Don't hestitate to contact us" },
  ctaTitle: { en: "MAKE AN APPOINTMENT NOW" },
  phoneNumber: { en: "666 888 0000" },
  ctaButtonText: { en: "Contact Us" },
  ctaButtonLink: "#",
  services: [
    {
      title: { en: "Air Conditioning" },
      iconClass: "far fa-star-half",
      isActive: false
    },
    {
      title: { en: "Concrete Flooring" },
      iconClass: "far fa-star-half",
      isActive: true
    },
    {
      title: { en: "Roof Terrace" },
      iconClass: "far fa-star-half",
      isActive: false
    },
    {
      title: { en: "Bedding" },
      iconClass: "far fa-star-half",
      isActive: false
    },
    {
      title: { en: "Coffee Pot" },
      iconClass: "far fa-star-half",
      isActive: false
    },
    {
      title: { en: "Outdoor Kitchen" },
      iconClass: "far fa-star-half",
      isActive: false
    },
    {
      title: { en: "Balcony" },
      iconClass: "far fa-star-half",
      isActive: false
    },
    {
      title: { en: "Microwave" },
      iconClass: "far fa-star-half",
      isActive: false
    },
    {
      title: { en: "Terrace" },
      iconClass: "far fa-star-half",
      isActive: false
    }
  ]
};
*/
