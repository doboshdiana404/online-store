import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';
import Input from '@/ui/Input/Input';
import InputFile from '@/ui/InputFile/InputFile';

import { useCreateProductMutation } from '@/redux/services/products';
import { addProductSchema, AddProductValues } from '@/utils/validateSchema';

const AddProduct = () => {
  const [createProduct] = useCreateProductMutation();
  const {
    register,
    handleSubmit,
    resetField,
    reset,
    setValue,
    formState: { isValid, errors },
  } = useForm<AddProductValues>({
    defaultValues: {
      mainImage: { picture: undefined },
      productImages: { picture: undefined },
      isActive: true,
    },
    resolver: zodResolver(addProductSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: AddProductValues) => {
    try {
      const {
        description,
        categoryId,
        isActive,
        mainImage,
        price,
        productImages,
        sku,
        stockQuantity,
        name,
      } = data;
      const formData = new FormData();
      if (mainImage.picture && productImages.picture) {
        console.log(mainImage.picture, productImages.picture, 'pictures');
        formData.append('MainProductImage', mainImage.picture[0]);
        for (const file of productImages.picture) {
          formData.append('ProductImages', file);
        }
      }
      formData.append('Name', name);
      formData.append('Description', description);
      formData.append('Price', price);
      formData.append('Description', description);
      formData.append('Sku', sku);
      formData.append('IsActive', String(isActive));
      formData.append('StockQuantity', stockQuantity);
      formData.append('CategoryId', categoryId);

      await createProduct(formData);
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
        placeholder="Назва продукту"
        type="text"
        errorMessage={errors.name?.message}
      />
      <Input
        {...register('description')}
        placeholder="Опис продукту"
        type="text"
        errorMessage={errors.description?.message}
      />
      <Input
        {...register('price')}
        placeholder="Ціна"
        type="text"
        errorMessage={errors.price?.message}
      />
      <Input
        {...register('sku')}
        placeholder="SKU"
        type="text"
        errorMessage={errors.sku?.message}
      />
      <Input
        {...register('stockQuantity')}
        placeholder="Доступна кількість"
        type="text"
        errorMessage={errors.stockQuantity?.message}
      />
      <Input
        {...register('categoryId')}
        placeholder="Id категорії"
        type="text"
        errorMessage={errors.categoryId?.message}
      />
      <InputFile
        {...register('mainImage.picture')}
        placeholder="Головне фото"
        errorMessage={errors.mainImage?.picture?.message}
        onReset={() => resetField('mainImage')}
        onClean={() => setValue('mainImage', { picture: undefined })}
      />
      <InputFile
        {...register('productImages.picture')}
        placeholder="Інші фото"
        multiple
        errorMessage={errors.productImages?.picture?.message}
        onReset={() => resetField('productImages')}
        onClean={() => setValue('productImages', { picture: undefined })}
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

export default AddProduct;
