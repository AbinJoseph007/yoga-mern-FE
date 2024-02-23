import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { BASE_URL } from '../services/baseurl';
import Swal from 'sweetalert2';
import { updateTeacherAPI } from '../services/allAPI';

function Tedashbord() {

  const [teacherProfile ,setTeacherProfile]= useState({
    tutorname:"",
    email:"",
    password:"",
    phonenumber:"",
    specialization:"",
    experience:"",
    instgram:"",
    profile:""
  })

  const [isUpdate ,setIsUpdate] = useState(false)
  
  const [existingImage , setExistingImage] = useState("")
  const [preview , setPreview] = useState("")

  useEffect(()=>{
    const teacher = JSON.parse(sessionStorage.getItem("exitstingteacher"))
    setTeacherProfile({...teacherProfile,tutorname:teacher.tutorname,email:teacher.email,password:teacher.password,phonenumber:teacher.phonenumber,specialization:teacher.specialization,experience:teacher.experience,instgram:teacher.instgram,profile:""})

    setExistingImage(teacher.profile)

  },[isUpdate])
 
  useEffect(()=>{
       if(teacherProfile.profile){
        setPreview(URL.createObjectURL(teacherProfile.profile))
       }
       else{
        setPreview("")
       }
  },[teacherProfile.profile])

  const handleProfileUpdate = async()=>{
    const{tutorname,email,password,phonenumber,specialization,experience,instgram,profile} = teacherProfile
    if(!instgram || !phonenumber){
      Swal.fire({
        title: "🚫",
        icon: "info",
        text: "Please fill the form completely"
    });
    }
    else{
      const reqBody = new FormData()
      reqBody.append("tutorname",tutorname)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("phonenumber",phonenumber)
      reqBody.append("specialization",specialization)
      reqBody.append("experience",experience)
      reqBody.append("instgram",instgram)
      preview?reqBody.append("profile",profile):reqBody.append("profile",existingImage)

    
    const tokens = sessionStorage.getItem("tokens")

    if(preview){
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${tokens}`
    }
    const result = await updateTeacherAPI(reqBody,reqHeader)
    console.log(result);
    if(result.status === 200){
      Swal.fire({
        title: "",
        icon: "success",
        text: "successfull"
    });
    sessionStorage.setItem("exitstingteacher", JSON.stringify(result.data))
    sessionStorage.setItem("tokens", result.data.tokens)

    setIsUpdate(true)

    }
    else{
      console.log(result.response.data);
    }
    }
    else{
      const reqHeader = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokens}`
    }
    const result = await updateTeacherAPI(reqBody,reqHeader)
    console.log(result);
    if(result.status === 200){
      Swal.fire({
        title: "",
        icon: "success",
        text: "successfull"
    });
    sessionStorage.setItem("exitstingteacher", JSON.stringify(result.data))
    sessionStorage.setItem("tokens", result.data.tokens)

    setIsUpdate(true)

    }
    else{
      console.log(result.response.data);
    }
    }
  }
}


  return (
    <>
      <div className='card shadow p-5 w-75 justify-content-center mt-5 ms-5 me-5' style={{backgroundColor:"black"}}>
        <Card style={{ width: '100%' }}>
          <label htmlFor="profile">
            <input id="profile" type="file" style={{ display: "none" }} onChange={(e)=>setTeacherProfile({...teacherProfile,profile:e.target.files[0]})} />
            {existingImage==""?<img
              src={preview?preview:"https://www.yogabaron.com/wp-content/uploads/2018/12/Yoga-teacher-at-front-of-yoga-class-dec9.jpg"}
              alt="no image"
              style={{ width: "100%" }}
            />:<img
            src={preview?preview:`${BASE_URL}/uploads/${existingImage}`}
            alt="no image"
            style={{ width: "100%" }}
          />}
          </label>
          <Card.Body>
            <Card.Title>{teacherProfile.tutorname}</Card.Title>
            <h5>{teacherProfile.experience}</h5>
            <h5>{teacherProfile.specialization}</h5>
            <div className="mb-3 mt-3">
              <input type="text" placeholder='instagram' className='form-control' value={teacherProfile.instgram} onChange={(e)=>setTeacherProfile({...teacherProfile,instgram:e.target.value})} />
            </div>
            <div className="mb-3 mt-2">
              <input type="text" placeholder='LinkedIn' className='form-control' value={teacherProfile.phonenumber} onChange={(e)=>setTeacherProfile({...teacherProfile,phonenumber:e.target.value})} />
            </div>
            <div className="mb-3 mt-2">
               <button onClick={handleProfileUpdate} className='btn btn-success rounded w-100'>update</button> 
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Tedashbord;
