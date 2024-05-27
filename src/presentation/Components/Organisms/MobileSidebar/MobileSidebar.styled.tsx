import { drawerWidth } from "@/presentation/core/Constants";
import { Drawer, styled } from "@mui/material";

const StyledMobileSidebar = styled(Drawer)(({ theme }) => {
  return {
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
