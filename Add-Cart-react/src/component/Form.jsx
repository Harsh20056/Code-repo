import React, { useState } from 'react'

const form = ({userData, setUserData}) => {

  let [naam , setNaam]=useState('')
  let [des, setDes]=useState('')
  let [email , setEmail]=useState('')
  let [image , setImage]=useState('')

  const handleSubmit=(e)=>{
    {
        e.preventDefault()
        const newdata={
          name: naam,
          email,   // set email in email key
          designation: des,
          imageUrl: image,
        }

        setNaam("")
        setDes("")
        setEmail("")
        setImage("")

        const newDataArr=[...userData, newdata]
 
        localStorage.setItem("UserData",JSON.stringify(newDataArr))
        setUserData(newDataArr)
      }
  }

  return (
      <form action="" onSubmit={handleSubmit}>
        <input required value={naam} onChange={(e)=> setNaam(e.target.value)} type="text" placeholder='Name'/>
        <input required value={des} onChange={(e)=> setDes(e.target.value)} type="text" placeholder='Designation'/>
        <input required value={email} onChange={(e)=> setEmail(e.target.value)}type="email"placeholder='Email'/>
        <input value={image} onChange={(e)=> setImage(e.target.value)}type="url" placeholder='Image url'/>
        <input id='submitBtn' type="submit" />
      </form>
  )
}

export default form
