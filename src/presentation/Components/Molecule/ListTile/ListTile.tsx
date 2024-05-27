import ListTileProps from "@/presentation/components/molecule/ListTile/ListTileProps";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import StyledIcon from "../../atoms/Icon/Icon.styled";
import ListTileLabel from "../../atoms/ListTileLabel/ListTileLabel";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";

const ListTile = ({ label, component, onClick }: ListTileProps) => {
  return (
    <ListItem onClick={onClick} key={label} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <StyledIcon component={component} />
        </ListItemIcon>
        <ListTileLabel label={label} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListTile;
