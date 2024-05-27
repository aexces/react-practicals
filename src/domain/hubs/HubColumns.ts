import { GridColDef } from "@mui/x-data-grid";

export const HubColumns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "hubCode", headerName: "Hub Code" },
  { field: "location", headerName: "Location" },
  { field: "name", headerName: "Hub Name" },
  { field: "stateCode", headerName: "State Code" },
  { field: "state", headerName: "State" },
];
