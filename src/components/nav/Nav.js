import React from "react";
import { Flex, Theme } from "@radix-ui/themes";
import { Home, Blog, ThreeD, Insomniac } from "../../svg/Nav";
import NavItem from "./NavItem";

function Nav() {
  return (
    <Theme accentColor="gray" radius="small">
      <Flex gap="3">
        <NavItem title="Home" to="/">
          <Home />
        </NavItem>
        <NavItem title="Blog" to="/blog">
          <Blog />
        </NavItem>
        <NavItem title="3D" to="/3d">
          <ThreeD />
        </NavItem>
        <NavItem title="Game" to="/game">
          <Insomniac />
        </NavItem>
      </Flex>
    </Theme>
  );
}

export default Nav;
