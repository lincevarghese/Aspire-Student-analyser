import { NavLink, Link } from "react-router-dom";
import React from "react";
import "./Login.css";

function Signup() {
  return (
    <div>
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <Link to="/student">
              <button className="log_button">Student</button>
            </Link>
          </form>

          <br></br>

          <form class="login-form">
            <Link to="/teacher">
              <button className="log_button">Teacher</button>
            </Link>
          </form>
          <br></br>
          <form class="login-form">
            <Link to="/hod">
              <button className="log_button">HoD</button>
            </Link>
          </form>
          <br></br>

          <form class="login-form">
            <Link to="/counsellor">
              <button className="log_button">Counsellor</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
