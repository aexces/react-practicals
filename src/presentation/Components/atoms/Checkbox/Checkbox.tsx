import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import MuiCheckbox from "@mui/material/Checkbox/Checkbox";
import CheckboxProps from "@/presentation/components/atoms/Checkbox/CheckboxProps";

const Checkbox = ({
  label = "",
  value = false,
  onClick,
  isDisabled = false,
}: CheckboxProps) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox checked={value} disabled={isDisabled} onClick={onClick} />
      }
      label={label}
    />
  );
};

export default Checkbox;
