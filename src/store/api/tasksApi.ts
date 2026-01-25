import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import { ITaskApiResponse } from 'src/types/task';
import { getTasks } from '../slices/tasks/tasks-slice';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
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
  tagTypes: ['Tasks'],
  endpoints: builder => ({
    getTasks: builder.query<ITaskApiResponse, void>({
      query: () => 'api/tasks',
      providesTags: ['Tasks'],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            getTasks({
              count: data.count,
              tasks: data.tasks,
            }),
          );
        } catch (error: any) {
          console.error('Failed to get tasks:', error);
        }
      },
    }),
  }),
});

export const { useGetTasksQuery } = tasksApi;
