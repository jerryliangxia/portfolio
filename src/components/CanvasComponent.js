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
  rotationSpeed = 0.5,
  camera = { fov: 45 },
  dpr = [1, 2],
  controls = { speed: 1.5, zoom: 0.5, polar: [-0.1, Math.PI / 4] },
  scale = 0.1,
  intensity = 1,
  shadows = true,
  style,
}) {
  return (
    <div
      style={{
        ...style,
        position: "relative",
      }}
    >
      <Canvas dpr={dpr} camera={camera} shadows>
        <color attach="background" args={["#181818"]} />
        <PresentationControls
          speed={controls.speed}
          global
          shadows
          zoom={controls.zoom}
          polar={controls.polar}
        >
          <Stage shadows={shadows} intensity={intensity}>
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
