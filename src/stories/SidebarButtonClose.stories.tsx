import React from "react";
import type { Meta, ReactRenderer, StoryObj } from "@storybook/react/*";

import { Sidebar } from "../components";
import { PartialStoryFn } from "storybook/internal/types";

const meta: Meta<typeof Sidebar.ButtonClose> = {
  component: Sidebar.ButtonClose,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer>) => {
      return (
        <Sidebar.ContextProvider>
          <Story />
        </Sidebar.ContextProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Sidebar.ButtonClose>;

export const ButtonClose: Story = {
  args: {},
};
