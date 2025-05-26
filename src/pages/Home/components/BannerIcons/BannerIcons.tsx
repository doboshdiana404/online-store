import BannerIcon from './BannerIcon';
import styles from './BannerIcons.module.css';
import { BANNER_ICONS } from './data';

const BannerIcons = () => {
  return (
    <div className={styles.icons}>
      <img
        className={styles.box}
        src="/banner/icons/candy__box.svg"
        width={113}
        height={113}
        alt="icon box"
      />
      {BANNER_ICONS.map((icon) => (
        <BannerIcon key={icon.img} {...icon} />
      ))}
    </div>
  );
};

export default BannerIcons;
