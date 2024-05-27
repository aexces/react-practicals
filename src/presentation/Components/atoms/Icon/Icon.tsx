import StyledIcon from "@/presentation/components/atoms/Icon/Icon.styled";
import IconProps from "@/presentation/components/atoms/Icon/IconProps";

const Icon = ({ component }: IconProps) => {
  return <StyledIcon component={component} />;
};

export default Icon;
