import { useForm, Controller } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';
import Input from '@/ui/Input/Input';
import InputFile from '@/ui/InputFile/InputFile';
import Select from '@/ui/Select/Select';

import { useAttributesOptions } from '@/hooks/useAttributesOptions';
import {
  useCreateProductMutation,
  useSetImagesForProductByIdMutation,
} from '@/redux/services/products';
import { addProductSchema, AddProductValues } from '@/utils/validateSchema';

const AddProduct = () => {
  const [createProduct] = useCreateProductMutation();
  const [setImagesForProductById] = useSetImagesForProductByIdMutation();
  const { categoriesOptions, nameToIdMap } = useAttributesOptions();
  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    reset,
    control,
    formState: { isValid, errors },
  } = useForm<AddProductValues>({
    defaultValues: {
      mainImage: { picture: undefined },
      productImages: { picture: undefined },
      isActive: true,
      categoryId: '',
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
      const response = await createProduct({
        categoryId: nameToIdMap[categoryId],
        description,
        isActive,
        name,
        price: Number(price),
        sku,
        stockQuantity: Number(stockQuantity),
      });
      if (response && response.data?.id) {
        const formData = new FormData();
        if (mainImage.picture && productImages.picture) {
          console.log(mainImage.picture, productImages.picture, 'pictures');
          formData.append('MainProductImage', mainImage.picture[0]);
          for (const file of productImages.picture) {
            formData.append('ProductImages', file);
          }
        }
        try {
          await setImagesForProductById({ id: response.data.id, formData });
          reset();
        } catch (error) {
          console.error(error);
        }
      }
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
      <Controller
        control={control}
        name="categoryId"
        render={({ field, fieldState }) => (
          <Select
            placeholder="Категорія"
            value={field.value}
            options={categoriesOptions}
            onChange={(newValue) => field.onChange(newValue)}
            onBlur={field.onBlur}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
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
