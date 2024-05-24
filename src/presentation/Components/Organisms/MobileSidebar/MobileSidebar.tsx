import StyledMobileSidebar from "@/presentation/Components/Organisms/MobileSidebar/MobileSidebar.styled";
import SidebarProps from "@/presentation/Components/Organisms/Sidebar/SidebarProps";
const MobileSidebar = ({
  window,
  isOpen,
  onClose,
  onTransitionEnd,
  children,
}: SidebarProps) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <StyledMobileSidebar
      container={container}
      variant="temporary"
      open={isOpen}
      onTransitionEnd={onTransitionEnd}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      {children}
    </StyledMobileSidebar>
  );
};

export default MobileSidebar;
