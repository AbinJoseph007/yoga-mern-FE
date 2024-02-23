import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

export const userRegisterAPI = async(user)=>{
    return await commonAPI('POST',`${BASE_URL}/users/register`,user,"")
}

export const userLoginAPI = async (user)=>{
   return await commonAPI('POST',`${BASE_URL}/users/login`,user,"")
}

//techer
export const teacherRegisterAPI = async (teacher) =>{
   return await commonAPI('POST' ,`${BASE_URL}/teachers/teregister`,teacher,"")
}

export const teacherLoginAPI = async (teacher) =>{
    return await commonAPI('POST' ,`${BASE_URL}/teachers/telogin`,teacher,"")
 }

 //add class
 export const addClassAPI = async (reqBody , reqHeader) =>{
   return await commonAPI('POST' ,`${BASE_URL}/class/add`,reqBody,reqHeader)
}


export const AllClassAPI = async (searchKey,reqHeader) =>{
   return await commonAPI('GET' ,`${BASE_URL}/classes/all-class?search=${searchKey}`,"",reqHeader)
}

export const teacherClassAPI = async (reqHeader) =>{
   return await commonAPI('GET' ,`${BASE_URL}/teacher/all-class`,"",reqHeader)
}

export const editClassAPI = async (classId,reqBody,reqHeader) =>{
   return await commonAPI('PUT',`${BASE_URL}/classes/edit/${classId}`,reqBody,reqHeader)
}

export const deleteClassAPI = async (classId,reqHeader) =>{
   return await commonAPI('DELETE',`${BASE_URL}/classes/remove/${classId}`,{},reqHeader)
}

export const updateTeacherAPI = async (reqBody,reqHeader) =>{
   return await commonAPI('PUT',`${BASE_URL}/teacher/edit`,reqBody,reqHeader)
}


export const AllTeacherAPI = async (reqHeader) =>{
   return await commonAPI('GET' ,`${BASE_URL}/teachers/all-teachers`,"",reqHeader)
}