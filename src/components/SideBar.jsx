import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

 
const SideBar = () => {
  return (
    <div className="sidebar">
    <div>
    <img className="logo" src={LOGO_URL} />
    </div>
    <div className="sidebar-items">
    <ul>
          <li>
          <Link to="/" className="sidebar-item"><span>Manage Groups</span></Link>
          </li>
      
     <li><Link to="/about" className="sidebar-item">Manage Rules</Link></li> 
      <li><Link to="/services/1" className="sidebar-item">Manage Exceptions</Link></li> 
      <li><Link to="/services/2" className="sidebar-item">Publish Prices</Link></li> 
      <li><Link to="/services/2" className="sidebar-item">View SKU</Link></li> 
      </ul>
      {/* Add more links if needed */}
      </div>
    </div>
  );
};
 
export default SideBar;