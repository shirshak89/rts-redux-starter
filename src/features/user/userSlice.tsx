import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
