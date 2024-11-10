import React, { CSSProperties, ReactNode } from "react";
import { Box } from "@mui/material";
import useNavigationContext from "./useSidebarContext";

type OuterContainerSizedProps = {
  children: ReactNode;
  style?: CSSProperties;
}
export const SidebarOuterContainer: React.FC<OuterContainerSizedProps> = ({style, children}) => {
  const { outerContainerWidth } = useNavigationContext();
  return (
      <Box
        sx={{ width: `calc(100% - ${outerContainerWidth}px)`, ml: `${outerContainerWidth}px` }}
        style={style ?? {}}
      >
        { children }
      </Box>
  );
}

export default SidebarOuterContainer;
