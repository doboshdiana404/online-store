import Slider from '@/modules/Slider/Slider';

import ProductCard from '../../components/ProductCard/ProductCard';

import { useGetBestsellersProductQuery } from '@/redux/services/products';

const Bestsellers = () => {
  const { data: bestsellers, isSuccess } = useGetBestsellersProductQuery();
  return (
    <Slider
      options={{ loop: true, startIndex: 0, align: 'start' }}
      isButton
      variant="product"
    >
      {isSuccess &&
        bestsellers.map((bestsellers) => (
          <ProductCard key={bestsellers.id} {...bestsellers} />
        ))}
    </Slider>
  );
};

export default Bestsellers;
