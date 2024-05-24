import { getColorTokens } from "@/presentation/Theme/theme";
import { Box, styled } from "@mui/material";

const StyledSidebar = styled(Box)(() => {
  const colors = getColorTokens();
  return {
    backgroundColor: colors.primary[400],
  };
});

export default StyledSidebar;
