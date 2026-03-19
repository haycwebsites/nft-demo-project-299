import { useHayc } from '../hayc/config-context';

export default function BlogSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <div className="blog__btn">
      <a href={config.blogConfig.buttonUrl} className="btn" {...cp('blogConfig.buttonText')}>
        {t(config.blogConfig.buttonText)}
      </a>
    </div>
  );
}