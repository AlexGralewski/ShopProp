import React from "react"
import {Link} from "react-router-dom"


const Navbar = props => (
    <nav>
      <div className="nav-left">
        <button className="toggle-button" onClick={props.openMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <span className="nav-logo"><Link to="/">ShopProp</Link></span>
      </div>

      <div className="nav-middle">
        <ul>
          <li><Link to="/products">Women</Link></li>
          <li><Link to="/products">Men</Link></li>
          <li><Link to="/products">Kids</Link></li>
          <li style={{color:"red"}}><Link to="/products">Seasonal sale</Link></li>
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
            <Link to="/cart">
              <div className="nav-item-icon"><i className="fas fa-shopping-cart"></i></div>
              <div className="nav-item-title">Cart</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
)

export default Navbar