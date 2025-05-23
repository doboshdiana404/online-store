import { useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import styles from './LanguageSwitcher.module.css';

import { Lang } from '@/i18n/constants';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const isEnglish = useMemo(
    () => i18n.language === Lang.EnglishEn || i18n.language === Lang.EnglishUs,
    [i18n.language]
  );

  const handleOnChange = () => {
    const newLanguage = isEnglish ? Lang.UkraineUa : Lang.EnglishUs;
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={handleOnChange}
      className={styles.button}
      aria-label="Switch language"
    >
      {isEnglish ? 'UA' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
