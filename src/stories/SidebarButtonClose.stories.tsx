import React from "react";
import type { Meta, StoryObj } from "@storybook/react/*";

import { Sidebar } from "../components";

const meta: Meta<typeof Sidebar.ButtonClose> = {
  component: Sidebar.ButtonClose,
}

export default meta;
type Story = StoryObj<typeof Sidebar.ButtonClose>;

export const ButtonClose: Story = {
  args: {
  }
}
