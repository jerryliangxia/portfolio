import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import gfm from "remark-gfm";
import {
  Flex,
  Link as RadixLink,
  Text,
  Table,
  Code,
  Blockquote,
  Heading,
} from "@radix-ui/themes";
import rehypeRaw from "rehype-raw";
import frontMatter from "front-matter";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
    fetch(`../../../posts/${blogName}`)
      .then((response) => response.text())
      .then((text) => {
        const { body } = frontMatter(text);
        setPost(body);
      })
      .catch((error) => console.error("Error loading markdown file:", error));
  }, [blogName]);

  useEffect(() => {
    console.log(blogName);
    fetch("../../../posts/posts.json")
      .then((response) => response.json())
      .then((posts) => {
        const post = posts.find((post) => post.link === "/" + blogName);
        setTitle(post.title);
        setDatePublished(formatDate(post.publishedAt));
      });
  }, [blogName]);

  return (
    <Flex
      gap="3"
      direction="column"
      style={{ width: "100%", paddingBottom: "5vh" }}
    >
      <Heading>{title}</Heading>
      <Text as="p">{publishedAt}</Text>
      {title && publishedAt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ width: "100%" }}
        >
          <ReactMarkdown
            children={post}
            remarkPlugins={[gfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              table: ({ node, ...props }) => (
                <Table.Root
                  variant="ghost"
                  style={{ marginTop: "1em", marginBottom: "1em" }}
                  {...props}
                />
              ),
              thead: ({ node, ...props }) => <Table.Header {...props} />,
              tbody: ({ node, ...props }) => <Table.Body {...props} />,
              tr: ({ node, ...props }) => <Table.Row {...props} />,
              th: ({ node, ...props }) => <Table.RowHeaderCell {...props} />,
              td: ({ node, ...props }) => (
                <Table.ColumnHeaderCell
                  style={{ fontWeight: "normal" }}
                  {...props}
                />
              ),
              h1: ({ node, ...props }) => (
                <Text
                  as="h1"
                  style={{ marginTop: 0, marginBottom: "1em" }}
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <Text
                  as="h2"
                  style={{ marginTop: 0, marginBottom: "1em" }}
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <Text
                  as="h3"
                  style={{ marginTop: 0, marginBottom: "1em" }}
                  {...props}
                />
              ),
              h4: ({ node, ...props }) => (
                <Text
                  as="h4"
                  style={{ marginTop: 0, marginBottom: "1em" }}
                  {...props}
                />
              ),
              a: ({ node, children, ...props }) => (
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
                  >
                    {children}
                  </a>
                </RadixLink>
              ),
              p: ({ node, ...props }) => (
                <Text
                  as="p"
                  size="2"
                  style={{ marginTop: 0, marginBottom: "1em" }}
                  {...props}
                />
              ),
              li: ({ node, ...props }) => (
                <Text
                  as="li"
                  size="2"
                  style={{
                    listStyleType: "disc",
                    marginTop: 0,
                    marginBottom: 0,
                  }}
                  {...props}
                />
              ),
              code: ({ node, inline, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || "");
                const language = match ? match[1] : null;

                return !inline ? (
                  <SyntaxHighlighter
                    language={language}
                    style={{
                      ...gruvboxDark,
                      'code[class*="language-"]': {
                        ...gruvboxDark['code[class*="language-"]'],
                        fontSize: "12px",
                      },
                    }}
                  >
                    {children}
                  </SyntaxHighlighter>
                ) : (
                  <Code style={{ fontSize: "12px" }} {...props}>
                    {children}
                  </Code>
                );
              },
              img: ({ node, ...props }) => {
                const isMobile = window.innerWidth <= 600;
                const width = isMobile
                  ? "100%"
                  : node.properties.width || "50%";
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
                      marginBottom: "1em",
                      marginTop: "1em",
                    }}
                    alt=""
                  />
                );
              },
              blockquote: ({ node, ...props }) => (
                <Blockquote color="gray" {...props} />
              ),
              iframe: ({ node, ...props }) => {
                let { src } = node.properties;
                if (src.startsWith("https://www.youtube.com/watch?v=")) {
                  src = src.replace("watch?v=", "embed/");
                }
                return (
                  <iframe title="Your unique title here" src={src} {...props} />
                );
              },
            }}
          ></ReactMarkdown>
        </motion.div>
      )}
    </Flex>
  );
}

export default BlogPost;
