import React from "react";
import { Text, Flex } from "@radix-ui/themes";
import ImagePopup from "../../ImagePopup";
import YouTubeBlock from "./YouTubeBlock";

function Documentation({ text, src, youtubeId }) {
  return (
    <div>
      <Flex gap="2" direction="column">
        {src !== "" && <ImagePopup src={src} />}
        {youtubeId !== "" && <YouTubeBlock youtubeId={youtubeId} />}
        <Text color="gray" size="2">
          {text}
        </Text>
      </Flex>
    </div>
  );
}

export default Documentation;
