import { useState, useEffect, useCallback, type FC } from 'react';

import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import Image from '@/components/Image/Image';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';

import { Thumb } from './components/Thumb/Thumb';
import styles from './ProductSlider.module.css';

type ProductSliderProps = {
  slides: string[];
  options?: EmblaOptionsType;
};

const ProductSlider: FC<ProductSliderProps> = ({ slides, options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) {
      emblaMainApi.scrollPrev();
      console.log('prev');
    }
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on('select', onSelect).on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className={styles.embla}>
      <div className={styles['embla-thumbs']}>
        <div className={styles['embla-thumbs__viewport']} ref={emblaThumbsRef}>
          <div className={styles['embla-thumbs__container']}>
            {slides.map((image, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                image={image}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.embla__viewport} ref={emblaMainRef}>
          <div className={styles.embla__container}>
            {slides.map((index) => (
              <div className={styles.embla__slide} key={index}>
                <Image id={index} alt="image for product" />
              </div>
            ))}
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
