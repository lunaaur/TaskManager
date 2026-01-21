import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from 'src/features/login/types/types';

const initialState: IUserState = {
  id: null,
  name: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isAuthenticated = true;
    },
    clearUserData: (state) => {
      state.id = null;
      state.name = null;
      state.isAuthenticated = false;

    },
  },
});

export const { saveUserData, clearUserData } = userSlice.actions;


export default userSlice.reducer;
