import { useHayc } from '../hayc/config-context';

interface CounterItem {
  icon: string;
  count: string;
  label: LocaleString;
}

interface CounterConfig {
  backgroundImage: string;
  items: CounterItem[];
}

interface LocaleString {
  en: string;
}

const counterConfig: CounterConfig = {
  backgroundImage: 'img/bg/count-bg.jpg',
  items: [
    {
      icon: 'flaticon-apartment',
      count: '250+',
      label: { en: 'Properties Sold' }
    },
    {
      icon: 'flaticon-house',
      count: '150+',
      label: { en: 'Happy Clients' }
    },
    {
      icon: 'flaticon-building',
      count: '100+',
      label: { en: 'Projects Done' }
    },
    {
      icon: 'flaticon-trophy',
      count: '25+',
      label: { en: 'Years Experience' }
    }
  ]
};

export default function CounterSection() {
  const { t, img, cp } = useHayc();

  return (
    <div 
      className="counter-area pt-120 pb-90" 
      style={{
        backgroundImage: `url(${img(counterConfig.backgroundImage)})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="container">
        <div className="row">
          {counterConfig.items.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter mb-30 text-center">
                <div className="counter-icon mb-20">
                  <i className={item.icon}></i>
                </div>
                <div className="counter-text">
                  <h2 className="counter-number">{item.count}</h2>
                  <p {...cp(`counterConfig.items.${index}.label`)}>
                    {t(item.label)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}