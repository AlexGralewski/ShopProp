import React from "react"

const SideMenu = props => {
  let classes = "side-menu"

  if (props.isMenuOpen) {
    classes = "side-menu open"
  }
  return(

    <div className={classes}>
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li style={{color:'red'}}>Sale</li>
      </ul>
    </div>
  )
  }

export default SideMenu