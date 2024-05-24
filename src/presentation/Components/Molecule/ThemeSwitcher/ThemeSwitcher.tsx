import IconButton from "@/presentation/Components//Atom/IconButton/IconButton";
import { getStateTheme } from "@/presentation/Theme/theme";
import { LightModeOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/application/state";
import { switchTheme } from "@/application/theme/themeSlice";
import DarkModeOutlinedIcon from "@/presentation/Components/Atom/DarkModeOutlinedIcon/DarkModeOutlinedIcon";

const ThemeSwitcher = () => {
  const dispatch = useDispatch<AppDispatch>();
  const themeState = getStateTheme();
  const isDark: boolean = themeState.theme === "dark";
  return (
    <IconButton
      icon={isDark ? <DarkModeOutlinedIcon /> : <LightModeOutlined />}
      onClick={() => dispatch(switchTheme())}
    ></IconButton>
  );
};
export default ThemeSwitcher;
