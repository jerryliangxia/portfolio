import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function Game() {
  return (
    <>
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default Game;
