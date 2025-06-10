import { FC, useCallback } from 'react';

import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';

import styles from './Slider.module.css';
import { SliderProps } from './types';

const Slider: FC<SliderProps> = ({
  options,
  children,
  isButton = false,
  variant = 'product',
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const sliderCN = clsx(styles.slider, styles[variant]);
  const emblaCN = clsx(styles.embla, styles[variant]);
  const emblaContainerCN = clsx(styles['embla__container'], styles[variant]);
  return (
    <div className={sliderCN}>
      <div className={emblaCN} ref={emblaRef}>
        <div className={emblaContainerCN}>{children}</div>
      </div>
      {isButton && (
        <>
          <Button
            variant={Variant.Slider}
            onClick={scrollNext}
            className={`${styles.button} ${styles.next}`}
            icon={
              <svg className={styles.icon}>
                <use href="/sprite.svg#icon-arrow" />
              </svg>
            }
          />
          <Button
            variant={Variant.Slider}
            onClick={scrollPrev}
            className={`${styles.button} ${styles.prev}`}
            icon={
              <svg className={styles.icon}>
                <use href="/sprite.svg#icon-arrow" />
              </svg>
            }
          />
        </>
      )}
    </div>
  );
};

export default Slider;
