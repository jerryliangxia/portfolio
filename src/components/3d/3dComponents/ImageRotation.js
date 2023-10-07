import React, { useRef, useState } from "react";

function ImageRotation({ path }) {
  const isMobile = window.innerWidth <= 768;
  const imgRef = useRef();
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
    <>
      {" "}
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
    </>
  );
}

export default ImageRotation;
