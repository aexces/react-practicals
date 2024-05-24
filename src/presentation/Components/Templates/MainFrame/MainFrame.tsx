import StyledMainFrame from "@/presentation/Components/Templates/MainFrame/MainFrame.styled";
import MainFrameProps from "@/presentation/Components/Templates/MainFrame/MainFrameProps";

const MainFrame = ({ children }: MainFrameProps) => {
  return <StyledMainFrame>{children}</StyledMainFrame>;
};

export default MainFrame;
