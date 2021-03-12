import { FunctionComponent } from "react";
import { Route, Switch } from "react-router";
import {
  Colleagues,
  Corona,
  Doctor,
  Events,
  Home,
  NotFound,
  Settings,
  SickLeaves,
  Vacation,
} from "./pages";

export const AppSwitch: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/social">
        <Colleagues />
      </Route>
      <Route exact path="/events">
        <Events />
      </Route>
      <Route exact path="/vacation">
        <Vacation />
      </Route>
      <Route exact path="/health/leaves">
        <SickLeaves />
      </Route>
      <Route exact path="/health/doctor">
        <Doctor />
      </Route>
      <Route exact path="/health/corona">
        <Corona />
      </Route>
      <Route exact path="/user/settings">
        <Settings />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};
