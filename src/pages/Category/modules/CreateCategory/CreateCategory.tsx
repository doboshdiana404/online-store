import { useState } from 'react';

import { useCreateCategoryMutation } from '@/redux/services/category';

const CreateCategory = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [createCategory] = useCreateCategoryMutation();
  const createNewCategory = () => {
    createCategory({ description, name, image: '' });
    setDescription('');
    setName('');
  };
  return (
    <section>
      <h2>Create Category</h2>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="button" onClick={createNewCategory}>
          Create Category
        </button>
      </form>
    </section>
  );
};

export default CreateCategory;
