import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";
import AllSkills from "./components/Skills/AllSkills";

function App() {
  return (
    <div className="flex flex-col justify-between items-center bg-[#0a192f]">
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
