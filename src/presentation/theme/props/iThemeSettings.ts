import { ThemeState } from "@/application/theme/themeState";

export interface IThemeSettings {
  palette: {
    themeState: ThemeState;
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    neutral: {
      dark: string;
      main: string;
      light: string;
    };
    background: {
      default: string;
    };
  };
  typography: {
    fontFamily: string;
    fontSize: number;
    h1: { fontFamily: string; fontSize: number };
    h2: { fontFamily: string; fontSize: number };
    h3: { fontFamily: string; fontSize: number };
    h4: { fontFamily: string; fontSize: number };
    h5: { fontFamily: string; fontSize: number };
    h6: { fontFamily: string; fontSize: number };
  };
}
