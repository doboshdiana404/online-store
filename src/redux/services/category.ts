import { baseApi } from './baseApi';

// TODO: update interface Category

export interface Category {
  id: string;
  name: string;
  description: string;
  imageName: string;
}

export interface CategoryCreate extends Omit<Category, 'id' | 'imageName'> {
  image: string;
}

export interface CategoryEdit {
  body: FormData;
  id: string;
}

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], undefined>({
      query: () => ({
        url: `/categories`,
      }),
      providesTags: ['Category'],
    }),
    getCategoryById: builder.query<Category, string>({
      query: (id) => ({
        url: `/categories/${id}`,
      }),
      providesTags: ['Category'],
    }),
    deleteCategory: builder.mutation<string, string>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Category'],
    }),
    createCategory: builder.mutation<Category, FormData>({
      query: (body) => ({
        url: `/categories`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Category'],
    }),
    editCategory: builder.mutation<Category, CategoryEdit>({
      query: ({ id, body }) => ({
        url: `/categories/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Category'],
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
