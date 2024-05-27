import { getThemeSettings } from "@/presentation/themes/theme";
import { styled } from "@mui/material";
import IconProps from "@/presentation/components/atoms/Icon/IconProps";

const StyledIcon = styled(({ component: Component, ...props }: IconProps) => (
  <Component {...props} />
))(() => {
  const themes = getThemeSettings();
  return {
    color: themes.palette.neutral.light,
  };
});

export default StyledIcon;
