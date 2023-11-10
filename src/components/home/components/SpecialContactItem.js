import React from "react";
import { Flex, Text, Link as RadixLink } from "@radix-ui/themes";

function SpecialContactItem({ href, src, title }) {
  return (
    <RadixLink
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      size="2"
      style={{
        transition: "transform 0.3s ease-in-out",
      }}
      className="post-div"
    >
      <Flex gap="2" align="center" direction="row">
        <img src={src} style={{ width: "20%", objectFit: "contain" }} alt="" />
        <Text>{title}</Text>
      </Flex>
    </RadixLink>
  );
}

export default SpecialContactItem;
