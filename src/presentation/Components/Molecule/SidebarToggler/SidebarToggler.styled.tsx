import { IconButton, styled } from "@mui/material";

const StyledSidebarToggler = styled(IconButton)(({ theme }) => {
  return {
    marginRight: theme.spacing(2),
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  };
});

export default StyledSidebarToggler;
