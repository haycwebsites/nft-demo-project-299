import { useHayc } from '../hayc/config-context';

interface Property {
  name: string;
  bedBath: string;
  sqft: string;
  salePrice: string;
  rentPrice: string;
  floorPlanImage: string;
}

interface FloorPlanDetails {
  description: string;
  additionalInfo: string;
  floorNo: string;
  rooms: string;
  totalArea: string;
  parking: string;
  price: string;
  floorChartImage: string;
}

interface ContactConfig {
  ourPlansSpan: { en: string };
  selectAvailabilityTitle: { en: string };
  villaNeighborhoodsSpan: { en: string };
  neighborhoodsTitle: { en: string };
  availabilityTable: {
    headers: {
      residence: { en: string };
      bedBath: { en: string };
      sqft: { en: string };
      salePrice: { en: string };
      rentPrice: { en: string };
      floorPlan: { en: string };
    };
    viewNowButton: { en: string };
  };
  properties: Property[];
  floorPlans: {
    contact: FloorPlanDetails;
    about: FloorPlanDetails;
  };
}

declare module '../config' {
  interface SiteConfig {
    contactConfig: ContactConfig;
  }
}

export default function ContactSection() {
  const { t, img, config, cp } = useHayc();

  if (!config.siteConfig.contactConfig) return null;

  const { contactConfig } = config.siteConfig;

  return (
    <>
      {/* Tab Content for Floor Plans */}
      <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        <div className="row">
          <div className="col-lg-6">
            <p {...cp('contactConfig.floorPlans.contact.description')}>
              {t(contactConfig.floorPlans.contact.description)}
            </p>
            <p {...cp('contactConfig.floorPlans.contact.additionalInfo')}>
              {t(contactConfig.floorPlans.contact.additionalInfo)}
            </p>
            <ul>
              <li>
                FLOOR NO <span className="after" {...cp('contactConfig.floorPlans.contact.floorNo')}> {contactConfig.floorPlans.contact.floorNo}</span>
              </li>
              <li>
                ROOMS <span className="after" {...cp('contactConfig.floorPlans.contact.rooms')}> {contactConfig.floorPlans.contact.rooms}</span>
              </li>
              <li>
                TOTAL AREA / SQFT <span className="after" {...cp('contactConfig.floorPlans.contact.totalArea')}> {contactConfig.floorPlans.contact.totalArea}</span>
              </li>
              <li>
                PARKING <span className="after" {...cp('contactConfig.floorPlans.contact.parking')}> {contactConfig.floorPlans.contact.parking}</span>
              </li>
              <li>
                PRICE <span className="after" {...cp('contactConfig.floorPlans.contact.price')}> {contactConfig.floorPlans.contact.price}</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="apartments-img">
              <img src={img(contactConfig.floorPlans.contact.floorChartImage)} alt="floor-chart" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
        <div className="row">
          <div className="col-lg-6">
            <p {...cp('contactConfig.floorPlans.about.description')}>
              {t(contactConfig.floorPlans.about.description)}
            </p>
            <p {...cp('contactConfig.floorPlans.about.additionalInfo')}>
              {t(contactConfig.floorPlans.about.additionalInfo)}
            </p>
            <ul>
              <li>
                FLOOR NO <span className="after" {...cp('contactConfig.floorPlans.about.floorNo')}> {contactConfig.floorPlans.about.floorNo}</span>
              </li>
              <li>
                ROOMS <span className="after" {...cp('contactConfig.floorPlans.about.rooms')}> {contactConfig.floorPlans.about.rooms}</span>
              </li>
              <li>
                TOTAL AREA / SQFT <span className="after" {...cp('contactConfig.floorPlans.about.totalArea')}> {contactConfig.floorPlans.about.totalArea}</span>
              </li>
              <li>
                PARKING <span className="after" {...cp('contactConfig.floorPlans.about.parking')}> {contactConfig.floorPlans.about.parking}</span>
              </li>
              <li>
                PRICE <span className="after" {...cp('contactConfig.floorPlans.about.price')}> {contactConfig.floorPlans.about.price}</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="apartments-img">
              <img src={img(contactConfig.floorPlans.about.floorChartImage)} alt="floor-chart" />
            </div>
          </div>
        </div>
      </div>

      {/* Availability Section */}
      <section className="apartments pt-120 pb-90" style={{ background: '#f5f5f5' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                <span {...cp('contactConfig.ourPlansSpan')}>{t(contactConfig.ourPlansSpan)}</span>
                <h2 {...cp('contactConfig.selectAvailabilityTitle')}>{t(contactConfig.selectAvailabilityTitle)}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="availability-section">
                <div className="availability-table">
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th scope="col" {...cp('contactConfig.availabilityTable.headers.residence')}>
                          {t(contactConfig.availabilityTable.headers.residence)}
                        </th>
                        <th scope="col" {...cp('contactConfig.availabilityTable.headers.bedBath')}>
                          {t(contactConfig.availabilityTable.headers.bedBath)}
                        </th>
                        <th scope="col" {...cp('contactConfig.availabilityTable.headers.sqft')}>
                          {t(contactConfig.availabilityTable.headers.sqft)}
                        </th>
                        <th scope="col" {...cp('contactConfig.availabilityTable.headers.salePrice')}>
                          {t(contactConfig.availabilityTable.headers.salePrice)}
                        </th>
                        <th scope="col" {...cp('contactConfig.availabilityTable.headers.rentPrice')}>
                          {t(contactConfig.availabilityTable.headers.rentPrice)}
                        </th>
                        <th scope="col" {...cp('contactConfig.availabilityTable.headers.floorPlan')}>
                          {t(contactConfig.availabilityTable.headers.floorPlan)}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactConfig.properties.map((property, index) => (
                        <tr key={index}>
                          <td className="name" {...cp(`contactConfig.properties.${index}.name`)}>
                            {property.name}
                          </td>
                          <td {...cp(`contactConfig.properties.${index}.bedBath`)}>
                            {property.bedBath}
                          </td>
                          <td {...cp(`contactConfig.properties.${index}.sqft`)}>
                            {property.sqft}
                          </td>
                          <td className="price" {...cp(`contactConfig.properties.${index}.salePrice`)}>
                            {property.salePrice}
                          </td>
                          <td className="price" {...cp(`contactConfig.properties.${index}.rentPrice`)}>
                            {property.rentPrice}
                          </td>
                          <td>
                            <a 
                              className="btn popup-image" 
                              href={img(property.floorPlanImage)} 
                              data-elementor-open-lightbox="yes"
                              {...cp('contactConfig.availabilityTable.viewNowButton')}
                            >
                              {t(contactConfig.availabilityTable.viewNowButton)}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section id="services" className="services-area services-bg services-two pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                <span {...cp('contactConfig.villaNeighborhoodsSpan')}>
                  {t(contactConfig.villaNeighborhoodsSpan)}
                </span>
                <h2 {...cp('contactConfig.neighborhoodsTitle')}>
                  {t(contactConfig.neighborhoodsTitle)}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}