import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
};

export const documentSlice = createSlice({
  name: "addUserId",
  initialState,
  reducers: {
    addUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { addUserId } = documentSlice.actions;

export const store = configureStore({
  reducer: {
    userId: documentSlice,
  },
});

export default documentSlice.reducer;
