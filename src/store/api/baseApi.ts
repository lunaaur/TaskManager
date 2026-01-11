import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Config from 'react-native-config'
import { IUserState } from 'src/features/login/types/types';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: Config.API_URL }),
    endpoints: (builder) => ({
        getUsers: builder.query<IUserState[], void>({
      query: () => "api/users",
    }),
    })
});

export const { useGetUsersQuery } = baseApi;