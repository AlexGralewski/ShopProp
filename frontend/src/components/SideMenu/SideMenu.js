import React from "react"
import {Link} from "react-router-dom"

const SideMenu = props => {
  let classes = "side-menu"

  if (props.isMenuOpen) {
    classes = "side-menu open"
  }
  return(

    <div className={classes}>
      <ul>
        <li><Link to="/products">Women</Link></li>
        <li><Link to="/products">Men</Link></li>
        <li><Link to="/products">Kids</Link></li>
        <li style={{color:'red'}}><Link to="/products">Seasonal Sale</Link></li>
      </ul>
    </div>
  )
  }

export default SideMenu