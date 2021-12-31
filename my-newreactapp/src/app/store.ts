import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./services/user.service"

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    counter: counterReducer
  },
  middleware: (getDefaultMiddiware) =>
    getDefaultMiddiware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


