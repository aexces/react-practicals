import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import ResponsiveProps from "./ResponsiveProps";

const ResponsiveBuilder = ({ mobile, tablet, desktop }: ResponsiveProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  if (isSmallScreen) {
    return mobile;
  } else if (isMediumScreen) {
    return tablet;
  } else {
    return desktop;
  }
};

export default ResponsiveBuilder;
