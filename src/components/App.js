import React from "react"
import Signup from "./Signup"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"


function App() {
  return (
    <>
      <Navbar className="px-4" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <NavDropdown title="Info" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Contacts</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Services</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Consulting</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* For Bootstrap 5 you have to set classname to ms-auto to move items in the nav to the right */}
            <Nav className="ms-auto">
              <Nav.Link >
                Register
              </Nav.Link>
              <Nav.Link >
                Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "84vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
     
      <footer className="footer text-center bg-dark text-light py-2">
        this is some text
      </footer>
      
     
    </>
  )
}

export default App