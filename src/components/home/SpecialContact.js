import React from "react";
import { Flex, Text, Link as RadixLink } from "@radix-ui/themes";
import { flexGaps } from "../Info";

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
        <Flex gap="2" align="center" direction="row">
          <img
            src="images/about/sketchfab.png"
            style={{ width: "20%", objectFit: "contain" }}
            alt=""
          />
          <RadixLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://sketchfab.com/jerrylxia"
            size="2"
          >
            Sketchfab
          </RadixLink>
        </Flex>
        <Flex gap="2" align="center" direction="row">
          <img
            src="images/about/artstation.png"
            style={{ width: "20%", objectFit: "contain" }}
            alt=""
          />
          <RadixLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://jxia.artstation.com/"
            size="2"
          >
            ArtStation
          </RadixLink>
        </Flex>
        <Flex gap="2" align="center" direction="row">
          <img
            src="images/about/behance.png"
            style={{ width: "20%", objectFit: "contain" }}
            alt=""
          />
          <RadixLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.behance.net/jerryxia?tracking_source=search_users|jerry%20xia"
            size="2"
          >
            Behance
          </RadixLink>
        </Flex>
        <Flex gap="2" align="center" direction="row">
          <img
            src="images/about/youtube.png"
            style={{ width: "20%", objectFit: "contain" }}
            alt=""
          />
          <RadixLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCItBzMg2Cw_xx8nSPjKWh1A"
            size="2"
          >
            YouTube
          </RadixLink>
        </Flex>
        <Flex gap="2" align="center" direction="row">
          <img
            src="images/about/itchio.png"
            style={{ width: "20%", objectFit: "contain" }}
            alt=""
          />
          <RadixLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://jerrylxia.itch.io/"
            size="2"
          >
            itch.io
          </RadixLink>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SpecialContact;
