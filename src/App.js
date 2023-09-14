import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Work from "./components/work/Work";

function App() {
  const navigate = useNavigate();

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul>
            <li>
              <button onClick={() => navigate("/about")}>About</button>
            </li>
            <li>
              <button onClick={() => navigate("/blog")}>Blog</button>
            </li>
            <li>
              <button onClick={() => navigate("/work")}>Work</button>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
