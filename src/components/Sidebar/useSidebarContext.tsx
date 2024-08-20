import React, { useContext } from "react";
import { SidebarContext } from "./SidebarContextProvider";

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext unable to find the SidebarContext, probably because the Sidebar.ContextProvider is not used as a parent of this component");
  }
  return context;
}


export default useSidebarContext;
