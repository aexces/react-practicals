import StyledIconButton from "@/presentation/Components/Atom/IconButton/StyledIconButton";
import IIconButtonProps from "@/presentation/Components/Atom/IconButton/IIconButtonProps";

const IconButton = ({ icon, onClick }: IIconButtonProps) => {
  return <StyledIconButton onClick={onClick}>{icon}</StyledIconButton>;
};

export default IconButton;
