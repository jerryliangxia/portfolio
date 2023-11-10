import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Text, Flex } from "@radix-ui/themes";

function NavItem({ title, to, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {isMobile ? (
        <Link to={to} style={{ textDecoration: "none" }}>
          <Button variant="ghost">
            <Text
              color="white"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {title}
            </Text>
          </Button>
        </Link>
      ) : (
        <Link
          to={to}
          style={{ textDecoration: "none" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Button
            variant="ghost"
            style={{
              cursor: "pointer",
              transition: "all 0.3s ease",
              ":hover": { opacity: 0.7 },
            }}
          >
            <Flex direction="row" gap="1" align="center" justify="center">
              <div
                style={{
                  textDecoration: "none",
                  paddingTop: "4px",
                }}
              >
                {React.cloneElement(children, { isWhite: isHovered })}
              </div>
              <Text
                color={isHovered ? "white" : "initial"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.3s ease-in-out",
                  transform: isHovered ? "translateX(1px)" : "initial",
                }}
              >
                {title}
              </Text>
            </Flex>
          </Button>
        </Link>
      )}
    </>
  );
}

export default NavItem;
