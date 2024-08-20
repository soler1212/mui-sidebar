import React, { FC } from "react";
import { Button } from "@mui/material";
import useNavigationContext from "./useSidebarContext";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export const SidebarButtonClose: FC = () => {
  const { toggleDrawer } = useNavigationContext();

  return (
    <Button onClick={toggleDrawer(false)}  variant="text" color="secondary">
      <MenuOpenIcon/>
    </Button>
  );
};

export default SidebarButtonClose;
