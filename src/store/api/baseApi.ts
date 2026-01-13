import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import { IUserState } from 'src/features/login/types/types';
import { IUserApiBody, IUserApiResponse } from 'src/types/store';
import { handleUserRegisterError } from '../helpers';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: Config.API_URL }),
  endpoints: builder => ({
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
        console.log(response, 'transformErrorResponse')
        return handleUserRegisterError(response);
      },
    }),
  }),
});

export const { useGetUsersQuery, useRegisterUserMutation } = baseApi;
