import React, { useState, useRef } from "react";
import ProgressiveImg from "./ProgressiveImg";

function ImagePopup({ src }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const isMobile = window.innerWidth <= 768;
  const imgRef = useRef();

  const handleImageLoad = () => {
    if (imgRef.current) {
      setImgWidth(imgRef.current.offsetWidth);
      setImgHeight(imgRef.current.offsetHeight);
    }
  };

  return (
    <>
      {!isOpen && (
        <img
          ref={imgRef}
          src={src}
          style={{ width: "100%", cursor: "zoom-in" }}
          onClick={() => setIsOpen(true)}
          onLoad={handleImageLoad}
          alt=""
        />
      )}
      {isOpen && <div style={{ width: imgWidth, height: imgHeight }} />}
      {isOpen && !isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setIsOpen(false)}
        >
          <img src={src} style={{ maxWidth: "90%", maxHeight: "90%" }} alt="" />
        </div>
      )}
    </>
  );
}

export default ImagePopup;