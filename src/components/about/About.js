import React from "react";
import CanvasComponent from "../CanvasComponent";
import { Flex, Heading, Text } from "@radix-ui/themes";
import InfoBlock from "./InfoBlock";
import Contact from "./Contact";
import { basicData, jobExperience, work } from "./Data";

function About() {
  const sectionFlexGap = "6";
  const innerSectionFlexGap = "3";

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
            modelPath="/spiderman.glb"
            style={{ width: "32%" }}
          />
          <CanvasComponent
            modelPath="/bug_emoji.glb"
            intensity={0.1}
            style={{ width: "32%" }}
          />
          <CanvasComponent
            modelPath="/female_warrior.glb"
            intensity={0.1}
            style={{ width: "32%" }}
          />
        </Flex>
      </section>
      <section>
        <Flex gap={sectionFlexGap} direction="column">
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
        <Flex gap={sectionFlexGap} direction="column">
          <Text as="p">Work</Text>
          <InfoBlock
            leftText={work.lightspeed.leftText}
            rightTitle={work.lightspeed.rightTitle}
            rightText={work.lightspeed.rightText}
          />
          <InfoBlock
            leftText={work.blenderContest.leftText}
            rightTitle={work.blenderContest.rightTitle}
            rightText={work.blenderContest.rightText}
          />
          <InfoBlock
            leftText={work.modeling.leftText}
            rightTitle={work.modeling.rightTitle}
            rightText={work.modeling.rightText}
          />
        </Flex>
      </section>
      <section>
        <Flex gap={innerSectionFlexGap} align="start" direction="column">
          <Text as="h3">Languages:</Text>
          <Text as="p" color="gray">
            Java, Python, C, C\#, C++, Kotlin, OCaml, Bash, CLI, HTML/CSS,
            JavaScript/TypeScript, React, Git.
          </Text>
          <Text as="h3">3D Tools I've used:</Text>
          <Flex gap="4" align="start" direction="row">
            <img
              src="/images/about/blender.png"
              style={{ width: "10%", objectFit: "contain" }}
            />
            <img
              src="/images/about/unity.png"
              style={{ width: "7.5%", objectFit: "contain" }}
            />
            <img
              src="/images/about/cascadeur.png"
              style={{ width: "8.5%", objectFit: "contain" }}
            />
          </Flex>
        </Flex>
      </section>
      <section>
        <Contact />
      </section>
    </Flex>
  );
}

export default About;
