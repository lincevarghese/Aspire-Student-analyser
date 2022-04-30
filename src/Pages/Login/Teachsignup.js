import React from 'react'
import './Signup.css'

import {useState} from 'react'
import {Link, useNavigate } from "react-router-dom";
import {useUserAuth} from "../../Context/userAuthContext"
import {Alert, alert} from 'react-bootstrap'

function Teachsignup() {
  
  const[fullname,setFullname]=useState('');
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const [password,setPassword] = useState('');
  const [classname, setClass] = useState('');
  const [batch, setBatch] = useState('');
  const [role, setRole] = useState('');
  const [facultyno, setFacnumber] = useState("");
  const {signUp} = useUserAuth();
  const navigate= useNavigate();
  const [error,setError] = useState("");

   const handleSubmit =async(e)=>{
     e.preventDefault();
     try{
      await signUp(email,password);
      navigate("/")
     }catch(error){
       setError(error.message);
    }
}
  
  return (
    <div>
      <div className="container">
        <div className="title">Sign Up</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Enter your name"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter a username"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                ></input>
              </div>

              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Batch</span>
                <input
                  type="text"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                  placeholder="2018-2022"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Class</span>
                <input
                  type="text"
                  value={classname}
                  onChange={(e) => setClass(e.target.value)}
                  placeholder="A or B"
                  required
                ></input>
              </div>

              <div className="input-box">
                <span className="details">Faculty no.</span>
                <input
                  type="text"
                  value={facultyno}
                  onChange={(e) => setFacnumber(e.target.value)}
                  placeholder="18/CS/001"
                  required
                ></input>
              </div>
              <br></br>
              <div className="input-box">
                <input
                  type="radio"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  name="role"
                  id="dot-4"
                />
                <span className="details">Role</span>
                <div className="category">
                  <label for="dot-4">
                    <span className="dot four"></span>
                    <span className="gender">Teacher</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="input-box button">
              <input type="submit" value="Register"></input>
            </div>

            {error && <Alert variant="danger">{error}</Alert>}

            <Link to="/">
              <p className="message-log">
                Already registered? <a>Login</a>
              </p>
            </Link>
          </form>
          <div />
        </div>
      </div>
    </div>
  );
}
export default Teachsignup;