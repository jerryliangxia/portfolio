import React, { useState, useEffect } from "react";
import { Flex, Heading } from "@radix-ui/themes";
import frontMatter from "front-matter";
import BlogsPerYear from "./BlogsPerYear";

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

function formatDateMMDD(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // getMonth() returns a zero-based value (0-11)
  const day = date.getDate();
  return `${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}`; // Format as MM/DD
}

function Blog() {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    fetch("../../../_posts/posts.json")
      .then((response) => response.json())
      .then((posts) => {
        const fetchPosts = posts.map(async (link) => {
          const response = await fetch(`/posts${link}`);
          console.log("Response, Blog.js");
          console.log(response);
          const text = await response.text();
          console.log("Text, Blog.js");
          console.log(text);
          const { attributes } = frontMatter(text);
          return {
            link,
            title: attributes.title,
            publishedAt: formatDate(attributes.publishedAt),
            publishedAtMMDD: formatDateMMDD(attributes.publishedAt),
            summary: attributes.summary,
          };
        });

        Promise.all(fetchPosts)
          .then((data) =>
            data.sort(
              (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
            )
          )
          .then(setPostsData);
      });
  }, []);

  const postsByYear = postsData.reduce((acc, post) => {
    const year = new Date(post.publishedAt).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  return (
    <Flex
      gap="6"
      direction="column"
      style={{ width: "100%", paddingBottom: "5vh" }}
    >
      <Heading>Read my blog:</Heading>
      <Flex direction="column">
        {Object.entries(postsByYear)
          .sort((a, b) => b[0] - a[0])
          .map(([year, posts]) => (
            <React.Fragment key={year}>
              <BlogsPerYear posts={posts} year={year} />
            </React.Fragment>
          ))}
      </Flex>
    </Flex>
  );
}

export default Blog;
