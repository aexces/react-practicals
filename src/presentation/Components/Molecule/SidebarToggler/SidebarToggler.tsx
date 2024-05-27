import StyledSidebarToggler from "@/presentation/components/molecule/SidebarToggler/SidebarToggler.styled";
import MenuButton from "@/presentation/components/atoms/MenuButton/MenuButton";

const SidebarToggler = ({ onClick }: SidebarTogglerProps) => {
  return (
    <StyledSidebarToggler
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      onClick={onClick}
    >
      <MenuButton />
    </StyledSidebarToggler>
  );
};

export default SidebarToggler;
