import React from 'react'
import './Navbar.css'
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ClassIcon from "@mui/icons-material/Class";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import EventNoteIcon from "@mui/icons-material/EventNote";
import {useState} from 'react'
function Navbar() {
  const [state,setState]= useState(false)
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <li className="row" onClick={()=>setState(!state)}>
          <div id="icon">
            <LibraryBooksIcon />
          </div>
          <div id="title">Course</div>
        </li>
        
        <li className="row">
          <div id="icon">
            <ClassIcon />
          </div>
          <div id="title">Class</div>
        </li>
        <li className="row">
          <div id="icon">
            <EventNoteIcon />
          </div>
          <div id="title">Timetable</div>
        </li>
        <li className="row">
          <div id="icon">
            <UploadFileIcon />
          </div>
          <div id="title">Uploads</div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar