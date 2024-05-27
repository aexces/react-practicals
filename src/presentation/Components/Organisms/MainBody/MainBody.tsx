import StyledMainBody from "@/presentation/components/organisms/MainBody/MainBody.styled";
import MainBodyProps from "@/presentation/components/organisms/MainBody/MainBodyProps";

const MainBody = ({ children }: MainBodyProps) => {
  return <StyledMainBody component="main">{children}</StyledMainBody>;
};

export default MainBody;
