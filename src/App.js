import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Manatee from "./components/Manatee/Manatee";
import Narwhal from "./components/Narwhal/Narwhal";
import Whale from "./components/Whale/Whale";

function App() {
  return (
    <div className="Wrapper">
      <h1>Marine Mammals</h1>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/manatee">Manatee</Link>
            </li>
            <li>
              <Link to="/narwhal">Narwhal</Link>
            </li>
            <li>
              <Link to="/whale">Whale</Link>
            </li>
            <li>
              <Link to="/whale/beluga">Beluga Whale</Link>
            </li>
            <li>
              <Link to="/whale/blue">Blue Whale</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>
          <Route exact path="/whale">
            <Whale />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
//accessing Route data with hooks
//uselocation, useparams
