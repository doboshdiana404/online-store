import { ReviewCardProps } from './components/ReviewCard/types';

export const PRODUCT_FACE = {
  descriptions: [
    'Indulge in the comforting richness of our Crunchy Hazelnut Milk Bar — a handcrafted delight made with velvety milk chocolate and generously loaded with golden roasted hazelnuts. Each bite offers a perfect harmony of creamy sweetness and satisfying crunch, creating a truly irresistible texture.',
    "Crafted in small batches using high-quality, natural ingredients, this bar is a timeless favorite for nut lovers and chocolate enthusiasts alike. Whether you're treating yourself or sharing with someone special, it's the kind of chocolate that turns any moment into a little celebration.",
  ],
  ingredients:
    'Cocoa mass, cocoa butter, whole milk powder, cane sugar, roasted hazelnuts, sunflower lecithin (emulsifier), natural vanilla extract.',
  allergens:
    'Contains milk and hazelnuts. May contain traces of other tree nuts and soy.',
  weight: '80 g',
};

interface Reviews extends ReviewCardProps {
  id: number;
}

export const REVIEW_FACE: Reviews[] = [
  {
    id: 1,
    name: 'Pavlo',
    data: '20.04.2025',
    description: 'These sweets made my day. So delicate and tasty!',
    image: '/reviews/review_01.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophie',
    data: '20.04.2025',
    description:
      'Absolutely delicious! The chocolate is so smooth, and the crunch of the nuts adds the perfect balance. A real treat with every bite.',
    image: '/reviews/review_02.png',
    rating: 4,
  },
  {
    id: 3,
    name: 'Maryna',
    data: '20.04.2025',
    description:
      'I’m in love with this chocolate! Rich flavor, just the right sweetness, and the roasted nuts give it a lovely texture.',
    image: '/reviews/review_03.png',
    rating: 5,
  },
  {
    id: 4,
    name: 'Alex',
    data: '20.04.2025',
    description:
      'This is my new favorite snack. You can really taste the quality — creamy chocolate and fresh, crunchy nuts. Simply perfect.',
    image: '/reviews/review_04.png',
    rating: 5,
  },
  {
    id: 5,
    name: 'Pavlo',
    data: '20.04.2025',
    description: 'These sweets made my day. So delicate and tasty!',
    image: '/reviews/review_01.png',
    rating: 5,
  },
  {
    id: 6,
    name: 'Sophie',
    data: '20.04.2025',
    description:
      'Absolutely delicious! The chocolate is so smooth, and the crunch of the nuts adds the perfect balance. A real treat with every bite.',
    image: '/reviews/review_02.png',
    rating: 4,
  },
  {
    id: 7,
    name: 'Maryna',
    data: '20.04.2025',
    description:
      'I’m in love with this chocolate! Rich flavor, just the right sweetness, and the roasted nuts give it a lovely texture.',
    image: '/reviews/review_03.png',
    rating: 5,
  },
  {
    id: 8,
    name: 'Alex',
    data: '20.04.2025',
    description:
      'This is my new favorite snack. You can really taste the quality — creamy chocolate and fresh, crunchy nuts. Simply perfect.',
    image: '/reviews/review_04.png',
    rating: 5,
  },
];
