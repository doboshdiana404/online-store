import React, { useState } from 'react';

import { ImageProps } from './types';

import fallbackImg from '@/assets/example/example.png';

// const baseURLApi = import.meta.env.VITE_API_BASE_URL;
const baseURLApi = 'http://craft-sweets.runasp.net/';
const generateImageUrl = (baseURLApi: string, id: string, type: string) =>
  `${baseURLApi}images/${id}-${type}.webp`;

const Image: React.FC<ImageProps> = ({
  id,
  alt,
  width,
  height,
  loading = 'lazy',
  ...props
}) => {
  const [error, setError] = useState(false);

  const mobileSrc = generateImageUrl(baseURLApi, id, 'mobile');
  const tabletSrc = generateImageUrl(baseURLApi, id, 'tablet');
  const desktopSrc = generateImageUrl(baseURLApi, id, 'desktop');

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
