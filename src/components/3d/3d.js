import SpidermanShowcase from "./3dComponents/SpidermanShowcase";
import { Flex } from "@radix-ui/themes";
import CanvasComponent from "../CanvasComponent";

function ThreeD() {
  return (
    <Flex align="center" gap="4" direction="column">
      <SpidermanShowcase />
      <CanvasComponent
        modelPath="spiderman_hand_showcase.glb"
        intensity={0}
        scale={1}
        camera={{ fov: 90 }}
        style={{ maxWidth: "100%", height: "50vh" }}
      />
    </Flex>
  );
}

export default ThreeD;
