import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { posts } from "../../posts";
import gfm from "remark-gfm";
import {
  Flex,
  Link as RadixLink,
  Text,
  Card,
  Code,
  Heading,
} from "@radix-ui/themes";
import rehypeRaw from "rehype-raw";
import frontMatter from "front-matter";

function BlogPost() {
  const { blogName } = useParams();
  const [title, setTitle] = useState(null);
  const [publishedAt, setDatePublished] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const match = posts.find((p) => p.link === `/${blogName}`);
    if (match) {
      import(`../../posts${match.link}`)
        .then((module) => {
          fetch(module.default)
            .then((response) => response.text())
            .then((text) => {
              const { attributes, body } = frontMatter(text);
              setPost(body);
              setTitle(attributes.title);
              setDatePublished(attributes.publishedAt);
            });
        })
        .catch((error) => console.error("Error loading markdown file:", error));
    }
  }, [blogName]);

  return (
    <Flex gap="3" direction="column">
      <Heading>{title}</Heading>
      <Text size="4">{publishedAt}</Text>
      <ReactMarkdown
        children={post}
        remarkPlugins={[gfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({ node, ...props }) => (
            <RadixLink>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#aaa", textDecoration: "none" }}
                {...props}
              />
            </RadixLink>
          ),
          p: ({ node, ...props }) => <Text as="p" size="2" {...props} />,
          li: ({ node, ...props }) => (
            <Text
              as="li"
              size="2"
              style={{ listStyleType: "disc" }}
              {...props}
            />
          ),
          code: ({ node, inline, className, children, ...props }) => {
            return !inline ? (
              <Card>
                <Text as="code" size="2" {...props}>
                  {children}
                </Text>
              </Card>
            ) : (
              <Code color="gray" {...props}>
                {children}
              </Code>
            );
          },
        }}
      ></ReactMarkdown>
    </Flex>
  );
}

export default BlogPost;
