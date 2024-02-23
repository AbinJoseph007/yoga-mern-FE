import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Tedashbord from '../components/Tedashbord';
import { Col, Row } from 'react-bootstrap';
import Teclass from '../components/Teclass';

function Dashbord() {
  const [tutorname, setTeachername] = useState("");

  useEffect(() => {
    setTeachername(JSON.parse(sessionStorage.getItem("exitstingteacher")).tutorname);
  }, []);

  return (
    <>
      <Header dashbord />
      <div id='yoga'>
        <div style={{ backgroundColor: "black"}}>
          <h1 className=' ms-5' style={{ fontFamily: "", textAlign: "center", color: "white",marginTop:"100px" }}>◉  {tutorname}   ◉</h1>
        </div>
        <Row className='mt-5 mb-5'>
          <Col lg={4} md={8} className='mx-auto mb-5 ms-5'>
            <Tedashbord />
          </Col>
          <Col lg={4} md={4} className='mx-auto'>
            <Teclass />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashbord;
