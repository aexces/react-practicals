import { Menu } from "@mui/icons-material";
import StyledSidebarToggler from "@/presentation/Components/Molecule/SidebarToggler/SidebarToggler.styled";

const SidebarToggler = ({ onClick }: SidebarTogglerProps) => {
  return (
    <StyledSidebarToggler
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      onClick={onClick}
    >
      <Menu />
    </StyledSidebarToggler>
  );
};

export default SidebarToggler;
