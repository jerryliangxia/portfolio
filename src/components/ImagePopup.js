import React, { useState } from "react";

function ImagePopup({ src }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <img
        src={src}
        style={{ width: "100%", cursor: "zoom-in" }}
        onClick={() => setIsOpen(true)}
        alt=""
      />
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
