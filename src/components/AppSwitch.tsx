import { FunctionComponent } from "react";
import { Route, Switch } from "react-router";

export const AppSwitch: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        Home
      </Route>
    </Switch>
  );
};
