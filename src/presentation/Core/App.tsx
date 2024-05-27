import { ThemeProvider } from "@mui/material";
import { getTheme } from "@/presentation/themes/theme";

function App() {
  const theme = getTheme();
  return <ThemeProvider theme={theme}></ThemeProvider>;
}
export default App;
