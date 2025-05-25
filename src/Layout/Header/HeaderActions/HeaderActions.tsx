import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';

import styles from './HeaderActions.module.css';

const HeaderActions = () => {
  return (
    <nav className={styles.icons}>
      <Button
        variant={Variant.Icon}
        icon={<img src="/header/search.svg" width={24} height={24} />}
        className={styles.icon}
      />
      <Button
        variant={Variant.Icon}
        icon={<img src="/header/message.svg" width={24} height={24} />}
        className={styles.icon}
      />
      <Button
        variant={Variant.Icon}
        icon={<img src="/header/cart.svg" width={24} height={24} />}
        className={styles.icon}
      />
      <Button
        variant={Variant.Icon}
        icon={<img src="/header/user.svg" width={24} height={24} />}
        className={styles.icon}
      />
      <LanguageSwitcher />
    </nav>
  );
};

export default HeaderActions;
