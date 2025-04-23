import { FC } from 'react';

import { Link } from 'react-router-dom';

import Image from '@/components/Image/Image';

import styles from './Category.module.css';

import {
  useDeleteCategoryMutation,
  type Category,
} from '@/redux/services/category';
const Category: FC<Category> = ({ description, id, name, imageName }) => {
  const [deleteCategory] = useDeleteCategoryMutation();
  const deleteCategoryById = () => deleteCategory(id);

  return (
    <section className={styles.category}>
      <Image
        id={imageName}
        alt={`image for ${name}`}
        width={200}
        height={200}
      />
      <div className={styles.inputs}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <div className={styles.action}>
        <button type="button" onClick={deleteCategoryById}>
          Delete
        </button>
        <Link to={`/category/edit/${id}`}>Edit</Link>
      </div>
    </section>
  );
};

export default Category;
