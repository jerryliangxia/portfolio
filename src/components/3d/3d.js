import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SpidermanShowcase from "./3dComponents/SpidermanShowcase";
import { Flex, Text, Heading, Link as RadixLink } from "@radix-ui/themes";
import Divider from "./3dComponents/Divider";
import ImagePopup from "../ImagePopup";
import CanvasComponent from "../CanvasComponent";
import Dropdown from "./3dComponents/Dropdown";
import { ThreeD as ThreeDInfo } from "../Info";

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
    <Flex style={{ paddingBottom: "5vh" }} gap="4" direction="column">
      <Heading>3D Modeling</Heading>
      <Text color="gray" as="p" style={{ paddingBottom: "20px" }}>
        {ThreeDInfo.about}
      </Text>
      <SpidermanShowcase style={{ marginTop: "100px" }} />
      <Text color="gray" as="p" style={{ paddingBottom: "20px" }}>
        {ThreeDInfo.teamwork}
      </Text>
      <Text color="gray" as="p" style={{ paddingBottom: "20px" }}>
        {ThreeDInfo.timeline}
      </Text>
      <Dropdown title="Note to Insomniac Games" text={ThreeDInfo.insomniac} />
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
      <Dropdown
        title="Full Suit Process"
        text={ThreeDInfo.fullSuit}
        src="images/3d/spiderman_low_poly_scope.png"
      />
      <ImagePopup src="images/3d/ps5_full_suit/stance.png" />
      {!isMobile && (
        <Text color="gray" size="3">
          Click any to enlarge image.
        </Text>
      )}
      <ImagePopup src="images/3d/ps5_full_suit/full_scope.png" />
      <ImagePopup src="images/3d/ps5_full_suit/dual_180.png" />
      <ImagePopup src="images/3d/ps5_full_suit/shader_editor.png" />
      <Dropdown
        src="images/3d/mask_mat.png"
        title="Suit Material"
        text={ThreeDInfo.maskShaderEditor}
      />
      <ImagePopup src="images/3d/normal_mask_annotated.png" />
      <Dropdown
        title="Mask Process"
        text={ThreeDInfo.mask}
        youtubeId="vXmO4obPq2Q"
      />
      <CanvasComponent
        modelPath="spiderman_hand_showcase.glb"
        intensity={0}
        camera={{ fov: 22.5 }}
        style={{ maxWidth: "100%", height: "50vh" }}
      />
      <Flex direction="column" style={{ textAlign: "right" }}>
        <Text size="2">Finished September 21, 2023.</Text>
        <Text size="2">
          View all my models{" "}
          <RadixLink
            href="https://sketchfab.com/jerrylxia"
            target="_blank"
            rel="noopener noreferrer"
            color="white"
          >
            here
          </RadixLink>{" "}
          on Sketchfab.
        </Text>
      </Flex>
      <ImagePopup src="images/3d/symbiote_annotated.png" />
      <ImagePopup src="images/3d/symbiote_inner.png" />
      <Dropdown
        src="images/3d/symbiote_mat.png"
        title="Symbiote Material"
        text={ThreeDInfo.symbioteShaderEditor}
      />
      <ImagePopup src="gifs/blender-contest/4.gif" />
      <Dropdown
        title="Animation Process"
        text={ThreeDInfo.animation}
        youtubeId="RK-2gIuRXNw"
      />
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
