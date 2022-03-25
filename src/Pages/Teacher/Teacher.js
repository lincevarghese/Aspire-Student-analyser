import React from 'react'
import Navbar from '../../Pages/Teacher/Teachnav/Navbar'
import Topbar from '../../components/Topbar/Topbar'
import Courses from './Courses/Courses'

function Teacher() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Courses />
    </div>
  );
}

export default Teacher