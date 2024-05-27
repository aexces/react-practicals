import ButtonColors from "@/presentation/components/atoms/Button/enums/ButtonColors";
import ButtonVariants from "@/presentation/components/atoms/Button/enums/ButtonVariants";

type ButtonProps = {
  label?: string;
  variant?: ButtonVariants;
  color?: ButtonColors;
  isDisabled?: boolean;
  onClick?: () => void;
};
export default ButtonProps;
