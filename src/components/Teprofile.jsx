import React, { useEffect, useState } from 'react'
import Header from './Header'
import { AllTeacherAPI } from '../services/allAPI'
import { BASE_URL } from '../services/baseurl'
import "./Teprofile.css"
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Teprofile() {
    const [allTeacher , setAllTeacher] = useState([])


  const [istoken , setIsToken]= useState(false)
  const getAllTeacher = async ()=>{
   

    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await AllTeacherAPI(reqHeader)
      console.log(result.data);
     if(result.status === 200){
      setAllTeacher(result.data)
     }
    }
  }


  useEffect(()=>{
     getAllTeacher()
  },[])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsToken(true)
    }
  })
  return (
    <>
    <Header/>
    <div class="team">
            <div class="container" id='cardsss'>
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p style={{marginTop:"70px"}}>Yoga Trainer</p>
                    <h2>Expert Yoga Trainer</h2>
                </div>
                {allTeacher?.length>0?
                 allTeacher.map((item)=>( <div class="row">
                 <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                     <div class="team-item">
                         <div class="team-img">
                             <img src={item?`${BASE_URL}/uploads/${item.profile}`:"https://www.yogabaron.com/wp-content/uploads/2018/12/Yoga-teacher-at-front-of-yoga-class-dec9.jpg"} alt="Image 4"/>
                             <div class="team-social">
                                 <a href={'/cources'}><i class="fa-solid fa-landmark"></i></a>
                                 <a href={item.instgram}><i class="fab fa-instagram"></i></a>
                             </div>
                         </div>
                         <div class="team-text">
                             <h2>{item.tutorname}</h2>
                             <p>{item.specialization}</p>
                             <p>{item.phonenumber}</p>
                             <p>{item.experience}</p>
                         </div>
                     </div>
                 </div>
                 
             </div>))
               :<div>
               {istoken?<p className=' fs-5 text-danger  text-center'>sorry no such classes currently available</p> : <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
                  <img src="https://cdn-icons-png.flaticon.com/512/6360/6360303.png" alt="login gif" height={'300px'} width={'300px'} style={{marginTop:"40px"}} />
                  <p className='mt-5' style={{textDecoration:"ActiveBorder"}}>please login as a user to see more about Teachers :<Link style={{textDecoration:"none", color:"purple"}} to={'/login'}> login</Link></p></div>}
              </div>}
            </div>
        </div>
        <Footer />
        </>
  )
}

export default Teprofile