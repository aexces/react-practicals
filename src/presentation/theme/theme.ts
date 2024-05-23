import { RootState } from "@/application/state";
import createTheme from "@mui/material/styles/createTheme";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "@/presentation/theme/themeSettings";
import { colorTokens } from "./colorTokens";

export const getStateTheme = () => {
  const mode = useSelector((state: RootState) => state.theme);
  return mode;
};

export const getTheme = () => {
  const themeState = getStateTheme();
  const theme = useMemo(
    () => createTheme(themeSettings(themeState)),
    [themeState]
  );
  return theme;
};

export const getColorTokens = () => {
  const themeState = getStateTheme();
  const colors = colorTokens(themeState);
  return colors;
};

export const getThemeSettings = () => {
  const themeState = getStateTheme();
  const themes = themeSettings(themeState);
  return themes;
};
