import { useHayc } from '../hayc/config-context';

export default function HeroSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <section id="home" className="slider-area fix p-relative">
      <div className="slider-active">
        {config.heroConfig.slides.map((slide, index) => (
          <div 
            key={index}
            className="single-slider slider-bg d-flex align-items-center" 
            style={{ backgroundImage: `url(${img(slide.backgroundImage)})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="slider-content s-slider-content text-left">
                    <h2 
                      {...cp(`heroConfig.slides.${index}.title`)}
                      data-animation="fadeInUp" 
                      data-delay=".4s"
                    >
                      {t(slide.title)}
                    </h2>
                    <ul data-animation="fadeInUp" data-delay=".6s">
                      {slide.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <i className={feature.icon}></i>
                          <span {...cp(`heroConfig.slides.${index}.features.${featureIndex}.text`)}>
                            {t(feature.text)}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="slider-btn mt-55">
                      <a 
                        href="#" 
                        className="btn ss-btn" 
                        data-animation="fadeInRight" 
                        data-delay=".8s"
                        {...cp(`heroConfig.slides.${index}.ctaButton`)}
                      >
                        {t(slide.ctaButton)}
                      </a>
                      <a 
                        href={slide.videoUrl} 
                        className="video-i popup-video" 
                        data-animation="fadeInUp" 
                        data-delay=".8s" 
                        style={{ animationDelay: '0.8s' }} 
                        tabIndex={0}
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="slider-price">
                    <h3 {...cp(`heroConfig.slides.${index}.priceLabel`)}>
                      {t(slide.priceLabel)}
                    </h3>
                    <h2 {...cp(`heroConfig.slides.${index}.price`)}>
                      {t(slide.price)}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}