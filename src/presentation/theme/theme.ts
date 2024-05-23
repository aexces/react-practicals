import { RootState } from "@/application/state";
import createTheme from "@mui/material/styles/createTheme";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "@/presentation/theme/themeSettings";

export const getTheme = () => {
  const mode = useSelector((state: RootState) => state.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return theme;
};
