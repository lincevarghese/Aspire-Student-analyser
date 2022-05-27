import React,{useRef} from "react";
import ReactToPrint from 'react-to-print'
import { RealtimeDataBright } from "../../../../components/List/Bright";
import { RealtimeDataWeak } from "../../../../components/List/Weak";
import { RealtimeDataSingle } from "../../../../components/List/Single";

function Analysis() {
  
  
  
  
  return (
    <div>
      
      
      <div>
        <RealtimeDataSingle  />
        <RealtimeDataBright />
        <RealtimeDataWeak  />
      </div>
    </div>
  );
}

export default Analysis;
