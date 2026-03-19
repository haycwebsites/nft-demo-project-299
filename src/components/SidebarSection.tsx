import { useHayc } from '../hayc/config-context';

interface SidebarSectionConfig {
  searchTitle: { en: string };
  searchPlaceholder: { en: string };
  instagramTitle: { en: string };
  followUsTitle: { en: string };
  categoriesTitle: { en: string };
  feedsTitle: { en: string };
  categories: Array<{
    name: { en: string };
    count: number;
    href: string;
  }>;
  feeds: Array<{
    title: { en: string };
    time: { en: string };
    image: string;
    href: string;
  }>;
  instagramImages: Array<{
    image: string;
    href: string;
  }>;
  socialLinks: Array<{
    icon: string;
    href: string;
  }>;
}

export default function SidebarSection() {
  const { t, img, config, cp } = useHayc();

  const sidebarConfig: SidebarSectionConfig = {
    searchTitle: { en: 'Search' },
    searchPlaceholder: { en: 'Search your keyword...' },
    instagramTitle: { en: 'Instagram' },
    followUsTitle: { en: 'Follow Us' },
    categoriesTitle: { en: 'Categories' },
    feedsTitle: { en: 'Feeds' },
    categories: [
      { name: { en: 'Lifestyle' }, count: 5, href: '#' },
      { name: { en: 'Travel' }, count: 34, href: '#' },
      { name: { en: 'Fashion' }, count: 89, href: '#' },
      { name: { en: 'Music' }, count: 92, href: '#' },
      { name: { en: 'Branding' }, count: 56, href: '#' },
    ],
    feeds: [
      {
        title: { en: 'Alonso kelina falao asiano pero' },
        time: { en: '1 Hours ago' },
        image: '/img/blog/aside/post_01.jpg',
        href: '#'
      },
      {
        title: { en: 'It is a long established fact that a reader' },
        time: { en: '3 Hours ago' },
        image: '/img/blog/aside/post_02.jpg',
        href: '#'
      },
      {
        title: { en: 'There are many variations of passages' },
        time: { en: '5 Hours ago' },
        image: '/img/blog/aside/post_03.jpg',
        href: '#'
      },
    ],
    instagramImages: [
      { image: '/img/blog/aside/insta_01.jpg', href: '#' },
      { image: '/img/blog/aside/insta_02.jpg', href: '#' },
      { image: '/img/blog/aside/insta_03.jpg', href: '#' },
      { image: '/img/blog/aside/insta_04.jpg', href: '#' },
      { image: '/img/blog/aside/insta_05.jpg', href: '#' },
      { image: '/img/blog/aside/insta_06.jpg', href: '#' },
      { image: '/img/blog/aside/insta_07.jpg', href: '#' },
      { image: '/img/blog/aside/insta_08.jpg', href: '#' },
      { image: '/img/blog/aside/insta_09.jpg', href: '#' },
    ],
    socialLinks: [
      { icon: 'fab fa-twitter', href: '#' },
      { icon: 'fab fa-pinterest-p', href: '#' },
      { icon: 'fab fa-facebook-f', href: '#' },
      { icon: 'fab fa-instagram', href: '#' },
      { icon: 'fab fa-wordpress', href: '#' },
    ]
  };

  return (
    <aside>
      {/* Search Widget */}
      <div className="widget mb-40">
        <div className="widget-title text-center">
          <h4 {...cp('sidebarConfig.searchTitle')}>{t(sidebarConfig.searchTitle)}</h4>
        </div>
        <div className="slidebar__form">
          <form action="#">
            <input 
              type="text" 
              placeholder={t(sidebarConfig.searchPlaceholder)}
            />
            <button><i className="fas fa-search"></i></button>
          </form>
        </div>
      </div>

      {/* Instagram Widget */}
      <div className="widget mb-40">
        <div className="widget-title text-center">
          <h4 {...cp('sidebarConfig.instagramTitle')}>{t(sidebarConfig.instagramTitle)}</h4>
        </div>
        <ul className="widget-insta-post">
          {sidebarConfig.instagramImages.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                <img src={img(item.image)} alt="Instagram post" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Follow Us Widget */}
      <div className="widget mb-40">
        <div className="widget-title text-center">
          <h4 {...cp('sidebarConfig.followUsTitle')}>{t(sidebarConfig.followUsTitle)}</h4>
        </div>
        <div className="widget-social text-center">
          {sidebarConfig.socialLinks.map((link, index) => (
            <a key={index} href={link.href}>
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Categories Widget */}
      <div className="widget mb-40">
        <div className="widget-title text-center">
          <h4 {...cp('sidebarConfig.categoriesTitle')}>{t(sidebarConfig.categoriesTitle)}</h4>
        </div>
        <ul className="cat__list">
          {sidebarConfig.categories.map((category, index) => (
            <li key={index}>
              <a href={category.href}>
                <span {...cp(`sidebarConfig.categories.${index}.name`)}>
                  {t(category.name)}
                </span>
                {' '}
                <span>({category.count})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Feeds Widget */}
      <div className="widget mb-40">
        <div className="widget-title text-center">
          <h4 {...cp('sidebarConfig.feedsTitle')}>{t(sidebarConfig.feedsTitle)}</h4>
        </div>
        <div className="widget__post">
          <ul>
            {sidebarConfig.feeds.map((feed, index) => (
              <li key={index}>
                <div className="widget__post-thumb">
                  <img src={img(feed.image)} alt="Feed post" />
                </div>
                <div className="widget__post-content">
                  <h6>
                    <a href={feed.href} {...cp(`sidebarConfig.feeds.${index}.title`)}>
                      {t(feed.title)}
                    </a>
                  </h6>
                  <span>
                    <i className="far fa-clock"></i>
                    <span {...cp(`sidebarConfig.feeds.${index}.time`)}>{t(feed.time)}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}