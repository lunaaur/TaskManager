import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import { ICompleteTaskApiBody, ICompleteTaskApiResponse, ITaskApiResponse } from 'src/types/task';
import { completeTask, getTasks } from '../slices/tasks/tasks-slice';

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
  tagTypes: ['Task'],
  endpoints: builder => ({
    getTasks: builder.query<ITaskApiResponse, void>({
      query: () => 'api/tasks',
      providesTags: ['Task'],
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
    completeTask: builder.mutation<ICompleteTaskApiResponse, ICompleteTaskApiBody>({
       query: ({id, completed}) => ({
        url: `api/tasks/${id}`,
        method: 'PATCH',
        body: { completed },
       }),
        invalidatesTags: ['Task'],
      async onQueryStarted(args, { dispatch }) {
        try {
          dispatch(completeTask({id: args.id, completed: args.completed}))

        } catch (error: any) {
          console.log(error, 'error ccomplete task')
        }
      }
    })
  }),
});

export const { useGetTasksQuery, useCompleteTaskMutation } = tasksApi;
