import { FunctionComponent } from "react";
import { Col, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const AppNav: FunctionComponent = () => {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      bg="primary"
      variant="dark"
      className="app-nav"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Relaxed Employee</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/" exact>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/social" exact>
              <Nav.Link>Colleagues</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/events" exact>
              <Nav.Link>Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/vacation" exact>
              <Nav.Link>Vacation</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/health">
              <NavDropdown id="app-nav-health" title="Health">
                <LinkContainer to="/health/leaves" exact>
                  <NavDropdown.Item>Sick leaves</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/health/doctor" exact>
                  <NavDropdown.Item>Doctor</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/health/corona" exact>
                  <NavDropdown.Item>Corona-Status</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </LinkContainer>
          </Nav>
          <Col />
          <Nav>
            <NavDropdown title="Hey Robin" id="app-nav-user">
              <LinkContainer to="/user/settings" exact>
                <NavDropdown.Item>Settings</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Item>Sign out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
