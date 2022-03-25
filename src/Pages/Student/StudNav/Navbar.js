import React from 'react'
import './Navbar.css'
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import TimelineIcon from "@mui/icons-material/Timeline";
import EventNoteIcon from "@mui/icons-material/EventNote";

function Navbar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <li className="row">
          <div id="icon">
            <DashboardIcon />
          </div>
          <div id="title">Dashboard</div>
        </li>
        <li className="row">
          <div id="icon">
            <AssignmentTurnedInIcon />
          </div>
          <div id="title">Attendance</div>
        </li>
        <li className="row">
          <div id="icon">
            <TimelineIcon />
          </div>
          <div id="title">Performance</div>
        </li>
        <li className="row" >
          <div id="icon">
            <EventNoteIcon />
          </div>
          <div id="title">Timetable</div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar