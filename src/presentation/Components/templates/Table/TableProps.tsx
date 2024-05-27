import { GridColDef } from "@mui/x-data-grid";
export default interface ITableProps {
  columns: GridColDef[];
  rows: any[];
  onSearch?: (searchKey: string) => void;
}
