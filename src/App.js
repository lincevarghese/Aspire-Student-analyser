import './App.css';


import { Component, useState } from 'react';
import Card from './components/Card/CardStudent';
import {
  BrowserRouter as Router,
  Route,Routes,Switch
} from "react-router-dom";

import React from 'react';
import Login from './Pages/Login/Login';
import CardStudent from './components/Card/CardStudent';
import Topbar from './components/Topbar/Topbar';
import Student from './Pages/Student/Student';
import Teacher from './Pages/Teacher/Teacher';
import Counsellor from './Pages/Counsellor/Counsellor';
import Hod from './Pages/HOD/Hod';
import Signup from "./Pages/Login/Signup";
import Performance from './Pages/Student/Performance';
import Internal1 from './components/Graphs/Internal1/Internal1';
import Courses from './Pages/Teacher/Courses/Courses';
import Input from './Pages/Teacher/Input/Input';
import {RealtimeData} from './Pages/Teacher/Input/Input2';
import Studentlist from './components/List/Studentlist';
import Results from './components/List/Results';
import Attendmain from './Pages/Student/Attendmain';
import {Attendance1} from './components/List/Attendance';
import Dashboard from "./Pages/Student/Dashboard";
import Timetable from './Pages/Teacher/Timetable';
import Analysis from './Pages/Teacher/Courses/Analysis/Analysis';
import Studsignup from './Pages/Login/Studsignup';
import Teachsignup from './Pages/Login/Teachsignup';
import Hodsignup from './Pages/Login/Hodsignup';
import Counsignup from './Pages/Login/Counsignup';
import SignIn from './Pages/Login/SignIn'
import ProtectedRoute from './ProtectedRoute';
import Studentoverall from './components/List/Studentoverall';
import Counselling from './Pages/HOD/Counselling';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="studentsignup" element={<Studsignup />} />
          <Route path="teachersignup" element={<Teachsignup />} />
          <Route path="hodsignup" element={<Hodsignup />} />
          <Route path="counsellorsignup" element={<Counsignup />} />

          <Route path="student" element={<Student />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="attendance" element={<Attendmain />} />
            <Route path="performance" element={<Performance />} />
            <Route path="timetable" element={<Timetable />} />
          </Route>
          <Route path="teacher" element={<Teacher />}>
            <Route path="course" element={<Analysis />}>
              <Route path="analysis1" element={<Analysis />} />
            </Route>
            <Route path="uploads" element={<Input />} />
            <Route path="class" element={<Studentlist />} />
            <Route path="timetable" element={<Counselling />} />
          </Route>
          <Route path="counsellor" element={<Counsellor />} />
          <Route path="hod" element={<Hod />}>
            <Route path="students" element={<Studentlist />} />
            <Route path="students/:id" element={<Studentoverall />} />
            <Route path="attendance" element={<Attendance1 />} />
            <Route path="performance" element={<Results />} />
            <Route path="counselling" element={<Studentlist />} />
            <Route path="timetable" element={<Timetable />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
