import DesktopSidebar from "@/presentation/components/organisms/DesktopSidebar/DesktopSidebar";
import MobileSidebar from "@/presentation/components/organisms/MobileSidebar/MobileSidebar";
import StyledSidebar from "@/presentation/components/organisms/Sidebar/Sidebar.styled";
import Drawer from "../Drawer/Drawer";
import SidebarProps from "./SidebarProps";

const Sidebar = ({ onClose, isOpen, onTransitionEnd }: SidebarProps) => {
  return (
    <StyledSidebar component="nav">
      <MobileSidebar
        children={<Drawer />}
        onClose={onClose}
        isOpen={isOpen}
        onTransitionEnd={onTransitionEnd}
      />
      <DesktopSidebar children={<Drawer />} />
    </StyledSidebar>
  );
};

export default Sidebar;
