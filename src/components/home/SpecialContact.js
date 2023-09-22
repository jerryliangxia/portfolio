import React from "react";
import { Flex, Text, Link as RadixLink } from "@radix-ui/themes";
import { flexGaps } from "../Data";

function SpecialContact() {
  return (
    <Flex gap={flexGaps.innerSectionFlexGap} align="start" direction="column">
      <Text as="p">You can also find me here:</Text>
      <Flex gap="4" align="start" direction="row">
        <Flex gap="2" align="start" direction="row">
          <img
            src="/images/about/sketchfab.png"
            style={{ width: "20%", objectFit: "contain" }}
            alt=""
          />
          <RadixLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://sketchfab.com/jerrylxia"
          >
            Sketchfab
          </RadixLink>
        </Flex>
        <Flex gap="2" align="start" direction="row">
          <img
            src="/images/about/itchio.png"
            style={{ width: "20%", objectFit: "contain" }}
            alt=""
          />
          <RadixLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://jerrylxia.itch.io/"
          >
            itch.io
          </RadixLink>
        </Flex>
        <Flex gap="2" align="start" direction="row">
          <img
            src="/images/about/behance.png"
            style={{ width: "20%", objectFit: "contain" }}
            alt=""
          />
          <RadixLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.behance.net/jerryxia?tracking_source=search_users|jerry%20xia"
          >
            Behance
          </RadixLink>
        </Flex>
        <Flex gap="2" align="start" direction="row">
          <img
            src="/images/about/youtube-2.png"
            style={{ width: "20%", objectFit: "contain" }}
            alt=""
          />
          <RadixLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCItBzMg2Cw_xx8nSPjKWh1A"
          >
            YouTube
          </RadixLink>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SpecialContact;
