import React from 'react'
import '../Navbar.css'
import DashboardIcon from "@mui/icons-material/Dashboard";
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div className="Sidebar">
      <ul className="sidebarList">
        <NavLink to="dashboard">
          <li className="row">
            <div id="icon">
              <DashboardIcon />
            </div>
            <div id="title">Dashboard</div>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
 
export default Navbar