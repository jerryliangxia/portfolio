import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { posts } from "../../posts";
import { Flex, Heading, Text, Link as RadixLink } from "@radix-ui/themes";
import frontMatter from "front-matter";

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

function Blog() {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const fetchPosts = posts.map(async ({ link, module: postModule }) => {
      const module = await import(`../../posts${link}`);
      const response = await fetch(module.default);
      const text = await response.text();
      const { attributes, _ } = frontMatter(text);
      return {
        link,
        title: attributes.title,
        publishedAt: formatDate(attributes.publishedAt),
        summary: attributes.summary,
      };
    });

    Promise.all(fetchPosts)
      .then((data) =>
        data.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      )
      .then(setPostsData);
  }, []);

  return (
    <Flex
      gap="6"
      direction="column"
      style={{ width: "100%", paddingBottom: "5vh" }}
    >
      <Heading>Read my blog:</Heading>
      <Flex gap="3" direction="column">
        {postsData.map(({ link, title, publishedAt, summary }) => (
          <Flex gap="1" direction="column">
            <RadixLink key={link}>
              <Link
                to={`/blog${link}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Text size="4">{title}</Text>
              </Link>
            </RadixLink>
            <Text size="2" color="gray">
              {publishedAt}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default Blog;
