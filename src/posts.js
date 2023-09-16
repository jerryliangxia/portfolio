function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.md$/, ""),
    module: r(fileName),
  }));
}

export const posts = importAll(require.context("./posts", true, /\.md$/));
