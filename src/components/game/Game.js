import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function Game() {
  return (
    <>
      <Canvas shadows camera={{ position: [2, 8, -4], fov: 20 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default Game;
