import React,{useRef} from "react";
import ReactToPrint from 'react-to-print'
import { RealtimeDataBright1 } from "../../../../components/List/Bright1";
import { RealtimeDataWeak1 } from "../../../../components/List/Weak1";
import {  RealtimeDataSingle1 } from "../../../../components/List/Single1";

function Analysis1() {
  
  
  
  
  return (
    <div>
      
      
      <div>
        <RealtimeDataSingle1  />
        <RealtimeDataBright1 />
        <RealtimeDataWeak1 />
      </div>
    </div>
  );
}

export default Analysis1;
