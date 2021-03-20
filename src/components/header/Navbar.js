import React from "react"
import "./Navbar.css"
import {
  // Switch,
  // Route,
  Link
} from "react-router-dom";

const Navbar = () => (
  <div className="navbar">
    <ul className="nav-ul">
        <li className="nav-li"><Link to="/" className="a-class">Home</Link></li>
        <li className="nav-li"><Link to="/paintings" className="a-class">Paintings</Link></li>
        <li className="nav-li"><Link to="/rooms" className="a-class">Current Rooms in Exhibit</Link></li>
    </ul>
  </div>  
  
  
)
export default Navbar;