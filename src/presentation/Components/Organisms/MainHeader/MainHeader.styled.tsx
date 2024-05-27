import { drawerWidth } from "@/presentation/core/Constants";
import { getThemeSettings } from "@/presentation/themes/theme";
import { AppBar, styled } from "@mui/material";

const StyledMainHeader = styled(AppBar)(({ theme }) => {
  const themes = getThemeSettings();
  return {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
    },
    backgroundColor: themes.palette.background.default,
  };
});

export default StyledMainHeader;
