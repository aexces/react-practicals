import { getColorTokens, getThemeSettings } from "@/presentation/Theme/theme";
import { Box } from "@mui/material";
const ErrorPage = () => {
  const themes = getThemeSettings();
  const colors = getColorTokens();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themes.palette.background.default,
        color: colors.grey[100],
      }}
    >
      <h1>Access Restricted</h1>
    </Box>
  );
};

export default ErrorPage;
