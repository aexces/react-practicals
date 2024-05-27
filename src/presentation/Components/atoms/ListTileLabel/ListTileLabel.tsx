import ListTileLabelProps from "@/presentation/components/atoms/ListTileLabel/ListTileLabelProps";
import StyledListTileLabel from "@/presentation/components/atoms/ListTileLabel/ListTileLable.styled";

const ListTileLabel = ({ label }: ListTileLabelProps) => {
  return <StyledListTileLabel primary={label} />;
};

export default ListTileLabel;
