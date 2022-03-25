import './App.css';
import Header from './components/sidebar/Header';

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


function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="student" element={<Student />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="counsellor" element={<Counsellor />} />
          <Route path="hod" element={<Hod />} />
          <Route path="card" element={<CardStudent />} />
          <Route path="top" element={<Topbar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
