import React from "react"

const Slide = props => {
  console.log("props", props)
  return(
  <div 
    style={{backgroundImage:`url(${props.content})`}} 
    className="slide">

  </div>
)}

export default Slide