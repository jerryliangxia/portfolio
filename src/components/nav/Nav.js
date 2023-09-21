import React from "react";
import { Button, Flex, Text, Theme } from "@radix-ui/themes";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = {
  "/": {
    name: "About",
  },
  "/blog": {
    name: "Blog",
  },
  "/3d": {
    name: "3D",
  },
};

function Nav() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Theme accentColor="gray" radius="small">
      <Flex gap="3">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <Button variant="ghost" key={path}>
              <Link to={path} style={{ textDecoration: "none" }}>
                <Text color="white" size="2">
                  <span className="relative py-1 px-2">
                    {name}
                    {isActive && (
                      <motion.div
                        className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                        layoutId="sidebar"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </span>
                </Text>
              </Link>
            </Button>
          );
        })}
      </Flex>
    </Theme>
  );
}

export default Nav;
