import type { Meta, StoryObj } from "@storybook/react/*";

import { HelloWorld } from "../components";

const meta: Meta<typeof HelloWorld> = {
  component: HelloWorld,
}

export default meta;
type Story = StoryObj<typeof HelloWorld>;

export const Test: Story = {
  args: {
    name: "Aleix"
  }
}
