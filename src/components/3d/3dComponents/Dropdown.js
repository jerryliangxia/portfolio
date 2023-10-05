import React, { useState } from "react";
import { Button, Text } from "@radix-ui/themes";
import { DropdownArrowUp, DropdownArrowDown } from "../../../svg/Button";
import ImagePopup from "../../ImagePopup";
import YouTubeBlock from "./YouTubeBlock";

function Dropdown({ title, text, src, youtubeId }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ padding: "10px" }}>
      <Button
        onClick={toggleDropdown}
        variant="ghost"
        radius="small"
        color="white"
      >
        {isOpen ? <DropdownArrowUp /> : <DropdownArrowDown />}
        {title}
      </Button>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        {src !== "" && <ImagePopup src={src} />}
        {youtubeId !== "" && <YouTubeBlock youtubeId={youtubeId} />}
        <Text
          color="gray"
          size="2"
          style={{ marginTop: src === "" && youtubeId === "" ? "0px" : "8px" }}
        >
          {text}
        </Text>
      </div>
    </div>
  );
}

export default Dropdown;
