import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { AllClassAPI } from '../services/allAPI'
import { BASE_URL } from '../services/baseurl'
import { Link } from 'react-router-dom'

function Cource() {
  

  const [allClass , setAllClass] = useState([])

  const [searchKey , setsearchKey] = useState("")

  const [istoken , setIsToken]= useState(false)
  const getAllClass = async ()=>{
   

    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await AllClassAPI(searchKey,reqHeader)
      console.log(result.data);
     if(result.status === 200){
      setAllClass(result.data)
     }
    }
  }

  console.log(searchKey);

  useEffect(()=>{
     getAllClass()
  },[searchKey])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsToken(true)
    }
  })
  return (
    <>
    <Header/>
    <div  id='cards'>
      <div >
        <div  className="d-flex justify-content-center align-items-center mt-5 flex-column w-100">
                  <div className="d-flex w-25 mb-5 mt-5 ">
                    <input  style={{marginTop:"60px"}} type="text" value={searchKey} onChange={(e)=>setsearchKey(e.target.value)}  className='form-control' placeholder='search here' />
                    <i  style={{marginTop:"70px"}}  class="fa-sharp fa-solid fa-magnifying-glass ms-2 fa-1.5"></i>
                  </div>
                </div>
                <Row className='mt-5 container-fluid '>
          { allClass?.length>0?
            allClass.map((item)=>(
              <Col>
              <div className="d-flex justify-content-center align-items-center mt-5 flex-column mb-5">
                 <Card  style={{ width: '18rem',height:"25rem" }}>
                  <Card.Img  style={{height:"50%"}} variant="top" src={item?`${BASE_URL}/uploads/${item.classImage}`:""} />
                  <Card.Body>
                    <Card.Title>{item.classname}</Card.Title>
                    <Card.Text>
                     {item.classtype}
                    </Card.Text>
                    <Card.Text>
                     {item.agelimit}
                    </Card.Text>youtube link
                    <a style={{ color: "red" }} href={item.link} target='_blank'><i class="fa-solid fa-link ms-2"> </i></a>
                  </Card.Body>
                </Card>
             </div>
           </Col>
            )):<div>
             {istoken?<p style={{marginBottom:"500px" ,fontSize:"50px"}} className=' text-danger  text-center'>sorry no such classes currently available</p> : <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
                <img src="https://cdn-icons-png.flaticon.com/512/6360/6360303.png" alt="login gif" height={'300px'} width={'300px'} />
                <p className='mt-5' style={{textDecoration:"ActiveBorder"}}>please login to view more class<Link style={{textDecoration:"none", color:"purple"}} to={'/login'}> login</Link></p></div>}
            </div>}
          </Row>
      </div>
    </div>
    </>
  )
}


export default Cource