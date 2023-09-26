import { OrbitControls, Environment } from "@react-three/drei";
import { SpiderManPS5 } from "./SpiderManPS5";

function Experience() {
  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <OrbitControls />
      <SpiderManPS5 />
    </>
  );
}

export default Experience;
