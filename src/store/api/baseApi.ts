import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import { IUserInfoState, IUserState } from 'src/features/login/types/types';
import { IUserApiBody, IUserApiResponse } from 'src/types/store';
import { handleUserRegisterError } from '../helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveUserData } from '../slices/user/user-slice';

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
  endpoints: builder => ({
    getUser: builder.query<IUserInfoState, void>({
      query: () => 'api/users/user',
       async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(saveUserData(data));
        } catch (error) {
          console.error('Failed to get user:', error);
        }
      },
    }),
    getUsers: builder.query<IUserState[], void>({
      query: () => 'api/users',
    }),
    registerUser: builder.mutation<IUserApiResponse, IUserApiBody>({
      query: user => ({
        url: 'api/users/register',
        method: 'POST',
        body: user,
      }),
      transformErrorResponse: (response: FetchBaseQueryError) => {
        return handleUserRegisterError(response);
      },
    }),
  }),
});

export const { useGetUsersQuery, useRegisterUserMutation, useGetUserQuery } =
  baseApi;
