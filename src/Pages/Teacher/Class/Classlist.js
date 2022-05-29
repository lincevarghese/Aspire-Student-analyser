import React from 'react'
import { BrightTot } from '../../../components/List/BrightTot'
import Studentlist from '../../../components/List/Studentlist'
import { WeakTot } from '../../../components/List/WeakTot'


function Classlist() {
  return (
    <div>
    <Studentlist/>
    <BrightTot/>
    <WeakTot/>
    </div>
  )
}

export default Classlist