import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SpidermanShowcase from "./3dComponents/SpidermanShowcase";
import { Flex, Text } from "@radix-ui/themes";
import Divider from "./3dComponents/Divider";
import ImagePopup from "../ImagePopup";
import CanvasComponent from "../CanvasComponent";
import YouTubeBlock from "./3dComponents/YouTubeBlock";

function ThreeD() {
  const isMobile = window.innerWidth <= 768;

  const imgRef = useRef();
  const path = "images/3d/ps5_full_suit/rotation/";
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  const images = angles.map((angle) => `${path}${angle}.png`);
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const width = rect.right - rect.left;
    const part = Math.round((x / width) * (images.length - 1));
    setCurrentImage(images[part]);
  };

  const handleMouseLeave = () => {
    setCurrentImage(images[0]);
  };

  return (
    <Flex
      style={{ paddingTop: "20px", paddingBottom: "5vh" }}
      align="center"
      gap="4"
      direction="column"
    >
      <SpidermanShowcase />
      <Divider />
      <Text size="5">Advanced Suit 2.0</Text>
      {isMobile ? (
        <img
          ref={imgRef}
          src={currentImage}
          style={{
            width: "100%",
          }}
          alt=""
        />
      ) : (
        <img
          ref={imgRef}
          src={currentImage}
          style={{
            width: "100%",
            cursor: "ew-resize",
          }}
          alt=""
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      )}
      <ImagePopup src="images/3d/ps5_full_suit/stance.png" />
      <ImagePopup src="images/3d/ps5_full_suit/full_scope.png" />
      <ImagePopup src="images/3d/ps5_full_suit/dual_180.png" />
      <ImagePopup src="images/3d/ps5_full_suit/shader_editor.png" />
      <ImagePopup src="images/3d/normal_mask_annotated.png" />
      <CanvasComponent
        modelPath="spiderman_hand_showcase.glb"
        intensity={0}
        camera={{ fov: 22.5 }}
        style={{ maxWidth: "100%", height: "50vh" }}
      />
      <Text align="start" justify="end" size="1">
        Finished September 21, 2023.
      </Text>
      <ImagePopup src="images/3d/symbiote_annotated.png" />
      <ImagePopup src="images/3d/symbiote_inner.png" />
      <Divider />
      <Text size="5">Timelapses</Text>
      <YouTubeBlock youtubeId="jAWvmQtjtN4" />
      <YouTubeBlock youtubeId="HzNK5DMSaXI" />
      <YouTubeBlock youtubeId="ssFuIBbE0hQ" />
      <Divider />
      <Text size="5">Processes</Text>
      <YouTubeBlock youtubeId="RK-2gIuRXNw" />
      <Text size="3">
        If you haven't already, check out the{" "}
        <Link style={{ textDecoration: "none", color: "#BBBBBB" }} to="/game">
          game
        </Link>{" "}
        section of my website!
      </Text>
    </Flex>
  );
}

export default ThreeD;
