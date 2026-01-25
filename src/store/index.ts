
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "src/types/store";
import { baseApi } from "./api/baseApi";
import { tasksApi } from "./api/tasksApi";

const rootReducer = combineReducers({
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  });

export const store = configureStore({
  reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(tasksApi.middleware),
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
