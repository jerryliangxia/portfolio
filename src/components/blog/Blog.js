import React, { useState, useEffect } from "react";
import { Flex, Heading } from "@radix-ui/themes";
import BlogsPerYear from "./components/BlogsPerYear";

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

function formatDateMMDD(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}`;
}

function Blog() {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    fetch("/posts/posts.json")
      .then((response) => response.json())
      .then((posts) => {
        const formattedPosts = posts.map((post) => ({
          ...post,
          publishedAt: formatDate(post.publishedAt),
          publishedAtMMDD: formatDateMMDD(post.publishedAt),
        }));

        setPostsData(
          formattedPosts.sort(
            (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
          )
        );
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
    <Flex gap="6" direction="column" style={{ width: "100%" }}>
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
