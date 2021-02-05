import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,

  Modal,
  Button
} from 'react-bootstrap';

function Navigation(props) {

  const [isLogin, setIsLogin] = React.useState(false)
  const [isLogout, setIsLogout] = React.useState(false)

  const openLogin = () => setIsLogin(true)
  const closeLogin = () => setIsLogin(false)

  const openLogout = () => setIsLogout(true)
  const closeLogout = () => setIsLogout(false)

  const handleLogin = () => {
    props.changeRoute('ahmad-ardiansyah')
  }

  const handleLogout = () => {
    props.changeRoute('')
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to={`/`}>Template</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={`/`}>Home</Nav.Link>
          <Nav.Link as={Link} to={`/blogs`}>Blogs</Nav.Link>
          <Nav.Link as={Link} to={`/news`}>News</Nav.Link>
        </Nav>
        {
          props.token ?
            <Nav>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={`/profile`}>Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/settings`}>Settings</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={openLogout}>Logout</Nav.Link>
            </Nav>
            :
            <Nav>
              <Nav.Link onClick={openLogin}>Login</Nav.Link>
            </Nav>
        }
      </Navbar.Collapse>

      <Modal show={isLogin} onHide={closeLogin}>
        <Modal.Body>
          <h3>Template</h3>

        <Button onClick={handleLogin}>Login</Button>
        </Modal.Body>
      </Modal>

      <Modal show={isLogout} onHide={closeLogout}>
        <Modal.Body>
          <h3>Template</h3>

          <Button variant="primary" onClick={handleLogout} className="mr-2">Yes</Button>
          <Button variant="secondary" onClick={closeLogout}>No</Button>
        </Modal.Body>
      </Modal>

    </Navbar>
  )
}

export default Navigation;
