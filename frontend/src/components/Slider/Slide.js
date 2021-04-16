import React from "react"

const Slide = props => (
  <div 
    style={{backgroundImage:`url(${props.content.image})`}} 
    className="slide">
      <div className="slide-title">
        {props.content.title}
      </div>
  </div>
)

export default Slide