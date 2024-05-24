import ThemeToggler from "@/presentation/Components/Molecule/ThemeToggler/ThemeToggler";
import AppBar from "@mui/material/AppBar/AppBar";
import Box from "@mui/material/Box/Box";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography";
import SidebarToggler from "../../Molecule/SidebarToggler/SidebarToggler";
import { drawerWidth } from "@/presentation/Core/Constants";
import { getColorTokens, getThemeSettings } from "@/presentation/Theme/theme";

const MainHeader = ({ onClick }: MainHeaderProps) => {
  const themes = getThemeSettings();
  const colors = getColorTokens();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: colors.primary[400],
        }}
      >
        <Toolbar>
          <SidebarToggler onClick={onClick} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: themes.palette.neutral.light,
            }}
          >
            News
          </Typography>
          <ThemeToggler />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainHeader;
