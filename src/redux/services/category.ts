import { baseApi } from './baseApi';

// TODO: update interface Category

export interface Category {
  id: string;
  name: string;
  description: string;
}

export type CategoryCreate = Omit<Category, 'id'>;

export interface CategoryEdit extends Partial<CategoryCreate> {
  id: string;
}

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], undefined>({
      query: () => ({
        url: `/categories`,
      }),
    }),
    getCategoryById: builder.query<Category, string>({
      query: (id) => ({
        url: `/categories/${id}`,
      }),
    }),
    deleteCategory: builder.mutation<string, string>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: 'DELETE',
      }),
    }),
    createCategory: builder.mutation<Category, CategoryCreate>({
      query: (body) => ({
        url: `/categories`,
        method: 'POST',
        body,
      }),
    }),
    editCategory: builder.mutation<Category, CategoryEdit>({
      query: ({ id, ...body }) => ({
        url: `/categories/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCategoryByIdQuery,
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
} = categoryApi;
