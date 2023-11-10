import React, { useRef, useState } from "react";

function ImageRotation({ path, mainImageIndex = 0 }) {
  const isMobile = window.innerWidth <= 768;
  const imgRef = useRef();
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  const images = angles.map((angle) => `${path}${angle}.png`);
  const [currentImage, setCurrentImage] = useState(images[mainImageIndex]);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const width = rect.right - rect.left;
    const part = Math.round((x / width) * (images.length - 1));
    setCurrentImage(images[part]);
  };

  const handleMouseLeave = () => {
    setCurrentImage(images[mainImageIndex]);
  };

  return (
    <div className="image-class">
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
          }}
          alt=""
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
}

export default ImageRotation;
