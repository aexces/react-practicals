import { drawerWidth } from "@/presentation/Core/Constants";
import { getColorTokens } from "@/presentation/Theme/theme";
import { Drawer, styled } from "@mui/material";

const StyledDesktopSidebar = styled(Drawer)(({ theme }) => {
  const colors = getColorTokens();
  return {
    backgroundColor: colors.primary[400],
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
    },
  };
});

export default StyledDesktopSidebar;
