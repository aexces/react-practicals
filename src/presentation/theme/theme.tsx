import { useSelector } from "react-redux";
import { RootState } from "@/application/store";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
import { useMemo } from "react";

export const getTheme = () => {
  const themeState = useSelector((state: RootState) => state.theme);
  const isLightTheme = themeState.theme == "light";
  const customizedTheme = isLightTheme ? lightTheme : darkTheme;
  const theme = useMemo(() => customizedTheme, [themeState]);
  return theme;
};
