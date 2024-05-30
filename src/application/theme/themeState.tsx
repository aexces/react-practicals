export type ThemeState = {
  theme: "light" | "dark";
};

export const initialState: ThemeState = {
  theme: (localStorage.getItem("theme") as "light" | "dark") || "light",
};
