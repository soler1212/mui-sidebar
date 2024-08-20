import React, { ReactNode } from "react";
import { Drawer, SwipeableDrawer } from "@mui/material";
import SidebarContextProvider from "./SidebarContextProvider";
import SidebarButtonOpen from "./SidebarButtonOpen";
import SidebarOuterContainer from "./SidebarOuterContainer";
import SidebarButtonClose from "./SidebarButtonClose";
import SidebarListItem from "./SidebarListItem";
import useSidebarContext from "./useSidebarContext";

interface SidebarProps {
  children: ReactNode;
}
export const Sidebar: React.FC<SidebarProps> & {
  OuterContainer: typeof SidebarOuterContainer;
  ContextProvider: typeof SidebarContextProvider;
  ButtonOpen: typeof SidebarButtonOpen;
  ButtonClose: typeof SidebarButtonClose;
  ListItem: typeof SidebarListItem;
  useSidebarContext: typeof useSidebarContext;
} = ({ children }) => {
  const { navigationDrawerWidth, isOpen, toggleDrawer, isLargeScreen } = useSidebarContext();

  const renderDrawer = {
    static: (
      <Drawer
        sx={{
          width: navigationDrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: navigationDrawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        hidden={!isOpen}
      >
        {children}
      </Drawer>
    ),
    float: (
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Drawer
          sx={{
            width: navigationDrawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: navigationDrawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          {children}
        </Drawer>
      </SwipeableDrawer>
    ),
  };

  return renderDrawer[isLargeScreen ? "static" : "float"];
};

Sidebar.OuterContainer = SidebarOuterContainer;
Sidebar.ContextProvider = SidebarContextProvider;
Sidebar.ButtonOpen = SidebarButtonOpen;
Sidebar.ButtonClose = SidebarButtonClose;
Sidebar.ListItem = SidebarListItem;
Sidebar.useSidebarContext = useSidebarContext;

export default Sidebar;
