import {NavLink,Link} from 'react-router-dom'
import React from "react";
import './Login.css'

function Signup() {
  
  
  
  return (
    <div>
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <Link to="/studentsignup">
              <button className="log_button">Student</button>
            </Link>
          </form>

          <br></br>

          <form class="login-form">
            <Link to="/teachersignup">
              <button className="log_button">Teacher</button>
            </Link>
          </form>
          <br></br>
          <form class="login-form">
            <Link to="/hodsignup">
              <button className="log_button">HoD</button>
            </Link>
          </form>
          <br></br>

          <form class="login-form">
            <Link to="/counsellorsignup">
              <button className="log_button">Counseller</button>
            </Link>
          </form>
          <Link to="/">
            <p class="message">
              Already registered? <a>Login</a>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
