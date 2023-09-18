import { useState } from "react";
import SpidermanShowcase from "./3dComponents/SpidermanShowcase";
import { Button, Flex, Text, Theme } from "@radix-ui/themes";

function ThreeD() {
  return (
    <Flex align="center" gap="4" direction="column">
      <SpidermanShowcase />
    </Flex>
  );
}

export default ThreeD;
