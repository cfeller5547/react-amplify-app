import Intro from "./components/Intro/Intro"
import About from "./components/About/About"
import Skillslist from "./components/skillsList/skillslist";
import ProjectsList from "./components/ProjectsList/projectsList";
import DisplayProjects from "./components/DisplayProjects/displayProjects";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Intro />
              <About />
              <Skillslist />
              <ProjectsList />
            </>
          } />
          <Route path="/displayProjects/:id" element={<DisplayProjects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;