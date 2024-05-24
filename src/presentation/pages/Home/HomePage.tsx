import DesktopSidebar from "@/presentation/Components/Organisms/DesktopSidebar/DesktopSidebar";
import MainHeader from "@/presentation/Components/Organisms/MainHeader/MainHeader";
import MobileSidebar from "@/presentation/Components/Organisms/MobileSidebar/MobileSidebar";
import { drawerWidth } from "@/presentation/Core/Constants";
import { getColorTokens } from "@/presentation/Theme/theme";
import { Inbox, Mail } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import DashboardPage from "../Dashboard/DashboardPage";

const HomePage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const colors = getColorTokens();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div style={{ backgroundColor: colors.primary[400], height: "100vh" }}>
      <Toolbar />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <MainHeader onClick={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          // backgroundColor: "blue",
        }}
        aria-label="mailbox folders"
      >
        <MobileSidebar
          children={drawer}
          onClose={handleDrawerClose}
          isOpen={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
        />
        <DesktopSidebar children={drawer} />
      </Box>
      <DashboardPage />
    </Box>
  );
};

export default HomePage;
