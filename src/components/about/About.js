import React from "react";
import CanvasComponent from "../CanvasComponent";

function About() {
  return (
    <div class="app-container">
      <div class="info-block">
        <h1>Hi! I'm Jerry.</h1>
      </div>
      <CanvasComponent
        modelPath="/spiderman.glb"
        camera={{ fov: 45 }}
        dpr={[1, 2]}
        controls={{ speed: 1.5, zoom: 0.5, polar: [-0.1, Math.PI / 4] }}
        scale={0.01}
        style={{ width: "100%", height: "100%" }}
      />
      <p>
        I'm a software engineering student at McGill, about to enter full-time
        work at Unity. I hobby in 3D Modelling, game development and other forms
        of art.
      </p>
    </div>
  );
}

export default About;
