import Heading from "@/presentation/components/atoms/Heading/Heading";
import DrawerStyled from "@/presentation/components/organisms/Drawer/Drawer.styled";
import SpaceDashboardOutlined from "@mui/icons-material/SpaceDashboardOutlined";
import { List } from "@mui/material";
import Divider from "@mui/material/Divider/Divider";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import ListTile from "../../molecule/ListTile/ListTile";
import HubOutlined from "@mui/icons-material/HubOutlined";
import { useNavigate } from "react-router-dom";
import Diversity3Outlined from "@mui/icons-material/Diversity3Outlined";

const Drawer = () => {
  const navigate = useNavigate();
  return (
    <DrawerStyled>
      <Toolbar>
        <Heading label="BROTOTYPE" />
      </Toolbar>
      <Divider />
      <List>
        <ListTile
          label="Dashboard"
          component={SpaceDashboardOutlined}
          onClick={() => navigate("/dashboard")}
        />
        <ListTile
          label="Hubs"
          component={HubOutlined}
          onClick={() => navigate("/hubs")}
        />
        <ListTile
          label="Spaces"
          component={Diversity3Outlined}
          onClick={() => navigate("/spaces")}
        />
      </List>
    </DrawerStyled>
  );
};

export default Drawer;
