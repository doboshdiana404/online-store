import { baseApi } from './baseApi';

// TODO: update interface Review

export interface ProductReview {
  id: string;
}

export interface Reviews {
  id: string;
}

export interface ReviewCreate {
  rating: number;
  comment: string;
  productId: string;
  userId: string;
}

export interface ReviewEdit {
  id: string;
}

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReviewByProductId: builder.query<ProductReview, string>({
      query: (id) => ({
        url: `/reviews/products/${id}`,
      }),
      providesTags: ['Review'],
    }),
    getReviewsById: builder.query<Reviews, string>({
      query: (id) => ({
        url: `/reviews/${id}`,
      }),
      providesTags: ['Review'],
    }),
    deleteReview: builder.mutation<string, string>({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Review'],
    }),
    createReview: builder.mutation<ReviewCreate, ReviewCreate>({
      query: (body) => ({
        url: `/reviews`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Review'],
    }),
    editReview: builder.mutation<ReviewEdit, ReviewEdit>({
      query: ({ id, ...body }) => ({
        url: `/reviews/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Review'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useEditReviewMutation,
  useGetReviewByProductIdQuery,
  useGetReviewsByIdQuery,
} = reviewApi;
