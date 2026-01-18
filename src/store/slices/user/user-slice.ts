import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from 'src/features/login/types/types';

const initialState: IUserState = {
  id: null,
  name: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { saveUserData } = userSlice.actions;


export default userSlice.reducer;
