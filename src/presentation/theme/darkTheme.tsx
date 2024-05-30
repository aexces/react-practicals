import createTheme from "@mui/material/styles/createTheme";
import { DarkBackgroundDefaultColor } from "./colors";
import { DarkBackgroundPaperColor } from "./colors";
import { DarkPrimaryColor } from "./colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: DarkBackgroundDefaultColor,
      paper: DarkBackgroundPaperColor,
    },
    primary: {
      main: DarkPrimaryColor,
    },
    secondary: {
      main: DarkPrimaryColor,
    },
  },
});
export default darkTheme;
