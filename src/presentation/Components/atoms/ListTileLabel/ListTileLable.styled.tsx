import { getThemeSettings } from "@/presentation/themes/theme";
import { ListItemText, styled } from "@mui/material";

const StyledListTileLabel = styled(ListItemText)(() => {
  const themes = getThemeSettings();
  return {
    color: themes.palette.neutral.light,
  };
});

export default StyledListTileLabel;
