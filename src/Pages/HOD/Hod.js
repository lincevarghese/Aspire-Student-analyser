import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Navbar from '../../Pages/HOD/Hodnav/Navbar'
import Yearcard from './Yearcard';


function Hod() {
  return (
    <div>
      <Topbar />
      <Yearcard />
      <Navbar />
    </div>
  );
}

export default Hod