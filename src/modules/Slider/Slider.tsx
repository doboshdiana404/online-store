import { FC, useCallback } from 'react';

import useEmblaCarousel from 'embla-carousel-react';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';

import styles from './Slider.module.css';
import { SliderProps } from './types';

const Slider: FC<SliderProps> = ({ options, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.slider}>
      <div className={styles['embla']} ref={emblaRef}>
        <div className={styles['embla__container']}>{children}</div>
      </div>
      <Button
        variant={Variant.Slider}
        onClick={scrollNext}
        className={`${styles.button} ${styles.next}`}
        icon={<img src="/arrow.svg" width={8} height={21} />}
      />
      <Button
        variant={Variant.Slider}
        onClick={scrollPrev}
        className={`${styles.button} ${styles.prev}`}
        icon={<img src="/arrow.svg" width={8} height={21} />}
      />
    </div>
  );
};

export default Slider;
