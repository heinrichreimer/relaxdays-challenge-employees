import { Fragment, FunctionComponent } from "react";
import { AppFooter, AppSwitch } from ".";
import { AppNav } from "./AppNav";

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <AppNav />
      <AppSwitch />
      <AppFooter />
    </Fragment>
  );
};
