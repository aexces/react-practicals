import { getColorTokens } from "@/presentation/themes/theme";
import { styled } from "@mui/material";

const DrawerStyled = styled(`div`)(() => {
  const colors = getColorTokens();
  return {
    backgroundColor: colors.primary[400],
    height: "100vh",
  };
});

export default DrawerStyled;
