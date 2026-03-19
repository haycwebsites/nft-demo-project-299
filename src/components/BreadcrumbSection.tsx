import { useHayc } from '../hayc/config-context';

export default function BreadcrumbSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <section className="breadcrumb-area d-flex align-items-center" style={{ backgroundImage: `url(${img(config.breadcrumbConfig.backgroundImage)})` }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content text-center">
              <h2 {...cp('breadcrumbConfig.title')}>{t(config.breadcrumbConfig.title)}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a {...cp('breadcrumbConfig.homeLink')} href="/">{t(config.breadcrumbConfig.homeLink)}</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <span {...cp('breadcrumbConfig.currentPage')}>{t(config.breadcrumbConfig.currentPage)}</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}