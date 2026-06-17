import React from 'react'

const Card = (props) => {
  return (
    <div style={{ border: '2px solid red', width: '200px', margin: "10px", padding: "10px" }}>
      <h3>Student Record</h3>
      <h3>Name: {props.name}</h3>
      <h3>Class: {props.className}</h3>
      
      <img 
        src={props.img} 
        alt="student" 
        style={{ width: "100%", height: "auto" }} 
      />
    </div>
  )
}

export default Card