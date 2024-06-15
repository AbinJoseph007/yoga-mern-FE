import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    
    <>
      <div className=" py-5" style={{backgroundColor:"black"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="text-success">Connect On</h3>
              <div className="icons d-flex justify-content-evenly mt-3">
                <Link to={"https://www.instagram.com/accounts/login/"} style={{ textDecoration: "none", color: "white" }}>
                  <i className="fab fa-instagram fa-2x"></i>
                </Link>
                <Link to={"https://www.facebook.com/"} style={{ textDecoration: "none", color: "white" }}>
                  <i className="fab fa-facebook fa-2x"></i>
                </Link>
                <Link to={"https://twitter.com/i/flow/login?redirect_after_login=%2Fsettings%2Faccount%3Flang%3Den"} style={{ textDecoration: "none", color: "white" }}>
                  <i className="fab fa-twitter fa-2x"></i>
                </Link>
                <Link to={"https://in.linkedin.com/"} style={{ textDecoration: "none", color: "white" }}>
                  <i className="fab fa-linkedin-in fa-2x"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <h1>
                <a href="" className="text-success" style={{textDecoration:"none"}}>YOGI</a>
              </h1>
              <ul className="list-unstyled text-succes fs-5 mt-3">
                <h3 className="text-success mt-4 mb-4">Contact Us</h3>
                <li className="text-light">987 874 7890</li>
                <li className="text-light">329 , New Delhi</li>
                <li className="text-light">support@jobnestle.com</li>
              </ul>
            </div>
            <div className="col-lg-4 mb-4">
              <h3 className="text-success">Site Policies</h3>
              <ul>
                <li className="text-light">Terms and Conditions</li>
                <li className="text-light">Licence</li>
                <li className="text-light">Documentations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
