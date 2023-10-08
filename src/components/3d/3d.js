import React from "react";
import { Link } from "react-router-dom";
import SpidermanShowcase from "./3dComponents/SpidermanShowcase";
import { Flex, Text, Heading } from "@radix-ui/themes";
import Divider from "./3dComponents/Divider";
import ImagePopup from "../ImagePopup";
import CanvasComponent from "../CanvasComponent";
import Documentation from "./3dComponents/Documentation";
import { ThreeD as ThreeDInfo } from "../Info";
import GifPopup from "./3dComponents/GifPopup";
import ImageRotation from "./3dComponents/ImageRotation";
import { Look } from "../../svg/Button";
import Dropdown from "./3dComponents/Dropdown";

function DateLog({ date }) {
  return <Text size="2">Finished {date}.</Text>;
}
function FullSuit() {
  return (
    <>
      <Divider />
      <Text size="5">
        Marvel's Spider-Man 2: Advanced Suit 2.0 <Look />
      </Text>
      <ImageRotation path="images/3d/ps5_full_suit/rotation_stance/" />
      <DateLog date="October 2, 2023" />
      <ImagePopup src="images/3d/ps5_full_suit/stance.png" />
      <Documentation
        text={ThreeDInfo.fullSuit}
        src="images/3d/spiderman_low_poly_scope.png"
      />
      <ImagePopup src="images/3d/ps5_full_suit/dual_180.png" />
    </>
  );
}

function Webshooter() {
  return (
    <>
      <Divider />
      <Text size="5">
        Spider-Man Web Shooter <Look />
      </Text>
      <ImageRotation path="images/3d/webshooter/" />
      <Dropdown title="Interactive 3D Model" modelPath="webshooter.glb" />
      <DateLog date="October 7, 2023" />
      <Documentation
        text={ThreeDInfo.webshooterInit}
        src="images/3d/rubber_mat.png"
      />
      <Documentation text={ThreeDInfo.webshooter} />
    </>
  );
}

function NormalMask() {
  return (
    <>
      <Divider />
      <Text size="5">Spider-Man Mask</Text>
      <ImagePopup src="images/3d/normal_mask.png" />
      <DateLog date="September 15, 2023" />
      <Documentation text={ThreeDInfo.mask} />
      <ImagePopup src="images/3d/normal_mask_shader_editor.png" />
      <Documentation text={ThreeDInfo.maskShaderEditor} />
    </>
  );
}

function SpidermanHand() {
  return (
    <>
      <Divider />
      <Text size="5">Spider-Man Hand</Text>
      <CanvasComponent
        modelPath="spiderman_hand_showcase.glb"
        intensity={0}
        camera={{ fov: 22.5 }}
        style={{ maxWidth: "100%", height: "50vh" }}
      />
      <DateLog date="October 2, 2023" />
      <Documentation text={ThreeDInfo.hand} />
    </>
  );
}

function SymbioteMask() {
  return (
    <>
      <Divider />
      <Text size="5">Symbiote Mask</Text>
      <ImagePopup src="images/3d/symbiote_mask.png" />
      <DateLog date="September 22, 2023" />
      <Documentation text={ThreeDInfo.symbiote} />
      <ImagePopup src="images/3d/symbiote_inner_shader_editor.png" />
      <Documentation text={ThreeDInfo.symbioteShaderEditor} />
    </>
  );
}

function Animation({ isMobile }) {
  return (
    <>
      <Divider />
      <Text size="5">Animation Contest</Text>
      {isMobile ? (
        <img src="gifs/blender-contest/4.gif" />
      ) : (
        <GifPopup
          placeHolderSrc="images/3d/anim_placeholder.png"
          src="gifs/blender-contest/4.gif"
        />
      )}
      <DateLog date="August 27, 2023" />
      <Documentation text={ThreeDInfo.animation} />
      <Divider />
    </>
  );
}

function Conclusion() {
  return (
    <Text size="3">
      If you haven't already, check out the{" "}
      <Link style={{ textDecoration: "none", color: "#BBBBBB" }} to="/game">
        game
      </Link>{" "}
      section of my website!
    </Text>
  );
}

function ThreeD() {
  const isMobile = window.innerWidth <= 768;

  return (
    <Flex style={{ paddingBottom: "5vh" }} gap="4" direction="column">
      <Heading>3D Modeling</Heading>
      <Text color="gray" as="p" style={{ paddingBottom: "20px" }}>
        {ThreeDInfo.about}
      </Text>
      <SpidermanShowcase />
      <Text color="gray" as="p" style={{ paddingBottom: "20px" }}>
        {ThreeDInfo.teamwork}
      </Text>
      <Text color="gray" as="p">
        {ThreeDInfo.insomniac}
      </Text>
      <FullSuit />
      <Webshooter />
      <NormalMask />
      <SymbioteMask />
      <SpidermanHand />
      <Animation isMobile={isMobile} />
      <Conclusion />
    </Flex>
  );
}

export default ThreeD;
