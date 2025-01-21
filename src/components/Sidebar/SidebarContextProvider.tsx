import React, { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export const NAVIGATION_DRAWER_WIDTH = 240;


export const SidebarContext = createContext<null | {
  navigationDrawerWidth: number;
  outerContainerWidth: number;
  setNavigationDrawerWidth: React.Dispatch<React.SetStateAction<number>>;
  isOpen: boolean;
  isLargeScreen: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  setDrawerVisibility: (open: boolean) => void;
}>(null);

interface SidebarContextProviderProps {
  children: ReactNode;
  largeScreenSettings?: {
    initalOpen: boolean;
  };
  smallScreenSettings?: {
    initalOpen: boolean;
  };
  navigationMenuWidth?: number;

}
export const SidebarContextProvider: React.FC<SidebarContextProviderProps> = ({
  children,
  navigationMenuWidth,
  smallScreenSettings,
  largeScreenSettings
}) => {
  const theme = useTheme();
  // INFO: By default is set as largeScreen, with the margin left and always opened
  const [navigationDrawerWidth, setNavigationDrawerWidth] = useState(navigationMenuWidth ?? NAVIGATION_DRAWER_WIDTH);
  const [outerContainerWidth, setOuterContainerWidth] = useState(navigationMenuWidth ?? NAVIGATION_DRAWER_WIDTH);

  const [isOpen, setIsOpen] = useState(false);
  const previousIsOpen = useRef(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); // INFO: Use media query to determine screen size


  useEffect(() => {
    // INFO: On mount set the settings if provided as props
    if (smallScreenSettings) {
      if (!isLargeScreen) {
        handleToggleMenu(smallScreenSettings.initalOpen);
      }
    }
    if (largeScreenSettings) {
      if (isLargeScreen) {
        handleToggleMenu(largeScreenSettings.initalOpen);
      }
    }
  }, []);

  useEffect(() => {
    // INFO: On page resize adapt de navigation menu display option
    handleToggleMenu(previousIsOpen.current, true);
  }, [isLargeScreen]);


  const handleToggleMenu = (open: boolean, changedScreenSize = false) => {
    // INFO: On toggle menu manage the sizing when needed and toggle
    if (isLargeScreen) {
      if (open) {
        setOuterContainerWidth(navigationDrawerWidth);
      } else {
        setOuterContainerWidth(0);
      }
    } else {
      if (changedScreenSize) {
        // INFO: When is large screen with opened menu and the screen is resized
        // to small screen close the menu to avoid bad UX
        open = false;
      }
      setOuterContainerWidth(0);
    }

    previousIsOpen.current = open;
    setIsOpen(open);
  }

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    // INFO: Prevent some keyboard events and toggle the menu
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    handleToggleMenu(open);
  };


  return <>
    <SidebarContext.Provider value={{
      navigationDrawerWidth,
      outerContainerWidth,
      setNavigationDrawerWidth,
      isOpen,
      isLargeScreen,
      toggleDrawer,
      setDrawerVisibility: handleToggleMenu
    }}>
      {children}
    </SidebarContext.Provider>
  </>;
};

export default SidebarContextProvider;
