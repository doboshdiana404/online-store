import { FC, useRef, useState } from 'react';

import styles from './Category.module.css';

import {
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  type Category,
} from '@/redux/services/category';

const Category: FC<Category> = ({ description, id, name, imageUrl }) => {
  const [isEdit, setIsEdit] = useState(false);
  const refName = useRef<HTMLInputElement | null>(null);
  const refDescription = useRef<HTMLTextAreaElement | null>(null);
  const [editCategory] = useEditCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const deleteCategoryById = () => deleteCategory(id);

  const editCategoryById = () => {
    const editName = refName.current?.value;
    const editDescription = refDescription.current?.value;
    if (editName && editDescription) {
      editCategory({ id, name: editName, description: editDescription });
    }
    setIsEdit(false);
  };
  return (
    <section className={styles.category}>
      <img
        src={imageUrl}
        alt={`image for ${name}`}
        width={200}
        height={200}
        loading="lazy"
      />
      <form>
        <div className={styles.inputs}>
          <input
            type="text"
            disabled={!isEdit}
            ref={refName}
            defaultValue={name}
          />
          <textarea
            rows={3}
            disabled={!isEdit}
            ref={refDescription}
            defaultValue={description}
          />
        </div>
        <div className={styles.action}>
          {isEdit ? (
            <button type="button" onClick={editCategoryById}>
              Save
            </button>
          ) : (
            <button type="button" onClick={deleteCategoryById}>
              Delete
            </button>
          )}
          <button type="button" onClick={() => setIsEdit(!isEdit)}>
            {isEdit ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Category;
