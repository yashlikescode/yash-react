import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentView: "software", // software | photos
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.currentView =
        state.currentView === "software" ? "photos" : "software";
    },

    setView: (state, action) => {
      state.currentView = action.payload;
    },
  },
});

export const { toggleView, setView } = viewSlice.actions;

export default viewSlice.reducer;
