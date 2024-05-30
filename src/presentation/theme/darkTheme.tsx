import createTheme from "@mui/material/styles/createTheme";
import { DarkBackgroundDefaultColor, DarkBackgroundPaperColor } from "./colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: DarkBackgroundDefaultColor,
      paper: DarkBackgroundPaperColor,
    },
  },
});
export default darkTheme;
