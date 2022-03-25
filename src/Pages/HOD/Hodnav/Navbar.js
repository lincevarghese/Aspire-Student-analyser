import React from 'react'
import './HODNavbar.css'

import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupsIcon from "@mui/icons-material/Groups";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import TimelineIcon from "@mui/icons-material/Timeline";
import PsychologyIcon from "@mui/icons-material/Psychology";
function Navbar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <li className="row">
          <div id="icon">
            <GroupsIcon />
          </div>
          <div id="title">Students</div>
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
        <li className="row">
          <div id="icon">
            <PsychologyIcon />
          </div>
          <div id="title">Counselling</div>
        </li>
        <li className="row">
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