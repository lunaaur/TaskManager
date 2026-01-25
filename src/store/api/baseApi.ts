import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import { IUserInfoState, IUserState } from 'src/features/login/types/types';
import { handleUserRegisterError } from '../helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveUserData, clearUserData } from '../slices/user/user-slice';
import { IUserApiBody, IUserApiResponse } from 'src/types/user';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
    prepareHeaders: async headers => {
      const token = await AsyncStorage.getItem('userToken');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    getUser: builder.query<IUserInfoState, void>({
      query: () => 'api/users/user',
      providesTags: ['User'],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            saveUserData({
              ...data.user,
              isAuthenticated: true,
            }),
          );
        } catch (error: any) {
          console.error('Failed to get user:', error);

          if (error?.status === 401) {
            dispatch(clearUserData());
            await AsyncStorage.removeItem('userToken');
          }
        }
      },
    }),

    getUsers: builder.query<IUserState[], void>({
      query: () => 'api/users',
    }),

    registerUser: builder.mutation<IUserApiResponse, IUserApiBody>({
      query: userBody => ({
        url: 'api/users/register',
        method: 'POST',
        body: userBody,
      }),
      transformErrorResponse: (response: FetchBaseQueryError) => {
        return handleUserRegisterError(response);
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.token) {
            await AsyncStorage.setItem('userToken', data.token);
          }

          dispatch(
            saveUserData({
              ...data.user,
              isAuthenticated: true,
            }),
          );

          dispatch(baseApi.util.invalidateTags(['User']));
        } catch (error) {
          console.error('Registration failed:', error);
        }
      },
    }),

    loginUser: builder.mutation<IUserApiResponse, IUserApiBody>({
      query: userBody => ({
        url: 'api/users/login',
        method: 'POST',
        body: userBody,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          if (data.token) {
            await AsyncStorage.setItem('userToken', data.token);
          }

          dispatch(
            saveUserData({
              ...data.user,
              isAuthenticated: true,
            }),
          );

          dispatch(baseApi.util.invalidateTags(['User']));
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
    }),
    logoutUser: builder.mutation<{ success: boolean }, void>({
      queryFn: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
          return { data: { success: true } };
        } catch {
          return { data: { success: false } };
        }
      },
      async onQueryStarted(_, { dispatch }) {
        dispatch(clearUserData());

        dispatch(baseApi.util.invalidateTags(['User']));
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useRegisterUserMutation,
  useGetUserQuery,
  useLoginUserMutation,
  useLogoutUserMutation,
} = baseApi;
