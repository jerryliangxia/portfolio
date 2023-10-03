import React from "react";
import { Flex, Text, Strong } from "@radix-ui/themes";
import { motion } from "framer-motion";

const PSButton = () => {
  return (
    <Flex
      className="corner-border-button"
      style={{
        width: "50%",
        paddingLeft: "0 !important",
        paddingRight: "0 !important",
      }}
    >
      <motion.div
        whileHover={{ backgroundPosition: "0%" }}
        exitHover={{ backgroundPosition: "100%", transition: { duration: 0 } }}
        animate={{ backgroundPosition: "100%" }}
        transition={{ duration: 1, type: "tween" }}
        style={{
          background: `linear-gradient(270deg, #809eB5 50%, #113052 50%)`,
          backgroundSize: "200% 100%",
          backgroundPosition: "100%",
          color: "white",
          padding: "10px 0px",
          border: "none",
          cursor: "pointer",
        }}
      >
        <Flex gap="2" direction="row" align="center" justify="center">
          <img
            src="images/3d/x.png"
            style={{ width: "9%", align: "center" }}
            alt=""
          />
          <Text size="5" style={{ width: "60%" }} align="center">
            <Strong>SWITCH SUITS</Strong>
          </Text>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default PSButton;
