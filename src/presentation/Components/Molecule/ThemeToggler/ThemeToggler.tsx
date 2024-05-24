import { getStateTheme } from "@/presentation/Theme/theme";
import { LightModeOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/application/state";
import { switchTheme } from "@/application/theme/themeSlice";
import DarkModeOutlinedIcon from "@/presentation/Components/Atom/DarkModeOutlinedIcon/DarkModeOutlinedIcon";
import IconButton from "@mui/material/IconButton/IconButton";

const ThemeToggler = () => {
  const dispatch = useDispatch<AppDispatch>();
  const themeState = getStateTheme();
  const isDark: boolean = themeState.theme === "dark";
  return (
    <IconButton onClick={() => dispatch(switchTheme())}>
      {isDark ? <DarkModeOutlinedIcon /> : <LightModeOutlined />}
    </IconButton>
  );
};
export default ThemeToggler;
