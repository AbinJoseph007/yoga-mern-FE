import React, { useContext, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { teacherLoginAPI, teacherRegisterAPI } from '../services/allAPI';
import Swal from 'sweetalert2';
import { isAuthTokenContext } from '../context/ContextShare';

function Teacherauth({ registers }) {

    const {isAuthToken , setIsAuthToken} = useContext(isAuthTokenContext)
    // State for storing teacher data
    const [teacherData, setTeacherData] = useState({
        tutorname: "",
        email: "",
        password: "",
        phonenumber: "",
        specialization: ""
    });

    const navigate = useNavigate()

    const registerform = registers ? true : false

    console.log(teacherData);

    const handleteacher = async (e) => {
        e.preventDefault()
        const { tutorname, email, password, phonenumber, specialization } = teacherData

        if (!tutorname || !email || !password || !phonenumber || !specialization) {
            Swal.fire({
                title: "🚫",
                icon: "info",
                text: "Please fill the form"
            });
        }
        else {
            const result = await teacherRegisterAPI(teacherData)
            console.log(result);
            if (result.status === 200) {
                Swal.fire({
                    title: "yeah",
                    icon: "success",
                    text: `${result.data.tutorname} is successfully registered`
                });

                setTeacherData({
                    tutorname: "",
                    email: "",
                    password: "",
                    phonenumber: "",
                    specialization: ""
                })
                //navigate
                navigate('/telogin')
            }
            else {
                Swal.fire({
                    title: "Oops",
                    icon: "info",
                    text: (result.response.data)
                });
            }
        }
    }

    const handletelogin = async (e) => {
        e.preventDefault()

        const { email, password } = teacherData

        if (!email || !password) {
            Swal.fire({
                title: "Oops",
                icon: "info",
                text: "Please fill the form completely"
            });
        }
        else {
            const result = await teacherLoginAPI(teacherData)
            console.log(result);

            if (result.status === 200) {

                Swal.fire({
                    title: "✅",
                    icon: "success",
                    text: "login successfull"
                });
                setIsAuthToken(true)
                // store data

                sessionStorage.setItem("exitstingteacher", JSON.stringify(result.data.exitstingteacher))
                sessionStorage.setItem("tokens", result.data.tokens)
                //state empty
                setTeacherData({
                    email: "",
                    password: ""
                })
                setTimeout(()=>{
                    navigate('/dashbord') 
                },2500)

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
        <div id='bgs' style={{ width: "100%", height: "100vh", backgroundColor: "ButtonFace" }} className='d-flex justify-content-center align-items-center'>
            <div className="container-fluid w-50">
                <h1 className='d-flex justify-content-center align-items-center' data-aos="fade-up">Tutor Authentication</h1>
                <Link className='d-flex justify-content-center align-items-center' to={'/'} style={{ textDecoration: "none" }} data-aos="fade-up">Home</Link>
                <div className="shadow p-5">
                    <Row>
                        <Col>
                            <div className="row align-items-center shadow rounded" data-aos="fade-up">
                                <div className="col-lg-6">
                                    <img src="https://images.news18.com/ibnlive/uploads/2022/09/yoga-2.jpg" alt="no image" width={'100%'} />
                                </div>
                                <div className="col-lg-6">
                                    <div className='d-flex align-items-center justify-content-center flex-column '>
                                        <h6 style={{ color: "black" }} className='mt-3'>
                                            {registers ? "Sign up to your account" : "Sign in to your account"}
                                        </h6>
                                        <Form className='mt-3 w-75' >
                                            {registers &&
                                                <Form.Group className="mb-3" controlId="formBasicTutorName">
                                                    <Form.Control type="text" placeholder="Enter tutorName" value={teacherData.tutorname} onChange={(e) => setTeacherData({ ...teacherData, tutorname: e.target.value })} />
                                                </Form.Group>
                                            }
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control type="email" placeholder="Enter email" value={teacherData.email} onChange={(e) => setTeacherData({ ...teacherData, email: e.target.value })} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control type="password" placeholder="Enter password" value={teacherData.password} onChange={(e) => setTeacherData({ ...teacherData, password: e.target.value })} />
                                            </Form.Group>
                                            {registers &&
                                                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                                    <Form.Control type="tel" placeholder="Enter phone number" value={teacherData.phonenumber} onChange={(e) => setTeacherData({ ...teacherData, phonenumber: e.target.value })} />
                                                </Form.Group>
                                            }
                                            {registers &&
                                                <Form.Group className="mb-3" controlId="formBasicSpecialization">
                                                    <Form.Control type="text" placeholder="Specialization" value={teacherData.specialization} onChange={(e) => setTeacherData({ ...teacherData, specialization: e.target.value })} />
                                                </Form.Group>
                                            }
                                            {
                                                registerform ?
                                                    <div className='d-flex align-items-center flex-column '>
                                                        <button onClick={handleteacher} className='btn btn-warning rounded mb-3'>
                                                            Register
                                                        </button>
                                                        <p className='text-danger'>Already a member?<Link style={{ textDecoration: "none", color: "black" }} to={'/telogin'}>login here!</Link></p>
                                                    </div> :
                                                    <div className='d-flex align-items-center flex-column '>
                                                        <button onClick={handletelogin} className='btn btn-warning rounded mb-3'>
                                                            login
                                                        </button>
                                                        <p className='text-danger'>New to the site? Click here to <Link style={{ textDecoration: "none", color: "black" }} to={'/teregister'}>register</Link></p>
                                                    </div>
                                            }
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Teacherauth;
