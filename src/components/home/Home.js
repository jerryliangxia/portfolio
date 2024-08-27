import React from "react";
import { Flex, Heading, Text, Link as RadixLink } from "@radix-ui/themes";
import InfoBlock from "./components/InfoBlock";
import Contact from "./components/Contact";
import SpecialContact from "./components/SpecialContact";
import { basicData, jobExperience, work, flexGaps } from "../../Info";
import ImagePopup from "../general/ImagePopup";
import ThreeDButton from "./components/3dButton";

function Home() {
  return (
    <Flex gap="6" direction="column">
      <Heading>{basicData.name}</Heading>
      <section>
        <Flex gap="1" direction="column">
          <Text as="p" color="gray">
            This site showcases work for Insomniac Games' 2023 internship
            application. For a comprehensive look at my projects, check out my{" "}
            <RadixLink href="https://jerryxia.com/">portfolio</RadixLink>.
          </Text>
          <Flex
            direction="row"
            gap="1"
            align="center"
            justify="start"
            style={{ marginTop: "8px" }}
          >
            <ThreeDButton />
          </Flex>
        </Flex>
      </section>
      <section>
        <Flex gap="4" direction="column">
          <ImagePopup
            src="images/about/venom-game.gif"
            isSubtle={true}
            showTooltip={false}
            link="/game"
          />
        </Flex>
      </section>
      <section>
        <Flex gap={flexGaps.sectionFlexGap} direction="column">
          <Text as="p">Work Experience</Text>
          <InfoBlock
            leftText={jobExperience.unity.leftText}
            rightTitle={jobExperience.unity.rightTitle}
            rightSubtitle={jobExperience.unity.rightSubtitle}
            rightText={jobExperience.unity.rightText}
          />
          <InfoBlock
            leftText={jobExperience.gameloft.leftText}
            rightTitle={jobExperience.gameloft.rightTitle}
            rightSubtitle={jobExperience.gameloft.rightSubtitle}
            rightText={jobExperience.gameloft.rightText}
          />
        </Flex>
      </section>
      <section>
        <Flex gap={flexGaps.sectionFlexGap} direction="column">
          <Text as="p">Work</Text>
          <InfoBlock
            leftText={work.lightspeed.leftText}
            rightTitle={work.lightspeed.rightTitle}
            rightText={work.lightspeed.rightText}
            isLink={true}
            href="https://jerrylxia.itch.io/lightspeed"
          />
          <InfoBlock
            leftText={work.blenderContest.leftText}
            rightTitle={work.blenderContest.rightTitle}
            rightText={work.blenderContest.rightText}
            isLink={true}
            href="https://www.youtube.com/watch?v=RK-2gIuRXNw"
          />
          <InfoBlock
            leftText={work.modeling.leftText}
            rightTitle={work.modeling.rightTitle}
            rightText={work.modeling.rightText}
            isLink={true}
            href="https://sketchfab.com/jerrylxia"
          />
        </Flex>
      </section>
      <section>
        <Flex
          gap={flexGaps.innerSectionFlexGap}
          align="start"
          direction="column"
        >
          <Text as="p">Technical Skills</Text>
          <Text as="p" color="gray">
            {basicData.technicalSkills}
          </Text>
        </Flex>
      </section>
      <section>
        <Flex
          gap={flexGaps.innerSectionFlexGap}
          align="start"
          direction="column"
        >
          <Text as="p">3D Tools </Text>
          <Flex gap="4" align="start" direction="row">
            <img
              src="images/about/blender.png"
              style={{ width: "10%", objectFit: "contain" }}
              alt=""
              className="image-class-quick"
            />
            <img
              src="images/about/unity.png"
              style={{ width: "7.5%", objectFit: "contain" }}
              alt=""
              className="image-class-quick"
            />
            <img
              src="images/about/cascadeur.png"
              style={{ width: "8.5%", objectFit: "contain" }}
              alt=""
              className="image-class-quick"
            />
          </Flex>
        </Flex>
      </section>
      <section>
        <Contact />
      </section>
      <section style={{ paddingBottom: "5vh" }}>
        <SpecialContact />
      </section>
    </Flex>
  );
}

export default Home;
