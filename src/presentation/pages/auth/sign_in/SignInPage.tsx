import { Box, Button, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/application/store";
import { switchTheme } from "@/application/theme/themeSlice";
import { getTheme } from "@/presentation/theme/theme";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
const SignInPage = () => {
  const theme = getTheme();
  const dispatch = useDispatch<AppDispatch>();
  const isDark: boolean = theme.palette.mode == "dark";
  return (
    <Box
      sx={{
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <h1>Current Theme : {theme.palette.mode}</h1>
      <IconButton color="inherit" onClick={() => dispatch(switchTheme())}>
        {isDark ? <DarkModeOutlined /> : <LightModeOutlined />}
      </IconButton>
      <Button color="primary" variant="contained">
        Submit
      </Button>
      <Button color="secondary" variant="outlined">
        Submit
      </Button>
    </Box>
  );
};

export default SignInPage;
