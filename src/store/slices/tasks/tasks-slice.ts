import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITaskState } from 'src/types/task';

export interface ITasksState {
  count: number;
  tasks: ITaskState[];
}

const initialState: ITasksState = {
  count: 0,
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasksData',
  initialState,
  reducers: {
    getTasks: (
      state,
      action: PayloadAction<{ count: number; tasks: ITaskState[] }>,
    ) => {
      state.count = action.payload.count;
      state.tasks = action.payload.tasks;
    },
    completeTask: (
      state,
      action: PayloadAction<{ id: number; completed: boolean }>,
    ) => {
      const tasks = state.tasks;
      const modifiedTasks = tasks.map((task: ITaskState) => {
        if (task.id && task.id === action.payload.id) {
          return { ...task, completed: action.payload.completed };
        } else return task;
      });
      state.tasks = modifiedTasks;
    },
  },
});

export const { getTasks, completeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
