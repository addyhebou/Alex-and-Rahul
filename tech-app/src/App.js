import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Strengths from './Components/Strengths';
import AlexAndRahul from './Components/AlexAndRahul';
import Contact from './Components/Contact';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className = "navbar">
            <li>
              <Link className = "link" to="/experience">Experience</Link>
            </li>
            <li>
              <Link className = "link"  to="/strengths">Strengths</Link>
            </li>
            <li>
              <Link className = "link"  to="/"><h1>Addy Hebou</h1></Link>
            </li>
            <li>
              <Link className = "link"  to="/alexandrahul">Alex and Rahul</Link>
            </li>
            <li>
              <Link className = "link"  to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/strengths">
            <Strengths />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/alexandrahul">
            <AlexAndRahul />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
