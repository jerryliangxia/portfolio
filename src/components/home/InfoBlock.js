import React from "react";
import { Flex, Text, Link as RadixLink } from "@radix-ui/themes";

function InfoBlock({
  leftText,
  rightTitle,
  rightSubtitle,
  rightText,
  isLink = false,
  href = "",
}) {
  return (
    <>
      <Flex gap="3" direction="row">
        <Text color="#888888" size="2" style={{ width: "30%" }}>
          {leftText}
        </Text>
        <Flex gap="3" direction="column" style={{ width: "70%" }}>
          <Flex gap="1" direction="column">
            {isLink ? (
              <RadixLink href={href} target="_blank" rel="noopener noreferrer">
                <Flex gap="1" direction="row" align="center">
                  <Text style={{ color: "white" }} as="p">
                    {rightTitle}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      style={{
                        marginLeft: "3px",
                        transition: "transform 0.3s ease-in-out", // Add transition here
                        position: "relative", // Add position here
                        top: "1px", // Adjust vertical position here
                      }}
                      className="arrow-icon"
                    >
                      <path
                        d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                        fill="rgba(255,255,255,1)"
                      ></path>
                    </svg>
                  </Text>
                </Flex>
              </RadixLink>
            ) : (
              <Text as="p">{rightTitle}</Text>
            )}
            <Text as="p" color="gray">
              {rightSubtitle}
            </Text>
          </Flex>
          <Text as="p" color="#BBBBBB">
            {rightText}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default InfoBlock;
