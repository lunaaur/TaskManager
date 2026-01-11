import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from 'src/features/login/types/types';

const initialState: IUserState = {
  name: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
