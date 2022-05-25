import React from 'react'
import './Signup.css'

import {useState} from 'react'
import {Link, useNavigate } from "react-router-dom";
import {useUserAuth} from "../../Context/userAuthContext"
import {Alert} from 'react-bootstrap'
import { uid } from "uid";
import { db } from "../../Firebase/Config";
import { ref, set } from "firebase/database";

function Hodsignup() {
  
  const[fullname,setFullname]=useState('');
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const [password,setPassword] = useState('');
  const[department,setDepartment] = useState('');
  const [role, setRole] = useState('');
  const {signUp} = useUserAuth();
  const navigate= useNavigate();
  const [error,setError] = useState("");

  function writeUserData() {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      uuid,
      email: email,
      name:fullname,
      dept:department,
      role:role,
    });
  }

   const handleSubmit =async(e)=>{
     e.preventDefault();
     try{
      await signUp(email,password);
      writeUserData();
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
                <span className="details">Department</span>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder="CSE"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Role</span>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="HoD"
                  required
                />
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
export default Hodsignup;