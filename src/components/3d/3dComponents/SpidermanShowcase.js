import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import MultiModelShowcase from "../MultiModelShowcase";
import { Button, Flex } from "@radix-ui/themes";
import { AnimatePresence, motion } from "framer-motion";

function SpidermanShowcase() {
  const [count, setCount] = useState(0);
  return (
    <Flex className="flexContainer" align="center" gap="5">
      <div style={{ height: "50vh", width: "100%" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={count}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            style={{ height: "100%", width: "100%" }}
          >
            <Canvas
              dpr={[1, 2]}
              camera={{ fov: 45 }}
              style={{ height: "100%", width: "100%" }}
            >
              <color attach="background" args={["#181818"]} />
              <MultiModelShowcase
                count={count}
                modelsList={["spiderman.glb", "spiderman_symbiote.glb"]}
              />
            </Canvas>
          </motion.div>
        </AnimatePresence>
      </div>
      <Button
        color={count % 2 === 0 ? "red" : "black"}
        onClick={() => setCount((count + 1) % 2)}
        radius="small"
      >
        Toggle Suit
      </Button>
    </Flex>
  );
}

export default SpidermanShowcase;