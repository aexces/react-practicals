import { ReactNode } from "react";

type SidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
  onTransitionEnd?: () => void;
  window?: () => Window;
  children?: ReactNode;
};
export default SidebarProps;
