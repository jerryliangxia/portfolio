import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Stage, PresentationControls } from "@react-three/drei";

export default function MultiModelShowcase({ count }) {
  const ref = useRef();
  const polyhedron = ["spiderman.glb", "spiderman_symbiote.glb"];

  function Model({ modelPath, scale = 0.2, rotationSpeed = 0.5, ...props }) {
    const { scene } = useGLTF(`models/${modelPath}`);
    useFrame(({ clock }) => {
      scene.rotation.y = -clock.getElapsedTime() * rotationSpeed;
    });
    return <primitive object={scene} scale={scale} {...props} />;
  }

  return (
    <PresentationControls
      speed={0.5}
      global
      zoom={0.5}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage shadows={false} intensity={count == 0 ? 0.1 : 10}>
        <Model modelPath={polyhedron[count]} ref={ref} scale={1} />
      </Stage>
    </PresentationControls>
  );
}
