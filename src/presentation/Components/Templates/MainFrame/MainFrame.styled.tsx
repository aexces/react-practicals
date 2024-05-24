import { getThemeSettings } from "@/presentation/Theme/theme";
import { Box, styled } from "@mui/material";

const StyledMainFrame = styled(Box)(() => {
  const themes = getThemeSettings();
  return {
    height: "100vh",
    width: "100vw",
    display: "flex",
    position: "relative",
    backgroundColor: themes.palette.background.default,
  };
});

export default StyledMainFrame;
