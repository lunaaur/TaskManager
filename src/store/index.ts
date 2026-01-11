
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "src/types/store";
import { baseApi } from "./api/baseApi";

const rootReducer = combineReducers({
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer, 
});

export const store = configureStore({
  reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware),
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
