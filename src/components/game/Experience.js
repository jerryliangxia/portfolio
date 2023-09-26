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
import CharacterController from "./CharacterController";

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

      {/* BACKGROUND */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={1024}
          mixBlur={1}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#dbecfb"
          metalness={0.6}
          roughness={1}
        />
      </mesh>

      <group position-y={-1}>
        {/* STAGE */}
        <RigidBody
          colliders={false}
          type="fixed"
          position-y={-0.5}
          friction={2}
        >
          <CylinderCollider args={[1 / 2, 5]} />
          <Cylinder scale={[5, 1, 5]} receiveShadow>
            <meshStandardMaterial color="white" />
          </Cylinder>
        </RigidBody>
      </group>

      {/* CHARACTER */}
      <CharacterController />
    </>
  );
}

export default Experience;
