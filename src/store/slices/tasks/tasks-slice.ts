import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasksData',
  initialState,
  reducers: {
    getTasks: (state, action) => {
      state.count = action.payload.count;
      state.tasks = action.payload.tasks;
    },
  },
});

export const { getTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
