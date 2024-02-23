import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import '../pages/Home.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Blog from '../components/Blog'
import yoga1 from '../images/about.png'
import yoga2 from '../images/hero.png'

function Home() {

    const [islogin, setIslogin] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setIslogin(true)
        }
    }, [])
    console.log(islogin);

    const [login, setLogin] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem("tokens")) {
            setLogin(true)
        }
    }, [])
    console.log(login);
    return (
        <>
            <Header Home />
            <div data-aos="fade-up">
                <div className="container-fluid">
                    <div>
                        <Row>
                            <Col lg={12} >
                                <div class="hero">
                                    <div class="container-fluid">
                                        <div class="row align-items-center">
                                            <div class="col-sm-12 col-md-6">
                                                <div class="hero-text" data-aos="fade-up">
                                                    <h1>Yoga Practice For Good Health</h1>
                                                    <p>
                                                        Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body. It is an art and scince of healthy living.
                                                    </p>
                                                    <div class="hero-btn">
                                                        {login ? <Link to={'/dashbord'} className='btn btn-success rounded'>Dashboard</Link> :
                                                            <Link to={'/cources'} className='btn btn-success rounded'>cources</Link>}

                                                        {islogin ?
                                                            <Link to={'/login'} className='btn btn-success rounded'>userlogin</Link> :
                                                            <Link to={'/login'} className='btn btn-success rounded'>user login</Link>

                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6">
                                                <div class="hero-image mt-5" data-aos="fade-left">
                                                    <img src={yoga2} alt="Hero Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div class="about wow fadeInUp">
                                    <div class="container">
                                        <div class="row align-items-center">
                                            <div class="col-lg-5 col-md-6" data-aos="fade-right">
                                                <div class="about-img">
                                                    <img src={yoga1} alt="Image" />
                                                </div>
                                            </div>
                                            <div class="col-lg-7 col-md-6">
                                                <div class="section-header text-left" data-aos="fade-left">
                                                    <p>Learn About Us</p>
                                                    <h2>Welcome to Yoga</h2>
                                                </div>
                                                <div class="about-text" data-aos="fade-left">
                                                    <p>
                                                        Yoga is one of the most powerful ways to relieve stress through physical exercise, movement and breathing. And it’s just as positive for your mind as your body. So in this guide, we’ll run through 10 beautiful quotes - that keep me going, even when I haven't had time for my practice.
                                                        They’ll not only enhance your yoga practice – but also inspire, transform and improve your life too...

                                                    </p>
                                                    <p>
                                                    Yoga is a great practice for both the body and the mind, it offers peace and mindfulness to its lovers and helps them get through daily stress. Therefore, we have compiled for you some of the most amazing yoga quotes to keep you motivated and excited to get on the mat.


                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Blog />
                                </div>

                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home