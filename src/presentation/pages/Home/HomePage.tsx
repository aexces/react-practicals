import ResponsiveBuilder from "@/presentation/components/ResponsiveBuilder/ResponsiveBuilder";
import Box from "@mui/material/Box/Box";

const HomePage = () => {
  return (
    <ResponsiveBuilder
      mobile={
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100vh",
            backgroundColor: "green",
          }}
        />
      }
      tablet={
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100vh",
            backgroundColor: "blue",
          }}
        />
      }
      desktop={
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100vh",
            backgroundColor: "red",
          }}
        />
      }
    />
  );
};

export default HomePage;
