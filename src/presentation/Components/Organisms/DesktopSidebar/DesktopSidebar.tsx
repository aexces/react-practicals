import StyledDesktopSidebar from "@/presentation/Components/Organisms/DesktopSidebar/DesktopSidebar.styled";
import SidebarProps from "../Sidebar/SidebarProps";

const DesktopSidebar = ({ children }: SidebarProps) => {
  return (
    <StyledDesktopSidebar variant="permanent" open>
      {children}
    </StyledDesktopSidebar>
  );
};

export default DesktopSidebar;
