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
      <Text size="5">
        Advanced Suit 2.0
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          style={{
            marginLeft: "6px",
            position: "relative",
            top: "1px",
          }}
        >
          <path
            d="M18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"
            fill="rgba(149,149,149,1)"
          ></path>
        </svg>
      </Text>
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
