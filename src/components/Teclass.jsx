import React, { useContext, useEffect, useState } from 'react'
import Addclass from './Addclass'
import { deleteClassAPI, teacherClassAPI } from '../services/allAPI'
import { addClassResponseContext, editClassResponseContext } from '../context/ContextShare'
import Editclass from './Editclass'

function Teclass() {


  const {editClassResponse , setEditClassResponse}= useContext(editClassResponseContext)
  const [teacherClass , setTeacherClass] = useState([])


  const {addClassResponse , setAddClassResponse} = useContext(addClassResponseContext)

  const getTeacherClass = async()=>{

    const tokens = sessionStorage.getItem("tokens")
    const reqHeader = {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${tokens}`
  }

  const result = await teacherClassAPI(reqHeader)
  console.log(result.data);
  setTeacherClass(result.data)

  }

  useEffect(()=>{
      getTeacherClass()
  },[addClassResponse,editClassResponse])

  const handleDelete = async (id) => {
    const tokens = sessionStorage.getItem("tokens");
    const reqHeader = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${tokens}`
    };

    try {
        const result = await deleteClassAPI(id, reqHeader);
        console.log(result);

        if (result.status === 200) {
            getTeacherClass();
        } else {
            console.error("Failed to delete class:", result.response.data);
        }
    } catch (error) {
        console.error("Error deleting class:", error.message);
    }
};

  return (
    <>
      <div className='card shadow w-100 p-5 mb-5  mt-5 ' style={{backgroundColor:"black"}}>
        <div className='d-flex justify-content-between'>
          <h3 className='text-success'>Added classes</h3>
          <Addclass/>
        </div>
        <div className='mt-4'>
         { teacherClass?.length>0? 
           teacherClass.map((item)=>(
            <div className='d-flex align-items-center p-3 rounded mb-3'>
            <h5 style={{color:"white"}}>{item.classname}</h5>
            <div className="ms-auto d-flex">
              <button onClick={()=>handleDelete(item._id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
              <Editclass classes={item}/>
            </div>
          </div>
           ))
         :
          <p className='text-danger fw-bolder fs-4 mt-3'>No classes Uploaded here!!!!</p>}
        </div>
      </div>
    </>
  )
}

export default Teclass
