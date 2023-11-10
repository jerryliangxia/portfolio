import React from "react";
import { Text, Flex } from "@radix-ui/themes";
import ImagePopup from "../../general/ImagePopup";
import YouTubeBlock from "./YouTubeBlock";

function Documentation({ text, src, youtubeId }) {
  return (
    <div>
      <Flex gap="6" direction="column">
        <Text color="gray" size="2">
          {text}
        </Text>
        {src !== "" && <ImagePopup src={src} />}
        {youtubeId !== "" && <YouTubeBlock youtubeId={youtubeId} />}
      </Flex>
    </div>
  );
}

export default Documentation;
