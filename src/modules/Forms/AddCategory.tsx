import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';
import Input from '@/ui/Input/Input';
import InputFile from '@/ui/InputFile/InputFile';

import { useCreateCategoryMutation } from '@/redux/services/category';
import { addCategorySchema, AddCategoryValues } from '@/utils/validateSchema';

const AddCategory = () => {
  const [createCategory] = useCreateCategoryMutation();
  const {
    register,
    handleSubmit,
    resetField,
    reset,
    setValue,
    formState: { isValid, errors },
  } = useForm<AddCategoryValues>({
    defaultValues: {
      image: { picture: undefined },
    },
    resolver: zodResolver(addCategorySchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: AddCategoryValues) => {
    try {
      const { description, image, name } = data;
      const formData = new FormData();
      if (image.picture) {
        formData.append('Image', image.picture[0]);
      }
      formData.append('Name', name);
      formData.append('Description', description);
      await createCategory(formData);
      reset();
    } catch (error) {
      const { data } = error as { data: string };
      console.log(data);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('name')}
        placeholder="Назва категорії"
        type="text"
        errorMessage={errors.name?.message}
      />
      <Input
        {...register('description')}
        placeholder="Опис категорії"
        type="text"
        errorMessage={errors.description?.message}
      />
      <InputFile
        {...register('image.picture')}
        placeholder="Додати фото"
        errorMessage={errors.image?.picture?.message}
        onReset={() => resetField('image')}
        onClean={() => setValue('image', { picture: undefined })}
      />
      <Button
        type="submit"
        variant={Variant.Basic}
        text="Додати"
        disabled={!isValid}
      />
    </form>
  );
};

export default AddCategory;
