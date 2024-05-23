import { ThemeProvider } from "@mui/material";
import { getTheme } from "./presentation/theme/theme";

function App() {
  const theme = getTheme();
  return <ThemeProvider theme={theme}></ThemeProvider>;
}
export default App;
