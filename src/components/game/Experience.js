import React from "react";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useCursor,
  MeshReflectorMaterial,
  Cylinder,
} from "@react-three/drei";
import { RigidBody, CylinderCollider } from "@react-three/rapier";

function Experience() {
  return (
    <>
      <OrbitControls />
      {/* LIGHTS */}
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        color={"#9e69da"}
      />
      {/* STAGE */}
      <RigidBody colliders={false} type="fixed" position-y={-0.5}>
        <CylinderCollider args={[1 / 2, 5]} />
        <Cylinder scale={[5, 1, 5]} receiveShadow>
          <meshStandardMaterial color="white" />
        </Cylinder>
      </RigidBody>
    </>
  );
}

export default Experience;
