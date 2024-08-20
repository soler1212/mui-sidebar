import React, { FC } from "react";
import { Button } from "@mui/material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import useNavigationContext from "./useSidebarContext";

export const SidebarButtonOpen: FC = () => {
  const { toggleDrawer } = useNavigationContext();

  return (
    <Button onClick={toggleDrawer(true)}  variant="text" color="secondary">
      <MenuOpenIcon sx={{ transform: "rotate(180deg)" }} />
    </Button>
  );
}


export default SidebarButtonOpen;
