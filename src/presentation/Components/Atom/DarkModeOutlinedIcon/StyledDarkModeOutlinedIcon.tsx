import { getThemeSettings } from "@/presentation/Theme/theme";
import { DarkModeOutlined } from "@mui/icons-material";
import { styled } from "@mui/material";

const StyledDarkModeOutlinedIcon = styled(DarkModeOutlined)(() => {
  const themes = getThemeSettings();
  return {
    color: themes.palette.neutral.light,
  };
});

export default StyledDarkModeOutlinedIcon;
