import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model({ modelPath, scale, ...props }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={scale} {...props} />;
}

function CanvasComponent({ modelPath, camera, dpr, controls, scale, style }) {
  return (
    <div style={style}>
      <Canvas dpr={dpr} camera={camera} style={style}>
        <color attach="background" args={["#101010"]} />
        <PresentationControls
          speed={controls.speed}
          global
          zoom={controls.zoom}
          polar={controls.polar}
        >
          <Stage environment={null}>
            <Model modelPath={modelPath} scale={scale} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default CanvasComponent;
