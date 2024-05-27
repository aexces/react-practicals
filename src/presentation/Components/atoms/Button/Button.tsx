import MuiButton from "@mui/material/Button/Button";
import ButtonColors from "@/presentation/components/atoms/Button/enums/ButtonColors";
import ButtonVariants from "@/presentation/components/atoms/Button/enums/ButtonVariants";
import ButtonProps from "@/presentation/components/atoms/Button/ButtonProps";

const Button = ({
  label,
  color = ButtonColors.PRIMARY,
  variant = ButtonVariants.CONTAINED,
  onClick,
  isDisabled = false,
}: ButtonProps) => {
  return (
    <MuiButton
      disabled={isDisabled}
      color={color}
      variant={variant}
      onClick={onClick}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
