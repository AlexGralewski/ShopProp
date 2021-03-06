import React from "react"


const SliderContent = props => (
  <div 
    className="slider-content" 
    style={{
      transition:`transform ease-out ${props.transition}s`,
      transform:`translateX(-${props.translate}px)`,
      width: `${props.width}px`}}>
    {props.children}
  </div>
)

export default SliderContent