import SpidermanShowcase from "./3dComponents/SpidermanShowcase";
import { Flex } from "@radix-ui/themes";
import CanvasComponent from "../CanvasComponent";

function ThreeD() {
  return (
    <Flex align="center" gap="4" direction="column">
      <SpidermanShowcase />
      <CanvasComponent
        modelPath="bug_emoji.glb"
        intensity={0.1}
        style={{ maxWidth: "100%", height: "25vh" }}
      />
    </Flex>
  );
}

export default ThreeD;
