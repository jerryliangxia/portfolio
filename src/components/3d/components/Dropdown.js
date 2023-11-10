import React, { useState } from "react";
import { Button, Text, Flex } from "@radix-ui/themes";
import { DropdownArrowUp, DropdownArrowDown } from "../../../svg/Button";
import ImagePopup from "../../ImagePopup";
import YouTubeBlock from "./YouTubeBlock";
import CanvasComponent from "../../CanvasComponent";

function Dropdown({ title, text, src, youtubeId, modelPath, color = "white" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        onClick={toggleDropdown}
        variant="ghost"
        radius="small"
        color={color}
      >
        {isOpen ? (
          <DropdownArrowUp
            color={color === "white" ? "rgba(177,177,177,1)" : color}
          />
        ) : (
          <DropdownArrowDown
            color={color === "white" ? "rgba(177,177,177,1)" : color}
          />
        )}
        {title}
      </Button>
      <Flex
        gap="2"
        direction="column"
        className={`dropdown-content ${isOpen ? "open" : ""}`}
      >
        {src !== "" && <ImagePopup src={src} />}
        {youtubeId !== "" && <YouTubeBlock youtubeId={youtubeId} />}
        <Text color="gray" size="2">
          {text}
        </Text>
        {modelPath !== "" && (
          <CanvasComponent
            modelPath={modelPath}
            intensity={0}
            camera={{ fov: 22.5 }}
            style={{ maxWidth: "100%", height: "50vh" }}
          />
        )}
      </Flex>
    </div>
  );
}

export default Dropdown;
