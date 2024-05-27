import { getThemeSettings } from "@/presentation/themes/theme";
import styled from "@mui/material/styles/styled";
import { DataGrid } from "@mui/x-data-grid/DataGrid/DataGrid";

const StyledCustomDataGrid = styled(DataGrid)(() => {
  const themes = getThemeSettings();
  return {
    "& .MuiDataGrid-columnHeaders": {
      color: "black",
    },
    color: themes.palette.neutral.light,
  };
});
export default StyledCustomDataGrid;
