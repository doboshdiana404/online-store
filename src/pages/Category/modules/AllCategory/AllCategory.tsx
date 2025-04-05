import Category from '../../components/Category/Category';

import { useGetAllCategoriesQuery } from '@/redux/services/category';

const AllCategory = () => {
  const {
    data: categoryAll,
    isSuccess,
    isLoading,
    isFetching,
  } = useGetAllCategoriesQuery(undefined);
  return (
    <section>
      <h2>All category</h2>
      {isFetching || (isLoading && <p>Loading...</p>)}
      {isSuccess &&
        categoryAll.map((category) => (
          <Category key={category.id} {...category} />
        ))}
    </section>
  );
};

export default AllCategory;
