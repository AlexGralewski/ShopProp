import React from "react"

const SideMenu = props => {
  let classes = "side-menu"

  if (props.isMenuOpen) {
    classes = "side-menu open"
  }
  return(

    <div className={classes}>
      <ul>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>
    </div>
  )
  }

export default SideMenu