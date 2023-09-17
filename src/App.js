import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import Navbar from "./components/navbar/navbar";
import { Theme, Flex } from "@radix-ui/themes";

function App() {
  return (
    <Theme
      accentColor="cyan"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <Router>
        <Flex gap="4" className="app-container" justify="start">
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogName" element={<BlogPost />} />
          </Routes>
        </Flex>
      </Router>
    </Theme>
  );
}

export default App;
