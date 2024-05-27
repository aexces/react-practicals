import DataTable from "@/presentation/components/organisms/DataTable/DataTable";
import { TableStyled } from "./Table.styled";
import TableProps from "./TableProps";
const Table = ({ rows, columns, onSearch }: TableProps) => {
  return (
    // <div>
    <TableStyled>
      <DataTable rows={rows} columns={columns} onSearch={onSearch} />
    </TableStyled>
    // </div>
  );
};

export default Table;
