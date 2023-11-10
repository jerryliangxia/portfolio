import React, { Suspense, useMemo } from "react";
import { Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { KeyboardControls } from "@react-three/drei";
import { motion } from "framer-motion";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

function Game() {
  const map = useMemo(() => [
    { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
    { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
    { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
    { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    { name: Controls.jump, keys: ["Space"] },
  ]);
  return (
    <KeyboardControls map={map}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 6, 4], fov: 42 }}
          style={{ height: "100vh" }}
        >
          <color attach="background" args={["#181818"]} />
          <fog attach="fog" args={["#181818", 0, 140]} />
          <Suspense>
            <Physics>
              <Experience />
            </Physics>
          </Suspense>
        </Canvas>
      </motion.div>
    </KeyboardControls>
  );
}

export default Game;
