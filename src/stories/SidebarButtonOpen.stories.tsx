import React from "react";
import type { Meta, StoryObj } from "@storybook/react/*";

import { Sidebar } from "../components";

const meta: Meta<typeof Sidebar.ButtonOpen> = {
  component: Sidebar.ButtonOpen,
}

export default meta;
type Story = StoryObj<typeof Sidebar.ButtonOpen>;

export const ButtonOpen: Story = {
  args: {
  }
}