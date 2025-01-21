import React, { ReactNode, FC, CSSProperties } from 'react';

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
declare const SidebarContextProvider: React.FC<SidebarContextProviderProps>;

declare const SidebarButtonOpen: FC;

type OuterContainerSizedProps = {
    children: ReactNode;
    style?: CSSProperties;
};
declare const SidebarOuterContainer: React.FC<OuterContainerSizedProps>;

declare const SidebarButtonClose: FC;

type SidebarListItemProps = {
    url: string;
    text: string;
    subtitle?: string;
    icon?: ReactNode;
    active?: boolean;
};
declare const SidebarListItem: React.FC<SidebarListItemProps>;

declare const useSidebarContext: () => {
    navigationDrawerWidth: number;
    outerContainerWidth: number;
    setNavigationDrawerWidth: React.Dispatch<React.SetStateAction<number>>;
    isOpen: boolean;
    isLargeScreen: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
};

interface SidebarProps {
    children: ReactNode;
}
declare const Sidebar: React.FC<SidebarProps> & {
    OuterContainer: typeof SidebarOuterContainer;
    ContextProvider: typeof SidebarContextProvider;
    ButtonOpen: typeof SidebarButtonOpen;
    ButtonClose: typeof SidebarButtonClose;
    ListItem: typeof SidebarListItem;
    useSidebarContext: typeof useSidebarContext;
};

export { Sidebar };
