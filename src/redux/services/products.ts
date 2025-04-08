import { baseApi } from './baseApi';

// TODO: update interface Products
export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  sortDescription: string;
  price: number;
  isActive: boolean;
}

export interface ProductsList {
  items: Product[];
  totalItems: number;
  skip: number;
  take: number;
}

export interface ProductsListArgs {
  searchQuery?: string;
  categoryId?: string;
  isActive?: string;
  minPrice?: string;
  maxPrice?: string;
  pageNumber?: number | string;
  pageSize?: number | string;
  sortBy?: string;
  sortDirection?: string;
}

export interface ProductById {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  sku: string;
  rating: number;
  stockQuantity: number;
  isActive: boolean;
  reviews: [];
  categoryId: string;
}

export interface ProductCreate {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  sky: string;
  stockQuantity: string;
  categoryId: string;
  isActive: boolean;
}

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsList, ProductsListArgs>({
      query: ({
        pageNumber = 1,
        pageSize = 8,
        categoryId,
        sortBy,
        sortDirection,
        searchQuery,
        maxPrice,
        minPrice,
        isActive,
      }) => ({
        url: `/products?PageNumber=${pageNumber}&PageSize=${pageSize}&CategoryId=${categoryId}&SortBy=${sortBy}&SortDirection=${sortDirection}&SearchQuery=${searchQuery}&MinPrice=${minPrice}&MaxPrice=${maxPrice}&IsActive=${isActive}`,
      }),
      providesTags: ['Product'],
    }),
    getProductById: builder.query<ProductById, string>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    deleteProduct: builder.mutation<string, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
    createProduct: builder.mutation<Product, ProductCreate>({
      query: (body) => ({
        url: `/categories`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Product'],
    }),
    editProduct: builder.mutation<Product, Product>({
      query: ({ id, ...body }) => ({
        url: `/categories/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Product'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductByIdQuery,
  useGetAllProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} = categoryApi;
