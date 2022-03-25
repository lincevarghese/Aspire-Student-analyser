import React from 'react'
import Navbar from '../../Pages/Counsellor/Counavbar/Navbar'
import Topbar from '../../components/Topbar/Topbar'
import CardStudent from '../../components/Card/CardStudent';

function Counsellor() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <CardStudent />
    </div>
  );
}

export default Counsellor