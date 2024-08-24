import React, { FC } from "react";
import type { Meta, ReactRenderer, StoryObj } from "@storybook/react/*";

import { Sidebar } from "../components";

import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import { PartialStoryFn } from "storybook/internal/types";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Divider,
  List,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Class,
  CollectionsBookmark,
  Description,
  Difference,
} from "@mui/icons-material";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: "ipad12p",
      defaultOrientation: "landscape",
    },
  },
  decorators: [
    (Story: PartialStoryFn<ReactRenderer>) => {
      return (
        <Stack height={"100%"} direction={"column"}>
          <CssBaseline />
          <Sidebar.ContextProvider largeScreenSettings={{ initalOpen: false }}>
            <AppBar position="fixed">
              <Sidebar.OuterContainer>
                <Toolbar>
                  <Sidebar.ButtonOpen />
                  <Sidebar.ButtonClose />
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="h6" component="h1">
                      A cool title
                    </Typography>
                  </Box>
                </Toolbar>
              </Sidebar.OuterContainer>
            </AppBar>
            <Story />
            <Sidebar.OuterContainer>
              <Box
                component={"main"}
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
              >
                <Toolbar />
                <Container sx={{ height: "100%" }}>
                  <Typography variant="h1">Here can go you'r outlet</Typography>
                </Container>
              </Box>
            </Sidebar.OuterContainer>
          </Sidebar.ContextProvider>
        </Stack>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarFixedExample: Story = {
  args: {
    children: (
      <>
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
          <Sidebar.ListItem url="#" text="Link 1" icon={<Difference />} />
          <Sidebar.ListItem url="#" text="Link 2" icon={<Description />} />
          <Sidebar.ListItem url="#" text="Link 3" icon={<Class />} />
          <Sidebar.ListItem
            url=""
            text="Link 4"
            icon={<CollectionsBookmark />}
          />
        </List>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "ipad12p",
      defaultOrientation: "landscape",
    },
  },
};
export const SidebarFloatingExample: Story = {
  args: {
    children: (
      <>
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
          <Sidebar.ListItem url="#" text="Link 1" icon={<Difference />} />
          <Sidebar.ListItem url="#" text="Link 2" icon={<Description />} />
          <Sidebar.ListItem url="#" text="Link 3" icon={<Class />} />
          <Sidebar.ListItem
            url=""
            text="Link 4"
            icon={<CollectionsBookmark />}
          />
        </List>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
