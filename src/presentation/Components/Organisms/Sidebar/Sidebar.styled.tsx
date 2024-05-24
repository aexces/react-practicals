import { drawerWidth } from "@/presentation/Core/Constants";
import { Box, styled } from "@mui/material";

const StyledSidebar = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  };
});

export default StyledSidebar;
