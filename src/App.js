import About from "./components/About";
// import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import ProjectEdit from "./components/projectEdit";
import MyProjects from "./components/Projects/MyProjects";
// import Projects from "./components/Projects";
import AllSkills from "./components/Skills/AllSkills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <AllSkills />
      <MyProjects />
      {/* <Projects /> */}
      {/* <ProjectEdit /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
