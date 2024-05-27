import { drawerWidth } from "@/presentation/core/Constants";
import { getThemeSettings } from "@/presentation/themes/theme";
import { Box, styled } from "@mui/material";

const StyledMainBody = styled(Box)(({ theme }) => {
  const themes = getThemeSettings();
  const appBarHeight = theme.mixins.toolbar.minHeight || 64;
  return {
    height: `calc(100vh - ${appBarHeight}px)`,
    flexGrow: 1,
    padding: "2rem",
    backgroundColor: themes.palette.background.default,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  };
});

export default StyledMainBody;
