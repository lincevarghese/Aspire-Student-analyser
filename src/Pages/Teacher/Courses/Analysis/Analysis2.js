import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { RealtimeDataBright2 } from "../../../../components/List/Bright2";
import { RealtimeDataWeak2 } from "../../../../components/List/Weak2";
import { RealtimeDataSingle2 } from "../../../../components/List/Single2";

function Analysis2() {
  return (
    <div>
      <div>
        <RealtimeDataSingle2 />
        <RealtimeDataBright2 />
        <RealtimeDataWeak2 />
      </div>
    </div>
  );
}

export default Analysis2;
