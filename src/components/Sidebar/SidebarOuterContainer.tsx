import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import useNavigationContext from "./useSidebarContext";

type OuterContainerSizedProps = {
  children: ReactNode;
}
export const SidebarOuterContainer: React.FC<OuterContainerSizedProps> = ({children}) => {
  const { outerContainerWidth } = useNavigationContext();
  return (
      <Box
        sx={{ width: `calc(100% - ${outerContainerWidth}px)`, ml: `${outerContainerWidth}px` }}
      >
        { children }
      </Box>
  );
}

export default SidebarOuterContainer;
