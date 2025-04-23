import React, { useState } from 'react';

import { ImageProps } from './types';

import fallbackImg from '@/assets/example/example.png';
import { generateImageUrl } from '@/utils/generateImageUrl';

const Image: React.FC<ImageProps> = ({
  id,
  alt,
  width,
  height,
  loading = 'lazy',
  ...props
}) => {
  const [error, setError] = useState(false);

  const mobileSrc = generateImageUrl(id, 'mobile');
  const tabletSrc = generateImageUrl(id, 'tablet');
  const desktopSrc = generateImageUrl(id, 'desktop');

  return (
    <picture>
      {!error && <source srcSet={mobileSrc} media="(max-width: 766px)" />}
      {!error && <source srcSet={tabletSrc} media="(max-width: 1024px)" />}
      {!error && <source srcSet={desktopSrc} media="(min-width: 1025px)" />}
      <img
        id={id}
        src={error ? fallbackImg : mobileSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onError={() => setError(true)}
        {...props}
      />
    </picture>
  );
};

export default Image;
