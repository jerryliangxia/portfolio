import React from "react";
import {
  Environment,
  ContactShadows,
  useCursor,
  MeshReflectorMaterial,
  Cylinder,
} from "@react-three/drei";
import {
  RigidBody,
  CylinderCollider,
  CuboidCollider,
} from "@react-three/rapier";
import CharacterController from "./CharacterController";
import { useGameStore } from "./Store";

function Experience() {
  const startGame = useGameStore((state) => state.startGame);
  const { level } = useGameStore((state) => ({
    level: state.level,
  }));

  return (
    <>
      {/* LIGHTS */}
      <Environment preset="sunset" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.3}
        castShadow
        color={"#9e69da"}
      />

      {/* BACKGROUND */}

      <group position-y={-1}>
        <RigidBody colliders={false} type="fixed" name="void">
          <mesh position={[0, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <meshBasicMaterial color="#e3daf7" toneMapped={false} />
          </mesh>
          <CuboidCollider position={[0, -3.5, 0]} args={[50, 0.1, 50]} sensor />
        </RigidBody>
        <ContactShadows
          frames={1}
          position={[0, -0.88, 0]}
          scale={80}
          opacity={0.42}
          far={50}
          blur={0.8}
          color={"#aa9acd"}
        />
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
