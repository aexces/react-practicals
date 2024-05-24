import { drawerWidth } from "@/presentation/Core/Constants";
import { getColorTokens } from "@/presentation/Theme/theme";
import { Drawer, styled } from "@mui/material";

const StyledMobileSidebar = styled(Drawer)(({ theme }) => {
  const colors = getColorTokens();
  return {
    backgroundColor: colors.primary[400],
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
    },
  };
});

export default StyledMobileSidebar;
