import createTheme from "@mui/material/styles/createTheme";
import {
  LightBackgroundDefaultColor,
  LightBackgroundPaperColor,
} from "./colors";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: LightBackgroundDefaultColor,
      paper: LightBackgroundPaperColor,
    },
  },
});
export default lightTheme;
