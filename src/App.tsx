import { Box, Button, ThemeProvider } from "@mui/material";
import { AppDispatch, RootState } from "@/application/state";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "@/application/theme/themeSlice";
import { getTheme } from "./presentation/theme/theme";
import { colorTokens } from "./presentation/theme/colorTokens";
import { themeSettings } from "./presentation/theme/themeSettings";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = getTheme();
  const themeState = useSelector((state: RootState) => state.theme);
  const colors = colorTokens(themeState);
  const themes = themeSettings(themeState);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: themes.palette.background.default,
        }}
      >
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => dispatch(switchTheme())}
        >
          switch theme
        </Button>
      </Box>
    </ThemeProvider>
  );
}
export default App;
