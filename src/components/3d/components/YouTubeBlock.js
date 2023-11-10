import React from "react";

function YouTubeBlock({ youtubeId }) {
  return (
    <>
      {youtubeId && (
        <div
          style={{ width: "100%", paddingTop: "56.25%", position: "relative" }}
        >
          <iframe
            title={youtubeId}
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
