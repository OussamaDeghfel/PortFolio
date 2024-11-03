import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MyProjects from "./components/Projects/MyProjects";
import AllSkills from "./components/Skills/AllSkills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <AllSkills />
      <MyProjects />
    </div>
  );
}

export default App;
