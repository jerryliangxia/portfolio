import React, { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function Game() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 6, 14], fov: 42 }}
      style={{ height: "100vh" }}
    >
      <color attach="background" args={["#dbecfb"]} />
      <Suspense>
        <Physics debug>
          <Experience />
        </Physics>
      </Suspense>
    </Canvas>
  );
}

export default Game;
