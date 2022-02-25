import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">DigiSet</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/Cart"><i className='fas fa-shopping-cart'/>Cart</Nav.Link>
        <Nav.Link href="/SignIn"><i className='fas fa-user'/>SignIn</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header