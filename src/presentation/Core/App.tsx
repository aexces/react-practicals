import { CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "../theme/theme";

const App = () => {
  const theme = getTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
