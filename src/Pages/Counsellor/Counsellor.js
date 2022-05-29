import React from 'react'
import Navbar from './Navbar'
import Topbar from '../../components/Topbar/Topbar'
import CardStudent from './CardStudent'
import { Outlet } from 'react-router-dom';
function Counsellor() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Outlet/>
    </div>
  );
}

export default Counsellor