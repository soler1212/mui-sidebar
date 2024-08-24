import React from "react";
import type { Meta,  StoryObj } from "@storybook/react/*";

import { SidebarExamplePage } from "../components";


import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
const meta: Meta<typeof SidebarExamplePage> = {
  component: SidebarExamplePage,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: 'iphone14promax',
    },
  },
}

export default meta;
type Story = StoryObj<typeof SidebarExamplePage>;

export const SidebarFixedPageExample: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad12p',
      defaultOrientation: 'landscape'
    },
  },
}
export const SidebarFloatingPageExample: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};
