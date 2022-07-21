import React from 'react'
import { Link } from "react-router-dom";
import {Navbar,Nav,Container} from 'react-bootstrap'

export default function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Fitness</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link className="Lnav" to="/">Home</Link></Nav.Link>
      <Nav.Link><Link className="Lnav" to="/blogs">Blog</Link></Nav.Link>
      <Nav.Link><Link className="Lnav" to="/create">Create Blog</Link></Nav.Link>
      <Nav.Link><Link className="Lnav" to= "/About">About</Link></Nav.Link>
      <Nav.Link><Link className="Lnav1" to="/Login">Login</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  
    </div>
  )
}
