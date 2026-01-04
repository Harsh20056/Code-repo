import React, { useState } from 'react'
import Form from './component/form'
import Card from './component/card'

const App = () => {

  let [userData, setUserData] =useState([])   // State uplifting
  if((JSON.parse(localStorage.getItem("UserData")))){
    userData=(JSON.parse(localStorage.getItem("UserData")))
  }
  
  return (
    <div id='main'>
      <div className="right"><Form userData={userData} setUserData={setUserData}/></div>
      <div className="left" >
        {
          userData.map((elem ,index)=>{
            return <Card elem={elem} key={index} userData={userData} setUserData={setUserData}/>
          })
        }
        </div>
    </div>
  )
}

export default App
