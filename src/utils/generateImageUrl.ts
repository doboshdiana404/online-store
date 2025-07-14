const baseURLApi = import.meta.env.VITE_API_BASE_URL;

export const generateImageUrl = (
  id: string,
  type: 'mobile' | 'tablet' | 'desktop'
) => {
  const imageId = id.endsWith('.webp') ? id.slice(0, -5) : id;
  return `${baseURLApi}images/${imageId}-${type}.webp`;
};
