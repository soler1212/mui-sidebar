import { Box } from "@mui/material";
import React, { FC } from "react";

type HelloWorldProps = {
  name?: string;
};
export const HelloWorld: FC<HelloWorldProps> = ({ name = "World" }) => {
  return <>
  <Box>
  Hello {name}
  </Box>
  </>;
};
