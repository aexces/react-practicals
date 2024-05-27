import MainBody from "@/presentation/components/organisms/MainBody/MainBody";
import MainHeader from "@/presentation/components/organisms/MainHeader/MainHeader";
import Sidebar from "@/presentation/components/organisms/Sidebar/Sidebar";
import HomePageStyled from "@/presentation/pages/Home/HomePage.styled";
import { Toolbar } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  return (
    <HomePageStyled>
      <MainHeader onClick={handleDrawerToggle} />
      <Sidebar
        onClose={handleDrawerClose}
        isOpen={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
      />
      <MainBody>
        <Toolbar />
        <Outlet />
      </MainBody>
    </HomePageStyled>
  );
};

export default HomePage;
