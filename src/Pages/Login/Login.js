import {Link,useNavigate} from 'react-router-dom'
import React from "react";
import './Login.css'
import { useState, useEffect} from "react";
import { Alert, alert } from "react-bootstrap";
import { useUserAuth } from "../../Context/userAuthContext";



function Login() {
  
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const stud = "jasminjames544@gmail.com";
  const hod="hod@gmail.com"
  const teach="teacher@gmail.com"
  const coun="counsellor@gmail.com"
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      if(email===stud)
      navigate("/student");
      else if(email===teach)
      navigate("/teacher")
      else if(email===hod)
      navigate("/hod")
      else if(email===coun)
      navigate("/counsellor")
      else
      navigate("/signin");
    } catch (error) {
      setError(error.message);
    }
  };
  
  
  
  return (
    <div>
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input
              type="text"
              value={email}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Password"
            />
            <button onClick={handleLogin}>login</button>
            <Link to="/signup">
              <p class="message">
                Not registered? <a>Create an account</a>
              </p>
            </Link>
          </form>
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
      </div>
    </div>
  );
}

export default Login;
