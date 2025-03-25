import { baseApi } from './baseApi';

// TODO: update interface UserResponse

export interface UserResponse {
  firstName: string;
  lastName: string;
  age: number;
  refreshToken: null;
  refreshTokenExpiryTime: string;
  reviews: [];
  orders: [];
  id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: true;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber: null;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: null;
  lockoutEnabled: true;
  accessFailedCount: number;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<UserResponse[], undefined>({
      query: () => ({
        url: `api/AppUser/`,
      }),
    }),
    getUser: builder.query<UserResponse, string>({
      query: (id) => ({
        url: `api/AppUser/${id}`,
      }),
    }),
    deleteUser: builder.mutation<string, string>({
      query: (id) => ({
        url: `api/AppUser/${id}`,
        method: 'DELETE',
      }),
    }),
    createUser: builder.mutation<UserResponse, string>({
      query: (body) => ({
        url: `api/AppUser/`,
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
} = userApi;
