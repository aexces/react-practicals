import { getThemeSettings } from "@/presentation/themes/theme";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { ChangeEvent, useState } from "react";
import StyledTextInput from "../../atoms/TextInput/TextInput.styled";
import StyledCustomDataGrid from "./CustomDataGrid.style";

const DataTable = ({ rows, columns, onSearch }: any) => {
  const [searchText, setSearchText] = useState("");
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const themes = getThemeSettings();
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);
    onSearch(value);
  };

  // Handle checkbox selection
  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
    row: any
  ) => {
    const checked = event.target.checked;
    if (checked) {
      setSelectedRows([...selectedRows, row.id]);
    } else {
      setSelectedRows(selectedRows.filter((id: any) => id !== row.id));
    }
  };

  // Define your columns including checkbox column
  const columnsWithCheckbox = [
    {
      field: "checkbox",
      headerName: "Select",
      sortable: false,
      width: 100,
      renderCell: (params: any) => (
        <FormGroup>
          <FormControlLabel
            label={""}
            control={
              <Checkbox
                style={{
                  color: themes.palette.neutral.light,
                }}
                checked={selectedRows.includes(params.row.id)}
                onChange={(e) => handleCheckboxChange(e, params.row)}
              />
            }
          />
        </FormGroup>
      ),
    },
    ...columns,
  ];

  return (
    <>
      <StyledTextInput
        label="Search"
        variant="outlined"
        value={searchText}
        onChange={handleSearchChange}
      />

      <StyledCustomDataGrid
        rows={rows}
        columns={columnsWithCheckbox}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        autoHeight
      />
    </>
  );
};

export default DataTable;
