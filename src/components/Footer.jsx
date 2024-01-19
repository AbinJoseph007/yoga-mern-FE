import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div data-aos="fade-up" style={{ width: "100%", height: "40vh", backgroundColor: "black" }} className="d-flex justify-content-center align-items-center flex-column w-100 mt-1 ">
    <div className="container my-5 mt-3">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="ms-5" style={{ marginTop: "120px" }}>
              <h3 className=" text-success ms-5 mt-5">Connect On</h3>
              <div className="icons d-flex justify-content-evenly mt-5 me-5">
                <Link to={"https://www.instagram.com/accounts/login/"} style={{ textDecoration: "none", color: "white" }}>
                  <i class="fa-brands fa-instagram fa-2x"></i>
                </Link>
                <Link to={"https://www.facebook.com/"} style={{ textDecoration: "none", color: "white" }}>
                  <i class="fa-brands fa-facebook fa-2x"></i>
                </Link>
                <Link to={"https://twitter.com/i/flow/login?redirect_after_login=%2Fsettings%2Faccount%3Flang%3Den"} style={{ textDecoration: "none", color: "white" }}>
                  <i class="fa-brands fa-twitter fa-2x"></i>
                </Link>
                <Link to={"https://in.linkedin.com/"} style={{ textDecoration: "none", color: "white" }}>
                  <i class="fa-brands fa-linkedin-in fa-2x"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="ms-3 mb-2">
              <h1 className="mt-3">
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "80px",
                  }}
                >
                  YOGI <span className="text-success"></span>
                </a>
              </h1>
              <ul className="list-unstyled text-succes fs-5 mt-3">
                <h3 className="text-success mt-5 mb-4" style={{ textDecoration: "none", marginLeft: "90px" }}>
                  {" "}
                  Contact Us
                </h3>
                <li
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    marginLeft: "90px",
                    fontSize: "1rem"
                  }}
                  className="mt  text-light"
                >
                  123 456 7890{" "}
                </li>
                <li
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    marginLeft: "90px",
                    fontSize: "1rem"
                  }}
                  className="mt text-light"
                >
                  329 Queensberry Street, North Melbourne
                </li>
                <li
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    marginLeft: "90px",
                    fontSize: "1rem"
                  }}
                  className="mt  text-light"
                >
                  support@jobnestle.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ms-5">
              <h3
                className="text-success"
                style={{
                  textDecoration: "none",
                  marginLeft: "150px",
                  marginTop: "105px",
                }}
              >
                Site Policies
              </h3>
              <ul className="ms-4">
                <li
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    marginLeft: "90px",
                  }}
                  className="mt text-light mt-4"
                >
                  Terms and Conditions
                </li>
                <li
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    marginLeft: "90px",
                  }}
                  className="mt  text-light"
                >
                  Licence
                </li>
                <li
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    marginLeft: "90px",
                  }}
                  className="mt  text-light"
                >
                  Documentations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer