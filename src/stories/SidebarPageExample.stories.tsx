import React from "react";
import type { Meta, StoryObj } from "@storybook/react/*";

import { SidebarExamplePage } from "../components";

const meta: Meta<typeof SidebarExamplePage> = {
  component: SidebarExamplePage,
}

export default meta;
type Story = StoryObj<typeof SidebarExamplePage>;

export const SidebarPageExample: Story = {
  args: {
  }
}
