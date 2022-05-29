import React from 'react'
import "./Courses.css"
import { NavLink } from "react-router-dom";

function Courses() {
  return (
    <div className="main-container">
      <NavLink to="analysis1">
        <div className="cardcourse card-1">
          <h4 className="cardcourse_title">CS 203</h4>
          <h2 className="cardcourse__title">Software Engineering Project Management</h2>
        </div>
      </NavLink>
      <NavLink to="analysis2">
      <div className="cardcourse card-2">
        <h4 className="cardcourse_title">CS 205</h4>
        <h2 className="cardcourse__title">
          Object Oriented Programming
        </h2>
      </div>
    </NavLink>
    </div>
  );
}

export default Courses