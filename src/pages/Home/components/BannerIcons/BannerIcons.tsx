import BannerIcon from './BannerIcon';
import styles from './BannerIcons.module.css';
import { BANNER_ICONS } from './data';

const BannerIcons = () => {
  return (
    <>
      <img
        className={styles.box}
        src="/banner/icons/candy__box.svg"
        width={368}
        height={368}
        alt="icon box"
      />
      {BANNER_ICONS.map((icon) => (
        <BannerIcon key={icon.img} {...icon} />
      ))}
    </>
  );
};

export default BannerIcons;
