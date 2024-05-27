import StyledMainHeader from "@/presentation/components/organisms/MainHeader/MainHeader.styled";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import SidebarToggler from "@/presentation/components/molecule/SidebarToggler/SidebarToggler";
import MainHeaderHeading from "@/presentation/components/atoms/MainHeaderHeading/MainHeaderHeading";
import ThemeToggler from "@/presentation/components/molecule/ThemeToggler/ThemeToggler";

const MainHeader = ({ onClick }: MainHeaderProps) => {
  return (
    <StyledMainHeader position="fixed" elevation={0}>
      <Toolbar>
        <SidebarToggler onClick={onClick} />
        <MainHeaderHeading label="Responsive Drawer"></MainHeaderHeading>
        <ThemeToggler />
      </Toolbar>
    </StyledMainHeader>
  );
};

export default MainHeader;
