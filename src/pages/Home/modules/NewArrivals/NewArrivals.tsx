import Slider from '@/modules/Slider/Slider';

import ProductCard from '../../components/ProductCard/ProductCard';

import { useGetLatestProductQuery } from '@/redux/services/products';

const NewArrivals = () => {
  const { data: latests, isSuccess } = useGetLatestProductQuery();
  return (
    <Slider
      options={{ loop: true, startIndex: 0, align: 'start' }}
      isButton
      variant="product"
    >
      {isSuccess &&
        latests.map((latest) => <ProductCard key={latest.id} {...latest} />)}
    </Slider>
  );
};

export default NewArrivals;
