import React from "react";
import { Button, Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex gap="3">
      <Button variant="ghost">
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Text color="white" size="2">
            About
          </Text>
        </Link>
      </Button>
      <Button variant="ghost">
        <Link to="/blog" style={{ textDecoration: "none" }}>
          <Text color="white" size="2">
            Blog
          </Text>
        </Link>
      </Button>
    </Flex>
  );
}

export default Navbar;
