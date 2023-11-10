import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import MultiModelShowcase from "./MultiModelShowcase";
import { Button, Flex } from "@radix-ui/themes";
import { AnimatePresence, motion } from "framer-motion";
import { ToggleOff, ToggleOn } from "../../svg/Button";

function SpidermanShowcase() {
  const [count, setCount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClick = () => {
    setIsButtonDisabled(true);
    setCount((count + 1) % 2);
    setTimeout(() => setIsButtonDisabled(false), 1500); // 1500 milliseconds = 2.5 seconds
  };

  return (
    <Flex className="flexContainer" align="center" gap="6" direction="column">
      <div style={{ height: "40vh", width: "100%" }}>
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
              camera={{ fov: 22.5 }}
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
        variant="ghost"
        onClick={handleClick}
        disabled={isButtonDisabled}
        radius="small"
        style={{ cursor: isButtonDisabled ? "default" : "pointer" }}
      >
        {count === 1 ? <ToggleOn /> : <ToggleOff />}
        Toggle Suit
      </Button>
    </Flex>
  );
}

export default SpidermanShowcase;
