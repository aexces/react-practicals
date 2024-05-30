import { createSlice } from "@reduxjs/toolkit/react";
import { initialState } from "@/application/theme/themeState";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
