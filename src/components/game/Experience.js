import React, { useState } from "react";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useCursor,
} from "@react-three/drei";
import SpiderManPS5 from "./SpiderManPS5";
import * as THREE from "three";

function Experience() {
  const [onFloor, setOnFloor] = useState(false);
  const [position, setPosition] = useState([0, 0, 0]);

  useCursor(onFloor);
  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <ContactShadows blur={2} />
      <OrbitControls />
      <mesh
        rotation-x={-Math.PI / 2}
        position-y={-0.001}
        onPointerEnter={() => setOnFloor(true)}
        onPointerLeave={() => setOnFloor(false)}
        onClick={(e) => setPosition([e.point.x, 0, e.point.z])}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      <SpiderManPS5
        position={new THREE.Vector3(position[0], position[1], position[2])}
      />
    </>
  );
}

export default Experience;
