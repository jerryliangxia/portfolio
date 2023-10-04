import React from "react";
import { Link } from "react-router-dom";
import { Button, Text, Tooltip } from "@radix-ui/themes";

function NavItem({ title, to, children }) {
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      {isMobile ? (
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
      ) : (
        <Tooltip content={title}>
          <Button variant="ghost">
            <Link to={to} style={{ textDecoration: "none" }}>
              {children}
            </Link>
          </Button>
        </Tooltip>
      )}
    </>
  );
}

export default NavItem;
