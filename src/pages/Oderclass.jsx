import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Orderclass.css'
import { FaRupeeSign } from "react-icons/fa";


function Oderclass() {
    return (
        <>
            <Header />
            <div style={{ backgroundColor: "lightblue" }}>
                <div class="page-header " style={{ marginTop: "90px", backgroundColor: "" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-12 ">
                                <h2 className='justify-content-center align-items-center'>Price</h2>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="price" style={{ marginBottom: "100px" }}>
                    <div class="container">
                        <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p>Yoga Package</p>
                            <h2>Yoga Pricing Plan</h2>
                        </div>
                        <div class="row">
                            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.0s">
                                <div class="price-item">
                                    <div class="price-header">
                                        <div class="price-title">
                                            <h2>Basic</h2>
                                        </div>
                                        <div class="price-prices">
                                            <h2><small><FaRupeeSign /></small>49<span>/ mo</span></h2>
                                        </div>
                                    </div>
                                    <div class="price-body">
                                        <div class="price-description">
                                            <ul>
                                                <li>Personal Trainer</li>
                                                <li>Special Class</li>
                                                <li>Free Tutorials</li>
                                                <li>Group Training</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="price-footer">
                                        <div class="price-action">
                                            <a class="btn" href="">Join Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="price-item featured-item">
                                    <div class="price-header">
                                        <div class="price-status">
                                            <span>Popular</span>
                                        </div>
                                        <div class="price-title">
                                            <h2>Standard</h2>
                                        </div>
                                        <div class="price-prices">
                                            <h2><small><FaRupeeSign /></small>99<span>/ mo</span></h2>
                                        </div>
                                    </div>
                                    <div class="price-body">
                                        <div class="price-description">
                                            <ul>
                                                <li>Personal Trainer</li>
                                                <li>Special Class</li>
                                                <li>Free Tutorials</li>
                                                <li>Group Training</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="price-footer">
                                        <div class="price-action">
                                            <a class="btn" href="">Join Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                                <div class="price-item">
                                    <div class="price-header">
                                        <div class="price-title">
                                            <h2>Premium</h2>
                                        </div>
                                        <div class="price-prices">
                                            <h2><small><FaRupeeSign />
                                            </small>149<span>/ mo</span></h2>
                                        </div>
                                    </div>
                                    <div class="price-body">
                                        <div class="price-description">
                                            <ul>
                                                <li>Personal Trainer</li>
                                                <li>Special Class</li>
                                                <li>Free Tutorials</li>
                                                <li>Group Training</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="price-footer">
                                        <div class="price-action">
                                            <a class="btn" href="">Join Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />




        </>
    )
}

export default Oderclass