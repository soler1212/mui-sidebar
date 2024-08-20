import React, { FC } from "react";
import { AppBar, Box, Container, CssBaseline, Divider, List, Stack, Toolbar, Typography } from "@mui/material";
import { Sidebar } from "../Sidebar";
import { Class, CollectionsBookmark, Description, Difference } from "@mui/icons-material";


export const SidebarMenu: React.FC = () => {
  return (
    <Sidebar>
      <Toolbar>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          style={{ width: "100%" }}
        >
          <Typography>Menu</Typography>
          <Sidebar.ButtonClose />
        </Stack>
      </Toolbar>
      <Divider />
    <List component="nav">
      <Sidebar.ListItem
        url="#"
        text="Link 1"
        icon={<Difference />}
      />
      <Sidebar.ListItem
        url="#"
        text="Link 2"
        icon={<Description />}
      />
      <Sidebar.ListItem
        url="#"
        text="Link 3"
        icon={<Class />}
      />
      <Sidebar.ListItem
        url=""
        text="Link 4"
        icon={<CollectionsBookmark />}
      />
    </List>
    </Sidebar>
  );
};

const HeaderBar: FC = (): JSX.Element => {
  const { isLargeScreen, isOpen } = Sidebar.useSidebarContext();

  return (
    <>
      <AppBar position="fixed">
        <Sidebar.OuterContainer>
          <Toolbar>
            { !isOpen && <Sidebar.ButtonOpen /> }
            { isOpen && <Sidebar.ButtonClose /> }
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" component="h1" >
                A cool title
              </Typography>
            </Box>
          </Toolbar>
        </Sidebar.OuterContainer>
      </AppBar>

      <SidebarMenu />
    </>
  );
};

const MainContainer: FC = () => {

  return (
    <Box component={"main"}
         sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
      <Toolbar/>
      <Container sx={{ height: "100%" }}>
        <Typography variant="h1">
          Here can go you'r outlet
        </Typography>
      </Container>
    </Box>
    )

}


export const SidebarExamplePage: FC = () => {

  return (
    <>
      <Stack height={"100%"} direction={"column"} >
        <CssBaseline />
        <Sidebar.ContextProvider largeScreenSettings={{initalOpen: false}}>
          <HeaderBar />
          <Sidebar.OuterContainer>
            <MainContainer />
          </Sidebar.OuterContainer>
        </Sidebar.ContextProvider>
      </Stack>
    </>
  );
};

export default SidebarExamplePage;
