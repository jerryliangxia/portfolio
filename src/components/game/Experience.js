import React, { useRef, useEffect, useState } from "react";
import { useKeyPress } from "react-use";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useCursor,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import SpiderManPS5 from "./SpiderManPS5";
import * as THREE from "three";

function Experience() {
  const [onFloor, setOnFloor] = useState(false);
  const [positionMatrix, setPositionMatrix] = useState([0, 0, 0]);
  const [position, setPosition] = useState([0, 0, 0]);

  useCursor(onFloor);

  const useCodes = () => {
    const codes = useRef(new Set());
    useEffect(() => {
      const onKeyDown = (e) => codes.current.add(e.code);
      const onKeyUp = (e) => codes.current.delete(e.code);
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);
      return () => {
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("keyup", onKeyUp);
      };
    }, []);
    return codes;
  };

  function WasdControls() {
    // const group = useRef();
    // console.log(group);
    let vec = new THREE.Vector3();
    const code = useCodes();

    const moveForward = (distance) => {
      //   vec.setFromMatrixColumn(positionMatrix, 0);
      // vec.crossVectors(group.current.up, vec);
      vec = new THREE.Vector3(0, 0, 1);
      const newPosition = new THREE.Vector3(...position).addScaledVector(
        vec,
        distance
      );
      console.log("Distance from move forward:", distance);
      //   console.log("Scaled vector from move forward:", vec);
      //   console.log("New position from move forward:", newPosition);
      setPosition([newPosition.x, 0, newPosition.z]);
    };

    const moveRight = (distance) => {
      // vec.setFromMatrixColumn(group.current.matrix, 0);
      vec = new THREE.Vector3(-1, 0, 0);
      const newPosition = new THREE.Vector3(...position).addScaledVector(
        vec,
        distance
      );
      console.log("Distance from move right:", distance);
      console.log("Scaled vector from move right:", vec);
      console.log("New position from move right:", newPosition);
      setPosition([newPosition.x, 0, newPosition.z]);
      // setPosition(position.addScaledVector(vec, distance));
    };

    useFrame((_, delta) => {
      const speed = code.current.has("ShiftLeft") ? 5 : 2;
      if (code.current.has("KeyW")) {
        // console.log("W");
        moveForward(delta * speed);
      }
      if (code.current.has("KeyA")) {
        // console.log("A");
        moveRight(-delta * speed);
      }
      if (code.current.has("KeyS")) {
        // console.log("S");
        moveForward(-delta * speed);
      }
      if (code.current.has("KeyD")) {
        // console.log("D");
        moveRight(delta * speed);
      }
    });

    // return null;
  }

  WasdControls();

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
        // onClick={(e) => setPosition([e.point.x, 0, e.point.z])}
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
