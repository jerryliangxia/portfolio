import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text } from "@radix-ui/themes";

function BlogsPerYear({ posts, year }) {
  return (
    <Flex direction="row">
      <Text size="2" color="gray" style={{ width: "10%" }}>
        {year}
      </Text>
      <Flex gap="0" direction="column" style={{ width: "90%" }}>
        {posts.map(({ link, title, publishedAtMMDD }) => (
          <Link
            to={`/blog${link}`}
            style={{ textDecoration: "none", color: "inherit" }}
            key={link}
          >
            <div
              style={{
                borderTop: "1px solid rgba(128, 128, 128, 0.2)",
                padding: "8px",
                transition: "background-color 0.3s ease", // Add this line
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(128, 128, 128, 0.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <Flex gap="1" direction="row">
                <Text size="4" style={{ color: "white", width: "80%" }}>
                  {title}
                </Text>
                <Text
                  size="2"
                  style={{ color: "gray", width: "20%" }}
                  align="right"
                >
                  {publishedAtMMDD}
                </Text>
              </Flex>
            </div>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}

export default BlogsPerYear;
