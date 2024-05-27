import StyledMainHeaderHeading from "./MainHeaderHeading.styled";

const MainHeaderHeading = ({ label }: MainHeaderHeadingProps) => {
  return (
    <StyledMainHeaderHeading variant="h6" noWrap>
      {label}
    </StyledMainHeaderHeading>
  );
};

export default MainHeaderHeading;
