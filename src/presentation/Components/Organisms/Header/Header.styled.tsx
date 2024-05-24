import { getColorTokens } from "@/presentation/Theme/theme";
import { Box, styled } from "@mui/material";

const StyledHeader = styled(Box)(() => {
  const colors = getColorTokens();
  return {
    display: "flex",
    padding: 1,
    justifyContent: "end",
    backgroundColor: colors.primary[400],
  };
});

export default StyledHeader;
