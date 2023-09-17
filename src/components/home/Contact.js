import React from "react";
import { Flex, Text, Link as RadixLink } from "@radix-ui/themes";

function ContactInfo({ site, username, href }) {
  return (
    <Flex gap="3" direction="row">
      <Text color="gray" style={{ width: "30%" }}>
        {site}
      </Text>
      <Text color="gray" style={{ width: "70%" }}>
        <RadixLink>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            {username}
          </a>
        </RadixLink>
      </Text>
    </Flex>
  );
}
function Contact() {
  return (
    <Flex gap="4" direction="column" style={{ paddingBottom: "5vh" }}>
      <Text as="p">Contact</Text>
      <ContactInfo
        site="Github"
        username="jerryliangxia"
        href="https://github.com/jerryliangxia"
      />
      <ContactInfo
        site="Email"
        username="jerrylxia@gmail.com"
        href="mailto:jerrylxia@gmail.com"
      />
      <ContactInfo
        site="Twitter"
        username="jerrylxia"
        href="https://twitter.com/jerrylxia"
      />
      <ContactInfo
        site="LinkedIn"
        username="Jerry Xia"
        href="https://www.linkedin.com/in/jerry-xia-901783178/"
      />
    </Flex>
  );
}

export default Contact;
