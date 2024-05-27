import { getThemeSettings } from "@/presentation/themes/theme";
import { Menu } from "@mui/icons-material";
import { styled } from "@mui/material";

const StyledMenuButton = styled(Menu)(() => {
  const themes = getThemeSettings();
  return {
    color: themes.palette.neutral.light,
  };
});

export default StyledMenuButton;
