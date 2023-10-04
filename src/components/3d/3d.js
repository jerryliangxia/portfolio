import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SpidermanShowcase from "./3dComponents/SpidermanShowcase";
import { Flex, Text } from "@radix-ui/themes";
import Divider from "./3dComponents/Divider";
import ImagePopup from "./3dComponents/ImagePopup";
import CanvasComponent from "../CanvasComponent";
import YouTubeBlock from "./3dComponents/YouTubeBlock";

function ThreeD() {
  const isMobile = window.innerWidth <= 768;
  const imgRef = useRef();
  const images = [
    "images/3d/ps5_full_suit/portrait_annotated.png",
    "images/3d/ps5_full_suit/90.png",
    "images/3d/ps5_full_suit/180.png",
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const width = rect.right - rect.left;
    const part = Math.floor((x / width) * images.length);
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
      <img
        ref={imgRef}
        src={currentImage}
        style={{ width: "100%" }}
        alt=""
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      {!isMobile && <Divider />}
      {!isMobile && (
        <Text size="3" color="gray">
          Click to enlarge photos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            style={{
              marginLeft: "3px",
              position: "relative",
              top: "3px",
            }}
          >
            <path
              d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"
              fill="rgba(149,149,149,1)"
            ></path>
          </svg>
        </Text>
      )}
      <ImagePopup src="images/3d/ps5_full_suit/stance.png" />
      <ImagePopup src="images/3d/ps5_full_suit/full_scope.png" />
      <ImagePopup src="images/3d/ps5_full_suit/dual_180_stance.png" />
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
      <Divider />
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