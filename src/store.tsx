import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import testReducer from "./features/test/testSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    test: testReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectStore = (state: RootState) => state;
