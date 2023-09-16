import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Model({ modelPath, scale, rotationSpeed, ...props }) {
  const { scene } = useGLTF(modelPath);
  useFrame(({ clock }) => {
    scene.rotation.y = clock.getElapsedTime() * rotationSpeed;
  });
  return <primitive object={scene} scale={scale} {...props} />;
}

function CanvasComponent({
  modelPath,
  rotationSpeed,
  camera,
  dpr,
  controls,
  scale,
  intensity,
  style,
}) {
  return (
    <div
      style={{
        ...style,
        position: "relative",
      }}
    >
      <Canvas dpr={dpr} camera={camera}>
        <color attach="background" args={["#181818"]} />
        <PresentationControls
          speed={controls.speed}
          global
          zoom={controls.zoom}
          polar={controls.polar}
        >
          <Stage intensity={intensity}>
            <Model
              modelPath={modelPath}
              rotationSpeed={rotationSpeed}
              scale={scale}
            />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default CanvasComponent;
