import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Authentication({register}) {
  const registerform = register? true:false


  return (
    <div style={{ width: "100%", height: "100vh" ,backgroundColor:"ButtonFace" }} className='d-flex justify-content-center align-items-center'>
      <div className="container-fluid w-50">
      <h1 className='d-flex justify-content-center align-items-center' data-aos="fade-up">Authentication</h1>
        <Link className='d-flex justify-content-center align-items-center' to={'/'} style={{ textDecoration: "none" }} data-aos="fade-up" >/Home</Link>
        <div className=" shadow  p-5 ">
          <Row >
            
            <Col>
              <div className="row align-items-center shadow rounded" data-aos="fade-up">
                <div className="col-lg-6">
                  <img src="https://as1.ftcdn.net/v2/jpg/00/94/74/74/1000_F_94747421_s4PPLJnB3EvKSxwMt49vkuvcFy7TmriV.jpg" alt="no image" width={'100%'} />
                </div>
                <div className="col-lg-6">
                  <div className='d-flex align-items-center justify-content-center flex-column '>
                  
                    <h6 style={{ color: "black" }} className='mt-3'>
                      {
                        registerform?"sign up to your account":"sign in to your account"
                      }
              
                    </h6>
                    <Form className='mt-3 w-75'>

                      { registerform &&
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="text" placeholder="Enter username" />

                      </Form.Group>}
                      <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="Enter email" />

                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="password" placeholder="Enter password" />

                      </Form.Group>
                    </Form>


                    {
                      registerform ?
                      <div className='d-flex align-items-center flex-column '>
                      <button className='btn btn-warning rounded mb-3'>
                        Register
                      </button>
                      <p className='text-danger'>Already have an account?<Link style={{ textDecoration: "none", color: "black" }} to={'/login'}>login here!</Link></p>

                    </div> :
                     <div  className='d-flex align-items-center flex-column '>
                        <button className='btn btn-warning rounded mb-3'>
                          login
                        </button>
                        <p className='text-danger'>Already have an Acoount? Click here to <Link style={{ textDecoration: "none", color: "black" }} to={'/register'}>register</Link></p>

                      </div>}



                  </div>
                </div>
              </div></Col>
          </Row>

        </div>
      </div>


    </div>
  )
}

export default Authentication