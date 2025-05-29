import Slider from '@/modules/Slider/Slider';

import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { CATEGORY_LIST } from '../../data';

const CategoryList = () => {
  return (
    <Slider
      variant="category"
      options={{
        startIndex: 0,
        active: true,
        align: 'start',
        breakpoints: { '(min-width: 570px)': { active: false } },
      }}
    >
      {CATEGORY_LIST.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </Slider>
  );
};

export default CategoryList;
