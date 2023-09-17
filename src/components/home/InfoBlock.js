import React from "react";
import { Flex, Text } from "@radix-ui/themes";

function InfoBlock({ leftText, rightTitle, rightSubtitle, rightText }) {
  return (
    <>
      <Flex gap="3" direction="row">
        <Text color="gray" style={{ width: "30%" }}>
          {leftText}
        </Text>
        <Flex gap="3" direction="column" style={{ width: "70%" }}>
          <Flex gap="1" direction="column">
            <Text as="p">{rightTitle}</Text>
            <Text as="p" color="gray">
              {rightSubtitle}
            </Text>
          </Flex>
          <Text as="p" color="gray">
            {rightText}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default InfoBlock;
