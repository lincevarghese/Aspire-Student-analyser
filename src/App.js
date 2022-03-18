//import './App.css';
import Header from './components/sidebar/Header';

import { useState } from 'react';
import Card from './components/Card/CardStudent';
import {
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";

import React from 'react';
import Login from './Pages/Login/Login';
import CardStudent from './components/Card/CardStudent';
import Topbar from './components/Topbar/Topbar';


//import Navbar from './components/Navbar/Navbar';

function App() {
  
  return (
    <Router>
    <div className="App">
        
          <Header/>
          <CardStudent/>
          <Topbar/>
         
        
         
        
      
    </div>
    </Router>
  );
}

export default App;
