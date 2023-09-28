import React from "react";
import { Environment, ContactShadows } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import CharacterController from "./CharacterController";
import Model from "./OscorpScene";

function Experience() {
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
        <Model scale={3} />
        <RigidBody colliders={false} type="fixed" name="void">
          <mesh position={[0, -30, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <meshBasicMaterial color="#000000" toneMapped={false} />
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
        {/* GROUNDS */}
        <RigidBody
          colliders={false}
          type="fixed"
          position-y={-0.5}
          friction={2}
          name="ground"
        >
          {/* MAIN BUILDING */}
          <CuboidCollider position={[0, 0.5, 0]} args={[4.1, 0.1, 4]} />
          {/* LEFT BUILDING */}
          <CuboidCollider position={[-11.25, 0.5, 0]} args={[4, 0.1, 4]} />
          {/* LEFT BRIDGE */}
          <CuboidCollider position={[-5.75, 0.5, 0]} args={[1.5, 0.1, 0.5]} />
          {/* RIGHT BRIDGE */}
          <CuboidCollider position={[5.75, 0.5, 0]} args={[1.5, 0.1, 0.5]} />
          {/* RIGHT BUILDING */}
          <CuboidCollider position={[11.25, 0.5, 0]} args={[4, 0.1, 4]} />
        </RigidBody>

        {/* OBJECT/WALL COLLIDERS */}
        <RigidBody colliders={false} type="fixed" position-y={-0.5}>
          {/* MB RIGHT WALLS */}
          <CuboidCollider position={[4.2, 0.75, -2.2]} args={[0.1, 0.1, 1.7]} />
          <CuboidCollider position={[4.2, 0.75, 2.2]} args={[0.1, 0.1, 1.7]} />
          {/* MB LEFT WALLS */}
          <CuboidCollider
            position={[-4.1, 0.75, -2.2]}
            args={[0.1, 0.1, 1.7]}
          />
          <CuboidCollider position={[-4.1, 0.75, 2.2]} args={[0.1, 0.1, 1.7]} />
          {/* MB TOP WALL */}
          <CuboidCollider position={[0, 0.75, -4.2]} args={[4, 0.1, 0.1]} />
          {/* MB BOTTOM WALL */}
          <CuboidCollider position={[0, 0.75, 4.2]} args={[4, 0.1, 0.1]} />
          {/* LB LEFT WALL */}
          <CuboidCollider position={[-15.5, 0.75, 0]} args={[0.1, 0.1, 4]} />
          {/* LB RIGHT WALLS */}
          <CuboidCollider
            position={[-7.2, 0.75, -2.2]}
            args={[0.1, 0.1, 1.7]}
          />
          <CuboidCollider position={[-7.2, 0.75, 2.2]} args={[0.1, 0.1, 1.7]} />
          {/* LB TOP WALL */}
          <CuboidCollider position={[-11.5, 0.75, -4.2]} args={[4, 0.1, 0.1]} />
          {/* LB BOTTOM WALL */}
          <CuboidCollider position={[-11.5, 0.75, 3.7]} args={[4, 0.1, 0.1]} />

          {/* RB LEFT WALLS */}
          <CuboidCollider position={[7.2, 0.75, -2.2]} args={[0.1, 0.1, 1.7]} />
          <CuboidCollider position={[7.2, 0.75, 2.2]} args={[0.1, 0.1, 1.7]} />
          {/* RB RIGHT WALL */}
          <CuboidCollider position={[15.5, 0.75, 0]} args={[0.1, 0.1, 4]} />
          {/* RB TOP WALL */}
          <CuboidCollider position={[11.5, 0.75, -4.2]} args={[4, 0.1, 0.1]} />
          {/* RB BOTTOM WALL */}
          <CuboidCollider position={[11.5, 0.75, 4.2]} args={[4, 0.1, 0.1]} />

          {/* LB RIGHT VENTS */}
          <CuboidCollider
            position={[-8.3, 0.75, -1.8]}
            args={[0.2, 0.1, 0.2]}
          />
          <CuboidCollider position={[-8.3, 0.75, 0.5]} args={[0.2, 0.1, 0.2]} />
          <CuboidCollider position={[-8.3, 0.75, 2.7]} args={[0.2, 0.1, 0.2]} />

          {/* MB FLAT VENT 1 */}
          <CuboidCollider
            position={[-2.7, 0.75, -2.8]}
            args={[0.6, 0.1, 0.7]}
          />
          {/* MB FLAT VENT 2 */}
          <CuboidCollider position={[-2.7, 0.75, 2.9]} args={[0.6, 0.1, 0.7]} />
          {/* MB SMALL VENTS */}
          <CuboidCollider
            position={[3.15, 0.75, -2.9]}
            args={[0.21, 0.1, 0.2]}
          />
          <CuboidCollider position={[3.1, 0.75, 0.7]} args={[0.21, 0.1, 0.2]} />
          <CuboidCollider position={[3.1, 0.75, 3.1]} args={[0.21, 0.1, 0.2]} />

          {/* RB FLAT VENT 1 */}
          <CuboidCollider position={[8.3, 0.75, 1.4]} args={[0.6, 0.1, 0.7]} />
          {/* RB FLAT VENT 2 */}
          <CuboidCollider position={[8.3, 0.75, 2.9]} args={[0.6, 0.1, 0.7]} />

          {/* RB SMALL VENTS */}
          <CuboidCollider
            position={[14.8, 0.75, -3.24]}
            args={[0.2, 0.1, 0.2]}
          />
          <CuboidCollider position={[14.45, 0.75, 1]} args={[0.2, 0.1, 0.2]} />
          <CuboidCollider position={[14.45, 0.75, 3]} args={[0.2, 0.1, 0.2]} />

          {/* RB RADIO TOWER */}
          <CuboidCollider
            position={[8.3, 0.75, -3.24]}
            args={[0.1, 0.1, 0.1]}
          />
        </RigidBody>
      </group>

      {/* CHARACTER */}
      <CharacterController />
    </>
  );
}

export default Experience;
