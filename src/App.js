import React from "react";

// Importing Pages
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
// importing Router
import { Switch, Route } from "react-router-dom";
import IntroSection from "./components/IntroSection";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={IntroSection}>
          <AboutMe />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route>
          <Contact path="/contact" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
