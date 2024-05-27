import { getThemeSettings } from "@/presentation/themes/theme";
import { Typography, styled } from "@mui/material";

const StyledMainHeaderHeading = styled(Typography)(() => {
  const themes = getThemeSettings();
  return {
    flexGrow: 1,
    color: themes.palette.neutral.light,
  };
});

export default StyledMainHeaderHeading;
