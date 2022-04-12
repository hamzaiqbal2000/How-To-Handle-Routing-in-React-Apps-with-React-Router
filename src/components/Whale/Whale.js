import React from "react";
import { Switch, useParams, useRouteMatch } from "react-router-dom";
import Beluga from "./Beluga";
import Blue from "./Blue";

const Whale = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <h2>Whale</h2>
      <Switch>
        <Route path={`${path}/beluga`}>
          <Beluga />
        </Route>
        <Route path={`${path}/blue`}>
          <Blue />
        </Route>
      </Switch>
    </>
  );
};

export default Whale;
