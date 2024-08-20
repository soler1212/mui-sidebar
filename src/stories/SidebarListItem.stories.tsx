import React from "react";
import type { Meta, StoryObj } from "@storybook/react/*";

import { Sidebar } from "../components";

const meta: Meta<typeof Sidebar.ListItem> = {
  component: Sidebar.ListItem,
}

export default meta;
type Story = StoryObj<typeof Sidebar.ListItem>;

export const ListItem: Story = {
  args: {
    text: "test",
    active: true
  }
}
