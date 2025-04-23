import { TFunction } from 'i18next';
import { z } from 'zod';

const accept = z.boolean().refine((data) => data === true);
// const acceptB = z.boolean();
// const getPhone = (t: TFunction<'translation', undefined>) => {
//   return z
//     .string()
//     .regex(/^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, t?.('forms-error.phone'));
// };
const getEmail = (t: TFunction<'translation', undefined>) => {
  return z
    .string()
    .min(1, { message: t?.('forms-error.email.required') })
    .max(30, { message: t?.('forms-error.email.max') })
    .email({ message: t?.('forms-error.email.email') });
};
const getPassword = (t: TFunction<'translation', undefined>) => {
  return z
    .string()
    .min(1, { message: t?.('forms-error.password.required') })
    .regex(/^(?!.*\s).+$/, { message: t?.('forms-error.password.space') })
    .regex(/^(?=.*[a-zа-я])/, {
      message: t?.('forms-error.password.lower-letter'),
    })
    .regex(/^(?=.*[A-ZА-Я])/, {
      message: t?.('forms-error.password.upper-letter'),
    })
    .regex(/^(?=.*[0-9])/, { message: t?.('forms-error.password.number') })
    .min(8, { message: t?.('forms-error.password.min') })
    .max(12, { message: t?.('forms-error.password.max') });
};
const getFirstName = (t: TFunction<'translation', undefined>) => {
  return z
    .string()
    .min(1, { message: t?.('forms-error.first-name.required') })
    .regex(/^[A-ZА-ЯІЇЄ]/, { message: t?.('forms-error.first-name.upper') })
    .min(4, { message: t?.('forms-error.first-name.min') })
    .max(20, { message: t?.('forms-error.first-name.max') });
};
const getLastName = (t: TFunction<'translation', undefined>) => {
  return z
    .string()
    .min(1, { message: t?.('forms-error.last-name.required') })
    .regex(/^[A-ZА-ЯІЇЄ]/, { message: t?.('forms-error.last-name.upper') })
    .min(4, { message: t?.('forms-error.last-name.min') })
    .max(20, { message: t?.('forms-error.last-name.max') });
};

export const getLoginSchema = (t: TFunction<'translation', undefined>) => {
  return z.object({
    email: getEmail(t),
    password: getPassword(t),
  });
};
export type LoginValues = z.infer<ReturnType<typeof getLoginSchema>>;

export const getResetPasswordSchema = (
  t: TFunction<'translation', undefined>
) => {
  return z.object({
    email: getEmail(t),
  });
};
export type ResetPasswordValues = z.infer<
  ReturnType<typeof getResetPasswordSchema>
>;
export const getRegisterSchema = (t: TFunction<'translation', undefined>) => {
  return z
    .object({
      firstName: getFirstName(t),
      lastName: getLastName(t),
      email: getEmail(t),
      confirmEmail: getEmail(t),
      password: getPassword(t),
      accept: accept,
    })
    .refine((data) => data.confirmEmail === data.email, {
      path: ['confirmEmail'],
      message: t?.('forms-error.email-confirm'),
    });
};

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const MIN_UPLOAD_SIZE = 1024 * 50; // 50KB
const ACCEPTED_FILE_TYPES = ['image/webp'];

export const pictureSchema = z.object({
  picture: z
    .instanceof(FileList)
    .optional()
    .refine((file) => {
      return file?.length ? file[0].size >= MIN_UPLOAD_SIZE : false;
    }, 'File size must be at least 50KB')
    .refine((file) => {
      return file?.length ? file[0].size <= MAX_UPLOAD_SIZE : false;
    }, 'File size must be less than 3MB')
    .refine((file) => {
      return file?.length ? ACCEPTED_FILE_TYPES.includes(file[0].type) : false;
    }, 'File must be a WEBP'),
});

export type PictureValues = z.infer<typeof pictureSchema>;

export const addCategorySchema = z.object({
  name: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(3, 'Мінімум 3 символи.'),
  description: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(3, 'Мінімум 3 символи.'),
  image: pictureSchema,
});
export type AddCategoryValues = z.infer<typeof addCategorySchema>;

export const editCategorySchema = addCategorySchema.extend({
  picture: pictureSchema,
});
export type EditCategoryValues = z.infer<typeof editCategorySchema>;

export const addProductSchema = z.object({
  name: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(3, 'Мінімум 3 символи.'),
  description: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(3, 'Мінімум 3 символи.'),
  mainImage: pictureSchema,
  productImages: pictureSchema,
  price: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{1,5}(,\d{2})?$/, 'Введіть коректну ціну'),
  isActive: accept,
  stockQuantity: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{1,5}$/, 'Введіть коректну кількісь'),
  categoryId: z.string({
    required_error: 'Це поле є обов`язковим.',
    invalid_type_error: 'Це поле є обов`язковим.',
  }),
  // .array()
  // .nonempty({ message: 'Мінімум одна категорія' }),
  sku: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^[A-Za-z0-9]{10,12}$/, 'має бути такого формату XXXXXXXXXX'),
});
export type AddProductValues = z.infer<typeof addProductSchema>;
