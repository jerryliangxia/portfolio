import React from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { SpiderManPS5 } from "./SpiderManPS5";

function Game() {
  return (
    <>
      {/* <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <OrbitControls /> */}
      <SpiderManPS5 />
    </>
  );
}

export default Game;
