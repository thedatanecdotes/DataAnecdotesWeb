import React from "react";
import './CSS/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Navbarteam()
{
  return(
    <div>
      <Navbar  className="color-nav" expand="lg" variant="dark">
            <Link to="/"><Navbar.Brand style={{fontFamily:"Raleway",fontWeight:"bolder"}}>THE DATA ANECDOTES</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                  <Nav.Link href="/"><p style={{color:"white",fontWeight:"bold"}}>Home</p></Nav.Link>
                  <Nav.Link href="/Stories"><p style={{color:"white",fontWeight:"bold"}}>Stories</p></Nav.Link>
                  <Nav.Link href="/OurTeam" style={{color:"white",fontWeight:"bold"}}>Our Team </Nav.Link>
                  <Nav.Link href="/ContactUs" style={{color:"white",fontWeight:"bold"}}>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>

      </Navbar>
    </div>
  );
}

export default Navbarteam;