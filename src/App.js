import About from "./components/About";
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
      <AllSkills />
      <MyProjects />
    </div>
  );
}

export default App;
