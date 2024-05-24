import ThemeSwitcher from "@/presentation/Components/Molecule/ThemeSwitcher/ThemeSwitcher";
import StyledHeader from "@/presentation/Components/Organisms/Header/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <ThemeSwitcher />
    </StyledHeader>
  );
};

export default Header;
