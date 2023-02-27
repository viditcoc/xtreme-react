import "./App.css"; 
 
import {useEffect, useState } from "react";
import Homepage from "./includes/Homepage";
import About from "./About";
import Services from "./Services";
import Process from "./Process";
import Work from "./Work";
import Clients from "./Clients";
import Contact from "./Contact";
import { LinkContainer } from 'react-router-bootstrap'
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
 
import Footer from './includes/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

function App() {
  const [route, setRoute] = useState('');
  const handleClick = (e) => {
    // e.preventDefault();
     console.log('The link was clicked.');
   }

  return (
    <>
        
  <Router basename={'/'}>
       
     
    <Navbar expand="lg">
    <Container>
    <LinkContainer to="/"><a className="navbar-brand"><img src="data1/img/xtreme_logo.png" className="logo"/></a></LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navBTN" />
      <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
        <Nav className="ml-auto">
          <LinkContainer to="/about"><a onClick={handleClick} className="nav-link">About</a></LinkContainer>
          <LinkContainer to="/services"><a onClick={handleClick} className="nav-link">Services</a></LinkContainer>
          <LinkContainer to="/process"><a className="nav-link">Process</a></LinkContainer>
          <LinkContainer to="/work"><a className="nav-link">Work</a></LinkContainer>
          <LinkContainer to="/clients"><a className="nav-link">Client</a></LinkContainer>
          <LinkContainer to="/contact"><a className="nav-link">Contact</a></LinkContainer>
           
           
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" exact element={<About/>} />           
          <Route path="/services" exact element={<Services/>} />           
          <Route path="/process" exact element={<Process/>} />           
          <Route path="/work" exact element={<Work/>} />           
          <Route path="/clients" exact element={<Clients/>} />           
          <Route path="/contact" exact element={<Contact/>} />           
        </Routes>
       
    </Router>
    <Footer route={route} />
    </>
  );
}

export default App;
