import { useHayc } from '../hayc/config-context';

export default function ApartmentPlansSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <>
      {/* Gallery Section */}
      <section className="services-area services-two pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80">
                <span {...cp('apartmentPlansConfig.gallerySection.subtitle')}>{t(config.apartmentPlansConfig.gallerySection.subtitle)}</span>
                <h2 {...cp('apartmentPlansConfig.gallerySection.title')}>{t(config.apartmentPlansConfig.gallerySection.title)}</h2>
              </div>
            </div>
          </div>
          <div className="row services-active">
            {config.apartmentPlansConfig.gallerySection.items.map((item, index) => (
              <div key={index} className="col-xl-4">
                <div className="single-services mb-30">
                  <div className="services-thumb">
                    <a className="gallery-link popup-image" href={img(item.fullImage)}>
                      <img src={img(item.image)} alt="img" />
                    </a>
                  </div>
                  <div className="services-content">
                    <small {...cp(`apartmentPlansConfig.gallerySection.items.${index}.subtitle`)}>{t(item.subtitle)}</small>
                    <h4>
                      <a href={item.link} {...cp(`apartmentPlansConfig.gallerySection.items.${index}.title`)}>{t(item.title)}</a>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Features Section */}
      <section className="choose-area pt-120 pb-120 p-relative" style={{background: '#f5f5f5'}}>
        <div className="chosse-img wow fadeInRight animated" data-animation="fadeInRight animated" data-delay=".2s"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="s-about-img p-relative">
                <img src={img(config.apartmentPlansConfig.propertySection.image)} alt="img" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="choose-wrap">
                <div className="section-title w-title left-align mb-35 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                  <span {...cp('apartmentPlansConfig.propertySection.subtitle')}>{t(config.apartmentPlansConfig.propertySection.subtitle)}</span>
                  <h2 {...cp('apartmentPlansConfig.propertySection.title')}>{t(config.apartmentPlansConfig.propertySection.title)}</h2>
                </div>
                <div className="choose-content wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                  <p {...cp('apartmentPlansConfig.propertySection.description')}>{t(config.apartmentPlansConfig.propertySection.description)}</p>
                  
                  <div className="choose-list mt-20 mb-20">
                    <ul>
                      {config.apartmentPlansConfig.propertySection.features.map((feature, index) => (
                        <li key={index}>
                          <i className={feature.icon}></i>
                          <span {...cp(`apartmentPlansConfig.propertySection.features.${index}.text`)}>{t(feature.text)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h3 {...cp('apartmentPlansConfig.propertySection.priceLabel')}>{t(config.apartmentPlansConfig.propertySection.priceLabel)}</h3>
                  <h2 {...cp('apartmentPlansConfig.propertySection.price')}>{t(config.apartmentPlansConfig.propertySection.price)}</h2>
                  <div className="choose-btn mt-30">
                    <a href={config.apartmentPlansConfig.propertySection.buttonLink} className="btn" {...cp('apartmentPlansConfig.propertySection.buttonText')}>{t(config.apartmentPlansConfig.propertySection.buttonText)}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-area services-bg services-two pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                <span {...cp('apartmentPlansConfig.servicesSection.subtitle')}>{t(config.apartmentPlansConfig.servicesSection.subtitle)}</span>
                <h2 {...cp('apartmentPlansConfig.servicesSection.title')}>{t(config.apartmentPlansConfig.servicesSection.title)}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {config.apartmentPlansConfig.servicesSection.services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-30">
                <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                  <div className="services-ico2">
                    <i className={service.icon}></i>
                  </div>
                  <div className="second-services-content2">
                    <h5 {...cp(`apartmentPlansConfig.servicesSection.services.${index}.title`)}>{t(service.title)}</h5>
                    <p {...cp(`apartmentPlansConfig.servicesSection.services.${index}.description`)}>{t(service.description)}</p>
                    <a href={service.link} {...cp(`apartmentPlansConfig.servicesSection.services.${index}.linkText`)}>{t(service.linkText)}</a>
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