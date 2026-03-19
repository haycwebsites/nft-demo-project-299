import { useHayc } from '../hayc/config-context';

interface CtaConfig {
  backgroundImage: string;
  title: { en: string };
  subtitle: { en: string };
  buttonText: { en: string };
  buttonLink: string;
}

export function CtaSection() {
  const { t, img, config, cp } = useHayc();
  
  const ctaConfig: CtaConfig = {
    backgroundImage: 'img/bg/cta_bg02.jpg',
    title: { en: 'Ready to Get Started?' },
    subtitle: { en: 'Contact us today to learn more about our services and how we can help you find your perfect home.' },
    buttonText: { en: 'Get Started Now' },
    buttonLink: '#'
  };

  return (
    <section 
      className="cta-area cta-bg pt-120 pb-120" 
      style={{ backgroundImage: `url(${img(ctaConfig.backgroundImage)})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="cta-content text-center">
              <h2 
                className="cta-title mb-20 text-white" 
                {...cp('ctaConfig.title')}
              >
                {t(ctaConfig.title)}
              </h2>
              <p 
                className="cta-subtitle mb-30 text-white" 
                {...cp('ctaConfig.subtitle')}
              >
                {t(ctaConfig.subtitle)}
              </p>
              <a 
                href={ctaConfig.buttonLink} 
                className="btn btn-primary"
                {...cp('ctaConfig.buttonText')}
              >
                {t(ctaConfig.buttonText)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}