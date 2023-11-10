import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Text, Link as RadixLink } from "@radix-ui/themes";
import { ThreeD } from "../../svg/Nav";
import { Arrow } from "../../svg/Button";

function ThreeDButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Link
        to="/3d"
        style={{
          textDecoration: "none",
          justifyContent: "start",
          alignContent: "start",
        }}
      >
        <RadixLink
          to="/3d"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Flex gap="1" direction="row" align="center">
            <ThreeD isWhite={isHovered} isButton={isHovered} />
            <Text style={{ color: "white" }} as="p">
              3D Work
              <Arrow />
            </Text>
          </Flex>
        </RadixLink>
      </Link>
    </div>
  );
}

export default ThreeDButton;
