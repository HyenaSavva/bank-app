import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cardSlice } from "entities/card";
import { baseApi } from "shared/api";

const rootReducer = combineReducers({
  [cardSlice.name]: cardSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;