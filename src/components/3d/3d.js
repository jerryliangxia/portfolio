import SpidermanShowcase from "./3dComponents/SpidermanShowcase";
import { Flex } from "@radix-ui/themes";

function ThreeD() {
  return (
    <Flex align="center" gap="4" direction="column">
      <SpidermanShowcase />
    </Flex>
  );
}

export default ThreeD;
