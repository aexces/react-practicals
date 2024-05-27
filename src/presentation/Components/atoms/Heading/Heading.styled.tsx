import { getThemeSettings } from "@/presentation/themes/theme";
import { styled } from "@mui/material";

const StyledHeading = styled(`h1`)(() => {
  const themes = getThemeSettings();
  return {
    color: themes.palette.neutral.light,
  };
});

export default StyledHeading;
