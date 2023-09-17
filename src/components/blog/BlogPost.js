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
  Blockquote,
} from "@radix-ui/themes";
import rehypeRaw from "rehype-raw";
import frontMatter from "front-matter";

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

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
              setDatePublished(formatDate(attributes.publishedAt));
            });
        })
        .catch((error) => console.error("Error loading markdown file:", error));
    }
  }, [blogName]);

  return (
    <Flex
      gap="3"
      direction="column"
      style={{ width: "100%", paddingBottom: "5vh" }}
    >
      <Heading size="6">{title}</Heading>
      <Text size="4">{publishedAt}</Text>
      <ReactMarkdown
        children={post}
        remarkPlugins={[gfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => (
            <Text
              as="h1"
              style={{ marginTop: 0, marginBottom: 0 }}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <Text
              as="h2"
              style={{ marginTop: 0, marginBottom: 0 }}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <Text
              as="h3"
              style={{ marginTop: 0, marginBottom: 0 }}
              {...props}
            />
          ),
          h4: ({ node, ...props }) => (
            <Text
              as="h4"
              style={{ marginTop: 0, marginBottom: 0 }}
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <RadixLink>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#aaa",
                  textDecoration: "none",
                  marginTop: 0,
                  marginBottom: 0,
                }}
                {...props}
              />
            </RadixLink>
          ),
          p: ({ node, ...props }) => (
            <Text
              as="p"
              size="2"
              style={{ marginTop: 0, marginBottom: 0 }}
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <Text
              as="li"
              size="2"
              style={{ listStyleType: "disc", marginTop: 0, marginBottom: 0 }}
              {...props}
            />
          ),
          code: ({ node, inline, className, children, ...props }) => {
            return !inline ? (
              <Card>
                <Text
                  as="code"
                  size="2"
                  style={{ marginTop: 0, marginBottom: 0 }}
                  {...props}
                >
                  {children}
                </Text>
              </Card>
            ) : (
              <Code
                color="gray"
                style={{ marginTop: 0, marginBottom: 0 }}
                {...props}
              >
                {children}
              </Code>
            );
          },
          img: ({ node, ...props }) => {
            const isMobile = window.innerWidth <= 600;
            const width = isMobile ? "100%" : node.properties.width || "50%";
            const height = isMobile ? "auto" : "auto";
            return (
              <img
                {...props}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: width,
                  height: height,
                }}
              />
            );
          },
          blockquote: ({ node, ...props }) => (
            <Blockquote color="gray" {...props} />
          ),
        }}
      ></ReactMarkdown>
    </Flex>
  );
}

export default BlogPost;
