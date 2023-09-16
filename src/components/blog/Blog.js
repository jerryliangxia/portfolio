import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { posts } from "../../posts";
import {
  Flex,
  Heading,
  Text,
  Strong,
  Link as RadixLink,
  Card,
} from "@radix-ui/themes";
import frontMatter from "front-matter";

function Blog() {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const fetchPosts = posts.map(async ({ link, module: postModule }) => {
      const module = await import(`../../posts${link}`);
      const response = await fetch(module.default);
      const text = await response.text();
      const { attributes, _ } = frontMatter(text);
      return { link, title: attributes.title };
    });

    Promise.all(fetchPosts).then(setPostsData);
  }, []);

  return (
    <Flex gap="3" direction="column">
      <Heading>Here's my blog.</Heading>
      <Flex gap="2" direction="column">
        {postsData.map(({ link, title }) => (
          <RadixLink key={link}>
            <Card>
              <Link to={`/blog${link}`}>{title}</Link>
            </Card>
          </RadixLink>
        ))}
      </Flex>
    </Flex>
  );
}

export default Blog;
