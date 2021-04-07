import React from "react"
import MenuToggleButton from "./SideMenu/MenuToggleButton"

const Navbar = () => (
    <nav>
      <div className="nav-logo"><a href="#">ShopProp</a></div>
      <div className="nav-search">SearchBar</div>
      
      <div className="nav-items">
        <ul>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>
      <MenuToggleButton />
    </nav>
)

export default Navbar