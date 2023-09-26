import React from "react";
import { Button, Flex, Text, Theme } from "@radix-ui/themes";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Theme accentColor="gray" radius="small">
      <Flex gap="3">
        <Button variant="ghost" color="white">
          <Link to="/" style={{ textDecoration: "none" }}>
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
        <Button variant="ghost">
          <Link to="/3d" style={{ textDecoration: "none" }}>
            <Text color="white" size="2">
              3D
            </Text>
          </Link>
        </Button>
        <Button variant="ghost">
          <Link to="/game" style={{ textDecoration: "none" }}>
            <Text color="white" size="2">
              Game
            </Text>
          </Link>
        </Button>
      </Flex>
    </Theme>
  );
}

export default Nav;
