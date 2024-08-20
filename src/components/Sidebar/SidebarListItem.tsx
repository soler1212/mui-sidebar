import React, { ReactNode } from "react";
import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

type SidebarListItemProps = {
  url: string;
  text: string;
  subtitle?: string;
  icon?: ReactNode;
  active?: boolean;
};
const SidebarListItem: React.FC<SidebarListItemProps> = ({
  url,
  text,
  subtitle,
  icon,
  active,
}) => {
  return (
    <Link href={url} underline={active ? "always" : "hover"}>
      <ListItemButton>
        <ListItemIcon sx={{ fontSize: 24 }}>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </Link>
  );
};

export default SidebarListItem;
