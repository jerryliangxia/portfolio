import React from "react";
import CanvasComponent from "../CanvasComponent";
import { Flex, Heading, Text } from "@radix-ui/themes";
import InfoBlock from "./InfoBlock";
import Contact from "./Contact";
import SpecialContact from "./SpecialContact";
import { basicData, jobExperience, work, flexGaps } from "../Data";

function Home() {
  return (
    <Flex gap="8" direction="column">
      <Heading>{basicData.name}</Heading>
      <section>
        <Flex gap="1" direction="column">
          <Text as="p">About</Text>
          <Text as="p" color="gray">
            {basicData.about}
          </Text>
        </Flex>
      </section>
      <section>
        <Flex justify="center" direction="row">
          <CanvasComponent
            modelPath="spiderman.glb"
            intensity={0.1}
            style={{ maxWidth: "40%" }}
          />
          <CanvasComponent
            modelPath="spiderman_hand.glb"
            intensity={0}
            style={{ maxWidth: "20%" }}
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
          <Text as="p">Languages</Text>
          <Text as="p" color="gray">
            Java, Python, C, C\#, C++, Kotlin, OCaml, Bash, CLI, HTML/CSS,
            JavaScript/TypeScript, React, Git.
          </Text>
        </Flex>
      </section>
      <section>
        <Flex
          gap={flexGaps.innerSectionFlexGap}
          align="start"
          direction="column"
        >
          <Text as="p">3D Tools I've used: </Text>
          <Flex gap="4" align="start" direction="row">
            <img
              src="images/about/blender.png"
              style={{ width: "10%", objectFit: "contain" }}
              alt=""
            />
            <img
              src="images/about/unity.png"
              style={{ width: "7.5%", objectFit: "contain" }}
              alt=""
            />
            <img
              src="images/about/cascadeur.png"
              style={{ width: "8.5%", objectFit: "contain" }}
              alt=""
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
