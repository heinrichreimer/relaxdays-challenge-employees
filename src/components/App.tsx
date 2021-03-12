import { Fragment, FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import { AppFooter, AppSwitch } from ".";
import { AppNav } from "./AppNav";

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <AppNav />
      <Container>
        <AppSwitch />
      </Container>
      <AppFooter />
    </Fragment>
  );
};
