import React from 'react'
import { BrightTot } from '../../../components/List/BrightTot'
import Studentlist1 from '../../../components/List/Studentlist1'
import { WeakTot } from '../../../components/List/WeakTot'


function Classlist() {
  return (
    <div>
    <Studentlist1/>
    <BrightTot/>
    <WeakTot/>
    </div>
  )
}

export default Classlist