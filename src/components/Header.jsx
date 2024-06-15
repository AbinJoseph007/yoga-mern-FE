import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthTokenContext } from '../context/ContextShare';

function Header({Home,dashbord}) {

  const {isAuthToken , setIsAuthToken} = useContext(isAuthTokenContext)
  
  const navigate = useNavigate()

  const handleLogout = ()=>{
    sessionStorage.removeItem("tokens")
    sessionStorage.removeItem("exitstingteacher")
    setIsAuthToken(false )
   
    navigate('/')
  }
  return (

    <>
     <Navbar expand="lg" className="bg-primary fixed-top">
      <Container fluid>
        <Navbar.Brand href="/" className='ms-5 text-success' style={{fontSize:"35px"}}> YOGI</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Link to={'/'} className='ms-3 mt-2 me-2'style={{textDecoration:"none"}}>home</Link>
            <Link to={'/profile'} className='ms-3 mt-2 me-2'style={{textDecoration:"none"}}>Trainers</Link>
            <Link to={'/order'} className='ms-3 mt-2 me-2'style={{textDecoration:"none"}}>buy classes</Link>

            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item Link to={'/cources'}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            
             { Home&& 
              <Link to={'/telogin'} className='btn btn-success rounded me-5'>Teacher's reg</Link>
              }

          {
            dashbord &&
            <button onClick={handleLogout} className='btn btn-success me-5'>logOut<i class="fa-solid fa-power-off ms-2"></i></button>
          }

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header