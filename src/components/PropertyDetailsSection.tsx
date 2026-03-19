import { useHayc } from '../hayc/config-context';

export default function PropertyDetailsSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        <div className="single-counter text-center mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
          <i className="fal fa-pencil-ruler"></i>
          <div className="counter p-relative">
            <span {...cp('propertyDetailsConfig.squareFeet.count')} className="count">{t(config.propertyDetailsConfig.squareFeet.count)}</span>
          </div>
          <p {...cp('propertyDetailsConfig.squareFeet.label')}>{t(config.propertyDetailsConfig.squareFeet.label)}</p>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="single-counter text-center mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
          <i className="fas fa-bath"></i>
          <div className="counter p-relative">
            <span {...cp('propertyDetailsConfig.bathrooms.count')} className="count">{t(config.propertyDetailsConfig.bathrooms.count)}</span>
          </div>
          <p {...cp('propertyDetailsConfig.bathrooms.label')}>{t(config.propertyDetailsConfig.bathrooms.label)}</p>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="single-counter text-center mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
          <i className="fas fa-bed"></i>
          <div className="counter p-relative">
            <span {...cp('propertyDetailsConfig.bedrooms.count')} className="count">{t(config.propertyDetailsConfig.bedrooms.count)}</span>
          </div>
          <p {...cp('propertyDetailsConfig.bedrooms.label')}>{t(config.propertyDetailsConfig.bedrooms.label)}</p>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="single-counter text-center mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
          <i className="fas fa-car"></i>
          <div className="counter p-relative">
            <span {...cp('propertyDetailsConfig.carParking.count')} className="count">{t(config.propertyDetailsConfig.carParking.count)}</span>
          </div>
          <p {...cp('propertyDetailsConfig.carParking.label')}>{t(config.propertyDetailsConfig.carParking.label)}</p>
        </div>
      </div>
    </div>
  );
}