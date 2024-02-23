import React, { createContext, useState } from 'react'


export const  addClassResponseContext = createContext()
export const editClassResponseContext = createContext()
export const isAuthTokenContext = createContext()


function ContextShare({children}) {
    const [addClassResponse , setAddClassResponse] = useState({})
    const [editClassResponse , setEditClassResponse] = useState({})
    const [isAuthToken , setIsAuthToken] = useState(true)
  return (
    <>
    <addClassResponseContext.Provider value={{addClassResponse , setAddClassResponse}}>
      <editClassResponseContext.Provider value={{editClassResponse , setEditClassResponse}}>
        <isAuthTokenContext.Provider value={{isAuthToken , setIsAuthToken}}>{children}</isAuthTokenContext.Provider>
        </editClassResponseContext.Provider>
    </addClassResponseContext.Provider>
    </>
  )
}

export default ContextShare