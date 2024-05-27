import Button from "@/presentation/components/atoms/Button/Button";
import { getColorTokens, getThemeSettings } from "@/presentation/themes/theme";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const themes = getThemeSettings();
  const colors = getColorTokens();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themes.palette.background.default,
        color: colors.grey[100],
      }}
    >
      <h1>Not Found</h1>
      <Button
        label="Back to Login"
        onClick={() => navigate("/", { replace: true })}
      ></Button>
    </Box>
  );
};

export default ErrorPage;
