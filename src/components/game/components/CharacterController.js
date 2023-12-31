import React, { useRef, useEffect, useState } from "react";
import { CapsuleCollider, RigidBody, vec3 } from "@react-three/rapier";
import SpiderManPS5 from "./SpiderManPS5";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { Controls } from "../Game";
import { useGameStore } from "./Store";
import Venom from "./Venom";
import Cube from "./Cube";

import * as THREE from "three";

// const JUMP_FORCE = 0.5;
const MOVEMENT_SPEED = 0.1;
const MAX_VEL = 3;
const RUN_VEL = 1.5;
const CAMERA_DISTANCE = 4;

function CharacterController() {
  const { characterState, setCharacterState } = useGameStore((state) => ({
    character: state.characterState,
    setCharacterState: state.setCharacterState,
    gameState: state.gameState,
  }));

  const [isColliding, setIsColliding] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState("SpiderManPS5");
  const spacePressed = useKeyboardControls((state) => state[Controls.jump]);

  useEffect(() => {
    if (spacePressed) {
      setCurrentCharacter((prev) => {
        if (prev === "SpiderManPS5") return "Venom";
        if (prev === "Venom") return "Cube";
        return "SpiderManPS5";
      });
    }
  }, [spacePressed]);

  useEffect(() => {
    setCharacterState("Land");
    const timer = setTimeout(() => {
      setCharacterState("Idle");
    }, 1000); // Replace 1000 with the duration of the "Land" animation in milliseconds

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, []);

  // const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );

  const rigidBody = useRef();
  const isOnFloor = useRef(false);

  useFrame((state, delta) => {
    const impulse = { x: 0, y: 0, z: 0 };
    // if (jumpPressed && isOnFloor.current) {
    //   impulse.y += JUMP_FORCE;
    //   setCharacterState("Jump"); // Trigger the "Jump" animation
    //   setTimeout(() => {
    //     isOnFloor.current = false; // Set isOnFloor to false after a delay
    //   }, 1);
    // }
    // if (!jumpPressed && isOnFloor.current) {
    //   setCharacterState("Idle");
    // }

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

    if (Math.abs(linvel.x) > RUN_VEL || Math.abs(linvel.z) > RUN_VEL) {
      if (characterState !== "Run") {
        setCharacterState("Run");
      }
    } else {
      if (characterState !== "Idle") {
        setCharacterState("Idle");
      }
    }

    if (changeRotation && !isColliding) {
      const angle = Math.atan2(linvel.x, linvel.z);
      character.current.rotation.y = angle;
    }

    // CAMERA FOLLOW
    const characterWorldPosition = character.current.getWorldPosition(
      new THREE.Vector3()
    );

    const targetCameraPosition = new THREE.Vector3(
      characterWorldPosition.x,
      0,
      characterWorldPosition.z + CAMERA_DISTANCE
    );

    // Move the camera upon entering
    targetCameraPosition.y = 1;
    state.camera.position.lerp(targetCameraPosition, delta * 2);

    state.camera.position.x = characterWorldPosition.x;
    state.camera.position.z = characterWorldPosition.z + CAMERA_DISTANCE;

    const targetLookAt = new THREE.Vector3(
      characterWorldPosition.x,
      0,
      characterWorldPosition.z
    );

    const direction = new THREE.Vector3();
    state.camera.getWorldDirection(direction);

    const position = new THREE.Vector3();
    state.camera.getWorldPosition(position);

    const currentLookAt = position.clone().add(direction);
    const lerpedLookAt = new THREE.Vector3();

    lerpedLookAt.lerpVectors(currentLookAt, targetLookAt, delta * 2);

    state.camera.lookAt(lerpedLookAt);
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
        onCollisionEnter={({ other }) => {
          if (other.rigidBodyObject.name !== "ground") {
            setIsColliding(true);
          }
          isOnFloor.current = true;
        }}
        onCollisionExit={() => {
          setIsColliding(false);
        }}
        onIntersectionEnter={({ other }) => {
          if (other.rigidBodyObject.name === "void") {
            resetPosition();
          }
        }}
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
        <group ref={character}>
          {currentCharacter === "SpiderManPS5" && <SpiderManPS5 />}
          {currentCharacter === "Venom" && <Venom />}
          {currentCharacter === "Cube" && <Cube />}
        </group>
      </RigidBody>
    </group>
  );
}

export default CharacterController;
