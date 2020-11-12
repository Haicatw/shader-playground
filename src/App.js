import React from 'react';
import LayoutRoot from './layout-root';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillPlayFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const appStyle = {
  height: '100vh',
  overflow: 'hidden',
};

const App = () => {
  return (
    <div style={appStyle}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">WebGL Shader Playground</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <ButtonGroup aria-label="Operations">
            <Button variant="success"><BsFillPlayFill/></Button>
            {/* <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button> */}
          </ButtonGroup>
        </Nav>
        <Nav>
          <Nav.Link href="https://github.com/Haicatw/shader-playground.git">Github</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      <LayoutRoot />
    </div>
  );
}

export default App;
