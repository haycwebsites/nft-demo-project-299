import { useHayc } from '../hayc/config-context';

interface TestimonialConfig {
  subtitle: { en: string };
  title: { en: string };
  testimonials: {
    quote: { en: string };
    authorName: { en: string };
    authorRole: { en: string };
    authorImage: string;
  }[];
}

export function TestimonialSection() {
  const { t, img, config, cp } = useHayc();

  const testimonialConfig: TestimonialConfig = {
    subtitle: { en: 'Experience With me' },
    title: { en: 'Testimonials' },
    testimonials: [
      {
        quote: { en: 'Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper .' },
        authorName: { en: 'Mr Jone Dose' },
        authorRole: { en: 'Web Developer' },
        authorImage: '/img/testimonial/testi_avatar.png'
      },
      {
        quote: { en: 'Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper .' },
        authorName: { en: 'Margie R. Robinson' },
        authorRole: { en: 'Web Developer' },
        authorImage: '/img/testimonial/testi_avatar.png'
      },
      {
        quote: { en: 'Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper .' },
        authorName: { en: 'Mr Jone Dose' },
        authorRole: { en: 'Web Developer' },
        authorImage: '/img/testimonial/testi_avatar.png'
      }
    ]
  };

  return (
    <section id="testimonios" className="testimonial-area gray-bg testimonial-p pt-115 pb-185 text-center" style={{backgroundImage: 'url(img/testimonial/test-bg.jpg)'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="section-title center-align mb-40 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
              <span {...cp('testimonialConfig.subtitle')}>{t(testimonialConfig.subtitle)}</span>
              <h2 {...cp('testimonialConfig.title')}>{t(testimonialConfig.title)}</h2>
            </div>
            <div className="testimonial-active">
              {testimonialConfig.testimonials.map((testimonial, index) => (
                <div key={index} className="single-testimonial">
                  <i className="fas fa-quote-left"></i>
                  <p {...cp(`testimonialConfig.testimonials.${index}.quote`)}>{t(testimonial.quote)}</p>
                  <div className="testi-author text-center">
                    <img src={img(testimonial.authorImage)} alt="testimonial author" />
                    <div className="ta-info">
                      <h6 {...cp(`testimonialConfig.testimonials.${index}.authorName`)}>{t(testimonial.authorName)}</h6>
                      <span {...cp(`testimonialConfig.testimonials.${index}.authorRole`)}>{t(testimonial.authorRole)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
}