import { useParams } from 'react-router-dom';

import { skipToken } from '@reduxjs/toolkit/query';

import EditCategory from '@/modules/Forms/EditCategory';

import { useGetCategoryByIdQuery } from '@/redux/services/category';

const EditCategoryById = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { data: category, isSuccess } = useGetCategoryByIdQuery(
    categoryId ?? skipToken
  );
  return (
    <section>
      <h2>Edit Category</h2>
      {isSuccess && <EditCategory {...category} />}
    </section>
  );
};

export default EditCategoryById;
