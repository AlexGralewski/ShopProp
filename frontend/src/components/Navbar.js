import React from "react"


const Navbar = props => (
    <nav>
      <div className="nav-left">
        <button className="toggle-button" onClick={props.openMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <span className="nav-logo"><a href="/">ShopProp</a></span>
      </div>

      <div className="nav-middle">
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li style={{color:"red"}}>Seasonal Sale!</li>
        </ul>
      </div>

      <div className="nav-items">
        <ul>
          <li className="nav-search">
            <div className="nav-item-icon"><i className="fas fa-search"></i></div>
            <div className="nav-item-title">Search</div>
          </li>
          <li>
            <a href="/">
              <div className="nav-item-icon"><i className="fas fa-user"></i></div>
              <div className="nav-item-title">Account</div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="nav-item-icon"><i className="fas fa-shopping-cart"></i></div>
              <div className="nav-item-title">Cart</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
)

export default Navbar