import React from 'react'

const Card = ({elem ,userData ,setUserData}) => {

  return (
      <div className="card">
        <img src={elem.imageUrl} alt="" />
        <h2>{elem.name}</h2>
        <h3>{elem.designation}</h3>
        <h4>{elem.email}</h4>
        <button  onClick={()=>{
          const filterData=userData.filter((val)=>{
            if(val!==elem)
            {
              return true
            }
          })
          localStorage.setItem("UserData",JSON.stringify(filterData))
          setUserData(filterData)
        }} id='removeBtn'>Remove</button>
      </div>
  )
}

export default Card
