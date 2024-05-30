import createTheme from "@mui/material/styles/createTheme";
import { LightBackgroundDefaultColor } from "./colors";
import { LightBackgroundPaperColor } from "./colors";
import { LightPrimaryColor } from "./colors";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: LightBackgroundDefaultColor,
      paper: LightBackgroundPaperColor,
    },
    primary: {
      main: LightPrimaryColor,
    },
    secondary: {
      main: LightPrimaryColor,
    },
  },
});
export default lightTheme;
