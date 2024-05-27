import { getColorTokens, getThemeSettings } from "@/presentation/themes/theme";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

const StyledTextInput = styled(TextField)(({}) => {
  const colors = getColorTokens();
  const themes = getThemeSettings();
  return {
    marginBottom: 10,
    backgroundColor: colors.primary[400],

    "& .MuiInputLabel-root": {
      color: themes.palette.neutral.light,
    },
    "& .MuiInputBase-input": {
      color: themes.palette.neutral.light,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: themes.palette.neutral.light,
      },
      "&:hover fieldset": {
        borderColor: themes.palette.neutral.light,
      },
      "&.Mui-focused fieldset": {
        borderColor: themes.palette.neutral.light,
      },
      "&.Mui-error fieldset": {
        borderColor: themes.palette.neutral.light,
      },
    },
  };
});
export default StyledTextInput;
