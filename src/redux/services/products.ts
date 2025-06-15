/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { baseApi } from './baseApi';

// TODO: update interface Products
export interface Product {
  id: string;
  name: string;
  mainImageName: string;
  sortDescription: string;
  price: number;
  isActive: boolean;
  mainImageBaseName: string;
  rating: number;
  views: number;
  favoritesCount: number;
  reviewCount: number;
  popularityScore: number;
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

// interface ProjectsInitialPageParam {
//   page: number;
//   size: number;
// }
export interface ProductById {
  id: string;
  name: string;
  description: string;
  price: number;
  mainProductImage: string;
  productImages: string[];
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
  sku: string;
  isActive: boolean;
  stockQuantity: number;
  categoryId: string;
}

export interface ProductResponse {
  id: string;
}

export interface ProductCreateWithImage {
  id: string;
  formData: FormData;
}

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // TODO: fix infinity scrolling
    // getAllProductsInfinity: builder.infiniteQuery<
    //   ProductsList,
    //   ProductsListArgs,
    //   ProjectsInitialPageParam
    // >({
    //   infiniteQueryOptions: {
    //     initialPageParam: {
    //       page: 1,
    //       size: 8,
    //     },
    //     getNextPageParam: (lastPage, allPages, lastPageParam) => {
    //       const nextPage = lastPageParam.page + 1;
    //       const remainingPages =
    //         lastPage?.totalItems - (lastPage?.skip + lastPage?.take);

    //       if (remainingPages <= 0) {
    //         return undefined;
    //       }

    //       return {
    //         ...lastPageParam,
    //         page: nextPage,
    //       };
    //     },
    //   },
    //   query: ({
    //     pageParam: { page, size },
    //     queryArg: {
    //       categoryId,
    //       sortBy,
    //       sortDirection,
    //       searchQuery,
    //       maxPrice,
    //       minPrice,
    //       isActive,
    //     },
    //   }) => ({
    //     url: `/products?PageNumber=${page}&PageSize=${size}&CategoryId=${categoryId}&SortBy=${sortBy}&SortDirection=${sortDirection}&SearchQuery=${searchQuery}&MinPrice=${minPrice}&MaxPrice=${maxPrice}&IsActive=${isActive}`,
    //   }),
    // }),
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
    getBestsellersProduct: builder.query<Product[], void>({
      query: () => `/products/bestsellers`,
    }),
    getPopularProduct: builder.query<Product[], void>({
      query: () => `/products/popular`,
    }),
    getLatestProduct: builder.query<Product[], void>({
      query: () => `/products/latest`,
    }),
    deleteProduct: builder.mutation<string, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
    createProduct: builder.mutation<ProductResponse, ProductCreate>({
      query: (body) => ({
        url: `/products`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Product'],
    }),
    editProduct: builder.mutation<Product, Product>({
      query: ({ id, ...body }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Product'],
    }),
    setImagesForProductById: builder.mutation<
      ProductResponse,
      ProductCreateWithImage
    >({
      query: ({ id, formData }) => ({
        url: `/products/${id}/images`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Product'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductByIdQuery,
  useGetAllProductsQuery,
  useGetBestsellersProductQuery,
  useGetLatestProductQuery,
  useGetPopularProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
  useSetImagesForProductByIdMutation,
  // useGetAllProductsInfinityInfiniteQuery,
} = categoryApi;
