import React from "react";
import type { Meta, ReactRenderer, StoryObj } from "@storybook/react/*";

import { Sidebar } from "../components";
import { PartialStoryFn } from "storybook/internal/types";

const meta: Meta<typeof Sidebar.ButtonOpen> = {
  component: Sidebar.ButtonOpen,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer>) => {
      return (
        <Sidebar.ContextProvider>
          <Story />
        </Sidebar.ContextProvider>
      );
    },
  ],
}

export default meta;
type Story = StoryObj<typeof Sidebar.ButtonOpen>;

export const ButtonOpen: Story = {
  args: {
  }
}
