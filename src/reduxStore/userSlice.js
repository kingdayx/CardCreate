import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: "",
  },
  reducers: {
    addUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { addUserId } = userSlice.actions;

export const selectUserId = (state) => state.user.userId;

export default userSlice.reducer;
