import StyledHeading from "@/presentation/components/atoms/Heading/Heading.styled";
import HeadingProps from "@/presentation/components/atoms/Heading/HeadingProps";
const Heading = ({ label }: HeadingProps) => {
  return <StyledHeading>{label}</StyledHeading>;
};

export default Heading;
