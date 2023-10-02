import React from "react";
import { Flex, Text } from "@radix-ui/themes";

function YouTubeBlock({
  leftText,
  rightTitle,
  rightSubtitle,
  rightText,
  isLink = false,
  href = "",
  youtubeId, // Add youtubeId prop
}) {
  return (
    <>
      <Flex gap="3" direction="row">
        {/* ... existing code ... */}
      </Flex>
      {youtubeId && (
        <div
          style={{ width: "100%", paddingTop: "56.25%", position: "relative" }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </>
  );
}

export default YouTubeBlock;
