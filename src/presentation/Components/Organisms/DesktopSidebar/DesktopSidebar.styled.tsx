import { drawerWidth } from "@/presentation/core/Constants";
import { Drawer, styled } from "@mui/material";

const StyledDesktopSidebar = styled(Drawer)(({ theme }) => {
  return {
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
