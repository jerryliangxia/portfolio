import React from "react";
import { Flex, Text, Link as RadixLink } from "@radix-ui/themes";
import { flexGaps } from "../../../Info";
import SpecialContactItem from "./SpecialContactItem";

const iconSizeMobile = "80%";
const SpecialContactMobile = () => {
  return (
    <Flex gap={flexGaps.innerSectionFlexGap} align="start" direction="column">
      <Text as="p">You can also find me here:</Text>
      <Flex gap="4" justify="start" align="center" direction="row">
        <RadixLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://sketchfab.com/jerrylxia"
          size="2"
        >
          <img
            src="images/about/sketchfab.png"
            style={{ width: iconSizeMobile, objectFit: "contain" }}
            alt=""
          />
        </RadixLink>
        <RadixLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://jxia.artstation.com/"
          size="2"
        >
          <img
            src="images/about/artstation.png"
            style={{ width: iconSizeMobile, objectFit: "contain" }}
            alt=""
          />
        </RadixLink>
        <RadixLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.behance.net/jerryxia?tracking_source=search_users|jerry%20xia"
          size="2"
        >
          <img
            src="images/about/behance.png"
            style={{ width: iconSizeMobile, objectFit: "contain" }}
            alt=""
          />
        </RadixLink>

        <RadixLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCItBzMg2Cw_xx8nSPjKWh1A"
          size="2"
        >
          <img
            src="images/about/youtube.png"
            style={{ width: iconSizeMobile, objectFit: "contain" }}
            alt=""
          />
        </RadixLink>
        <RadixLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://jerrylxia.itch.io/"
          size="2"
        >
          <img
            src="images/about/itchio.png"
            style={{ width: iconSizeMobile, objectFit: "contain" }}
            alt=""
          />
        </RadixLink>
      </Flex>
    </Flex>
  );
};

function SpecialContact() {
  const isMobile = window.innerWidth <= 768;

  return isMobile ? (
    <SpecialContactMobile />
  ) : (
    <Flex gap={flexGaps.innerSectionFlexGap} align="start" direction="column">
      <Text as="p">You can also find me here:</Text>
      <Flex gap="4" justify="start" align="center" direction="row">
        <SpecialContactItem
          href="https://sketchfab.com/jerrylxia"
          src="images/about/sketchfab.png"
          title="Sketchfab"
        />
        <SpecialContactItem
          href="https://jxia.artstation.com/"
          src="images/about/artstation.png"
          title="Artstation"
        />
        <SpecialContactItem
          href="https://www.behance.net/jerryxia?tracking_source=search_users|jerry%20xia"
          src="images/about/behance.png"
          title="Behance"
        />
        <SpecialContactItem
          href="https://www.youtube.com/channel/UCItBzMg2Cw_xx8nSPjKWh1A"
          src="images/about/youtube.png"
          title="YouTube"
        />
        <SpecialContactItem
          href="https://jerrylxia.itch.io/"
          src="images/about/itchio.png"
          title="itch.io"
        />
      </Flex>
    </Flex>
  );
}

export default SpecialContact;
