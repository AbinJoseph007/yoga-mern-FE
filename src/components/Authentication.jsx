import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { userLoginAPI, userRegisterAPI } from '../services/allAPI'
import Swal from 'sweetalert2'

function Authentication({ register }) {

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: ""
  })

  const navigate = useNavigate()

  const registerform = register ? true : false

  console.log(userData);

  const handleRegister = async (e) => {
    e.preventDefault()

    const { username, email, password, phonenumber } = userData
    if (!username || !email || !password || !phonenumber) {
      Swal.fire({
        title: "🚫",
        icon: "info",
        text: "Please fill the form completely"
      });
    }
    else {
      const result = await userRegisterAPI(userData)
      console.log(result.data);
      if (result.status === 200) {
        Swal.fire({
          title: "✅",
          icon: "success",
          text: `${result.data.username} is successfully registered`
        });

        setUserData({
          username: "",
          email: "",
          password: "",
          phonenumber: ""
        })
        //navigate to loginpage
        navigate('/login')
      }
      else {
        alert(result.response.data)
      }
    }
  }

  //login

  const handleLogin = async (e) => {
    e.preventDefault()

    const { email, password } = userData

    if (!email || !password) {
      Swal.fire({
        title: "🚫",
        icon: "info",
        text: "Plese fill the form"
      });
    }
    else {
      const result = await userLoginAPI(userData)
      console.log(result);

      if (result.status === 200) {
        Swal.fire({
          title: "✅",
          icon: "success",
          text: "login successfull"
        });
        //store data
        sessionStorage.setItem("exitstingUser", JSON.stringify(result.data.exitstingUser))
        sessionStorage.setItem("token", result.data.token)

        //state empty
        setUserData({
          email: "",
          password: "",
        })
        navigate('/')

      }
      else {
        Swal.fire({
          title: "🚫",
          icon: "info",
          text: (result.response.data)
        });
      }
    }
  }

  return (
    <>
      <div id='bg' style={{ width: "100%", height: "100vh", backgroundColor: "ButtonFace" }} className='d-flex justify-content-center align-items-center'>
        <div className="container-fluid w-50">
          <h1 className='d-flex justify-content-center align-items-center' data-aos="fade-up">User Authentication</h1>
          <Link className='d-flex justify-content-center align-items-center' to={'/'} style={{ textDecoration: "none" }} data-aos="fade-up" >/Home</Link>
          <div className="shadow  p-5 ">
            <Row>
              <Col>
                <div className="row align-items-center shadow rounded" data-aos="fade-up">
                  <div className="col-lg-6">
                    <img src="https://as1.ftcdn.net/v2/jpg/00/94/74/74/1000_F_94747421_s4PPLJnB3EvKSxwMt49vkuvcFy7TmriV.jpg" alt="no image" width={'100%'} />
                  </div>
                  <div className="col-lg-6">
                    <div className='d-flex align-items-center justify-content-center flex-column '>

                      <h6 style={{ color: "black" }} className='mt-3'>
                        {
                          registerform ? "sign up to your account" : "sign in to your account"
                        }

                      </h6>
                      <Form className='mt-3 w-75'>


                        {registerform &&
                          <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control type="text" placeholder="Enter username" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />


                          </Form.Group>}

                        <Form.Group className="mb-3" controlId="formBasicEmail">

                          <Form.Control type="email" placeholder="Enter email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                          <Form.Control type="password" placeholder="Enter password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />

                        </Form.Group>
                        {registerform &&
                          <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control type="phonenumber" placeholder="Enter phonenumber" value={userData.phonenumber} onChange={(e) => setUserData({ ...userData, phonenumber: e.target.value })} />

                          </Form.Group>}

                      </Form>


                      {
                        registerform ?
                          <div className='d-flex align-items-center flex-column '>
                            <button onClick={handleRegister} className='btn btn-warning rounded mb-3'>
                              Register
                            </button>
                            <p className='text-danger'>Already a member?<Link style={{ textDecoration: "none", color: "black" }} to={'/login'}>login here!</Link></p>

                          </div> :
                          <div className='d-flex align-items-center flex-column '>
                            <button onClick={handleLogin} className='btn btn-warning rounded mb-3'>
                              login
                            </button>
                            <p className='text-danger'>New to the site? Click here to <Link style={{ textDecoration: "none", color: "black" }} to={'/register'}>register</Link></p>
                          </div>}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default Authentication