import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import customFetch from "../../utils/axios";

const initialState = {
  count: 0,
  isLoading: false,
  users: [],
};

export const getUsers = createAsyncThunk(
  "test/getUsers",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/user");
      return resp.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(error);
      }
    }
  }
);

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increase: (state) => {
      state.count = state.count + 1;
    },
    decrease: (state) => {
      state.count = state.count - 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { increase, decrease } = testSlice.actions;
export default testSlice.reducer;
