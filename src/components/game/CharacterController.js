import React, { useRef, useState, useMemo } from "react";
import { CapsuleCollider, RigidBody, vec3 } from "@react-three/rapier";
import SpiderManPS5 from "./SpiderManPS5";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { Controls } from "./Game";

import * as THREE from "three";

const JUMP_FORCE = 0.5;
const MOVEMENT_SPEED = 0.1;
const MAX_VEL = 3;
const RUN_VEL = 1.5;

function CharacterController() {
  const [characterState, setCharacterState] = useState("Idle");
  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );

  const rigidBody = useRef();
  const isOnFloor = useRef(false);

  useFrame((state) => {
    const impulse = { x: 0, y: 0, z: 0 };
    if (jumpPressed && isOnFloor.current) {
      impulse.y += JUMP_FORCE;
      isOnFloor.current = false;
    }

    const linvel = rigidBody.current.linvel();
    let changeRotation = false;
    if (rightPressed && linvel.x < MAX_VEL) {
      impulse.x += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (leftPressed && linvel.x > -MAX_VEL) {
      impulse.x -= MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (backPressed && linvel.z < MAX_VEL) {
      impulse.z += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (forwardPressed && linvel.z > -MAX_VEL) {
      impulse.z -= MOVEMENT_SPEED;
      changeRotation = true;
    }

    rigidBody.current.applyImpulse(impulse, true);
    if (changeRotation) {
      const angle = Math.atan2(linvel.x, linvel.z);
      character.current.rotation.y = angle;
    }

    if (Math.abs(linvel.x) > RUN_VEL || Math.abs(linvel.z) > RUN_VEL) {
      if (characterState !== "Run") {
        setCharacterState("Run");
      } else {
        if (characterState !== "Idle") {
          setCharacterState("Idle");
        }
      }
    }

    // CAMERA FOLLOW
    const characterWorldPosition = character.current.getWorldPosition(
      new THREE.Vector3()
    );

    state.camera.position.x = characterWorldPosition.x;
    state.camera.position.z = characterWorldPosition.z + 14;

    const targetLookAt = new THREE.Vector3(
      characterWorldPosition.x,
      0,
      characterWorldPosition.z
    );

    state.camera.lookAt(targetLookAt);
  });
  const character = useRef();

  const resetPosition = () => {
    rigidBody.current.setTranslation(vec3({ x: 0, y: 0, z: 0 }));
    rigidBody.current.setLinvel(vec3({ x: 0, y: 0, z: 0 }));
  };

  return (
    <group>
      <RigidBody
        ref={rigidBody}
        colliders={false}
        scale={[0.5, 0.5, 0.5]}
        enabledRotations={[false, false, false]}
        onCollisionEnter={() => {
          isOnFloor.current = true;
        }}
        onIntersectionEnter={({ other }) => {
          if (other.rigidBodyObject.name === "void") {
            resetPosition();
          }
        }}
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
        <group ref={character}>
          <SpiderManPS5 characterState={characterState} />
        </group>
      </RigidBody>
    </group>
  );
}

export default CharacterController;
