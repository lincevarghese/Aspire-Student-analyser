import "./Form.css"
import { db } from "../../Firebase/Config";
import { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  onValue,
  startAt,
  orderByChild,
  query,
  equalTo,
} from "firebase/database";

function Studentattendance() {
const [data, setData] = useState({});
useEffect(() => {
  const dbRef = query(ref(db, "Attendance/"),orderByChild('Name'),equalTo("Jasmine James")); 
  onValue(dbRef, (snapshot) => {
    if (snapshot.val() != null) {
      setData({ ...snapshot.val() });
    } else {
      setData({});
    }
  });
  return () => {
    setData({});
  };
}, []);
 return (
  <div>
    {Object.keys(data).map((row, index) => {
        return (
          <>
            <table className="single_attendance">
              <th>% Attendence for Each Subject</th>
            </table>

            <table className="single_attendance">
              <tr>
                
                
                <th>CS201</th>
                <th>CS203</th>
                <th>CS205</th>
                <th>CS207</th>
                <th>CS209</th>
                <th>CS265</th>
              </tr>
              

              <tr>
                
                
                

                <td>{data[row].cs201}</td>
                <td>{data[row].cs203}</td>
                <td>{data[row].cs205}</td>
                <td>{data[row].cs207}</td>
                <td>{data[row].cs209}</td>
                <td>{data[row].cs265}</td>
                
              </tr>
              <tr></tr>
            </table>
          </>
        );
  })}
  </div>
);
}

export default Studentattendance;
