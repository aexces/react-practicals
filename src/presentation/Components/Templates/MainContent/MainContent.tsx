import StyledMainContent from "@/presentation/Components/Templates/MainContent/MainContent.styled";
import MainContentProps from "@/presentation/Components/Templates/MainContent/MainContentProps";

const MainContent = ({ children }: MainContentProps) => {
  return <StyledMainContent>{children}</StyledMainContent>;
};

export default MainContent;
