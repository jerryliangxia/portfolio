import React from "react";
import CanvasComponent from "../CanvasComponent";
import {
  Flex,
  Heading,
  Text,
  Strong,
  Link as RadixLink,
} from "@radix-ui/themes";
import { Link } from "react-router-dom";

function About() {
  return (
    <Flex gap="3" direction="column">
      <Heading>Hi! I'm Jerry.</Heading>
      <CanvasComponent
        modelPath="/spiderman.glb"
        rotationSpeed={0.5}
        camera={{ fov: 45 }}
        dpr={[1, 2]}
        controls={{ speed: 1.5, zoom: 0.5, polar: [-0.1, Math.PI / 4] }}
        scale={0.1}
        intensity={0.1}
        style={{ width: "100%", height: "25vh" }}
      />
      <Text as="p">
        I'm a <Strong>software engineering</Strong> student at McGill, about to
        enter full-time work at Unity. I hobby in 3D Modelling, game development
        and other forms of art. Here on my website you'll see a collection of 3D
        models I made this past summer. element.
      </Text>
      <Flex gap="3" direction="row">
        <CanvasComponent
          modelPath="/bug_emoji.glb"
          rotationSpeed={0.0}
          camera={{ fov: 12.25 }}
          dpr={[1, 2]}
          controls={{ speed: 1.5, zoom: 0.5, polar: [-0.1, Math.PI / 4] }}
          scale={0.01}
          intensity={0.01}
          style={{ width: "50%", height: "100%" }}
        />
        <Flex gap="3" align="start" direction="column">
          <Text as="p">
            <Strong>Here are the tools I've used:</Strong>
          </Text>
          <Flex gap="3" align="start" direction="column">
            <RadixLink>
              <Link
                target="_blank"
                to="https://www.blender.org/"
                style={{ textDecoration: "none" }}
              >
                <Text color="white" size="2">
                  Blender
                </Text>
              </Link>
            </RadixLink>
            <RadixLink>
              <Link
                target="_blank"
                to="https://cascadeur.com/"
                style={{ textDecoration: "none" }}
              >
                <Text color="white" size="2">
                  Cascadeur
                </Text>
              </Link>
            </RadixLink>
            <RadixLink>
              <Link
                target="_blank"
                to="https://unity.com/"
                style={{ textDecoration: "none" }}
              >
                <Text color="white" size="2">
                  Unity
                </Text>
              </Link>
            </RadixLink>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default About;
