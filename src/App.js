import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/home/Home";
import Blog from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import Nav from "./components/nav/Nav";
import { Theme, Flex } from "@radix-ui/themes";
import ThreeD from "./components/3d/3d";
import Game from "./components/game/Game";
import { motion } from "framer-motion";

function App() {
  return (
    <Theme
      accentColor="gray"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <Router>
        <Flex gap="4" className="app-container" align="start">
          <Nav />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:blogName" element={<BlogPost />} />
              <Route path="/3d" element={<ThreeD />} />
              <Route path="/game" element={<Game />} />
            </Routes>
          </motion.div>
        </Flex>
      </Router>
    </Theme>
  );
}

export default App;
