import "./Form.css";
import React from "react";
import { useUserAuth } from "../../Context/userAuthContext";
import {
  getDatabase,
  ref,
  onValue,
  startAt,
  orderByChild,
  query,
  equalTo,
} from "firebase/database";
import { db } from "../../Firebase/Config";
import { Table } from "react-bootstrap";
import {useState,useEffect} from "react"
function Studentoverall1() {
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const[data,setData]=useState({});
  const { user } = useUserAuth();
  const useremail = user.Name;
   useEffect(() => {
    const dbRef1 = query(
      ref(db, "Mark1/"),
      orderByChild("Name"),
      equalTo("Jasmine James")
    );
    onValue(dbRef1, (snapshot) => {
      if (snapshot.val() != null) {
        setData1({ ...snapshot.val() });
      } else {
        setData1({});
      }
    });
    return () => {
      setData1({});
    };
  }, []);
  console.log("student",data1);
  useEffect(() => {
    const dbRef2 = query(
      ref(db, "Mark2/"),
      orderByChild("Name"),
      equalTo("Jasmine James")
    );
    onValue(dbRef2, (snapshot) => {
      if (snapshot.val() != null) {
        setData2({ ...snapshot.val() });
      } else {
        setData2({});
      }
    });
    return () => {
      setData2({});
    };
  }, []);
  useEffect(() => {
    const dbRef3 = query(
      ref(db, "Grade/"),
      orderByChild("Name"),
      equalTo("Jasmine James")
    );
    onValue(dbRef3, (snapshot) => {
      if (snapshot.val() != null) {
        setData3({ ...snapshot.val() });
      } else {
        setData3({});
      }
    });
    return () => {
      setData3({});
    };
  }, []);
    return (
      <Table className="single">
        <thead>
          <tr>
            {/* <th>#</th> */}

            <th></th>
            <th className="row1">Internals</th>
            <th className="row1">CS201</th>
            <th className="row1">CS203</th>
            <th className="row1">CS205</th>
            <th className="row1">CS207</th>
            <th className="row1">CS209</th>
            <th className="row1">CS265</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data1).map((row, index) => {
            return (
              <tr>
                {/*<td>{index}</td>*/}
                <td></td>
                {/* <td>{row.data.Name}</td> */}
                <td>Internal 1</td>
                <td>{data1[row].cs201}</td>
                <td>{data1[row].cs203}</td>
                <td>{data1[row].cs205}</td>
                <td>{data1[row].cs207}</td>
                <td>{data1[row].cs209}</td>
                <td>{data1[row].cs265}</td>
              </tr>
            );
          })}
        </tbody>

        <thead>
          {/*<tr>
            <th>#</th> 
            <th>Name</th>
            <th>cs201</th>
            <th>cs203</th>
            <th>cs205</th>
            <th>cs207</th>
            <th>cs209</th>
            <th>cs265</th>
          </tr> */}
        </thead>
        <tbody>
          {Object.keys(data2).map((row, index) => {
            return (
              <tr>
                {/*<td>{index}</td>*/}
                <td className="row2">
                  
                </td>
                {/* <td>{row.data.Name}</td> */}
                <td>Internal 2</td>
                <td>{data2[row].cs201}</td>
                <td>{data2[row].cs203}</td>
                <td>{data2[row].cs205}</td>
                <td>{data2[row].cs207}</td>
                <td>{data2[row].cs209}</td>
                <td>{data2[row].cs265}</td>
              </tr>
            );
          })}
        </tbody>

        <thead>
          <tr className="row3">
            {/* <th>#</th> */}
            <th></th>
            <th className="row1">End Semester</th>
            <th className="row1">S1</th>
            <th className="row1">S2</th>
            <th className="row1">S3</th>
            <th className="row1">S4</th>
            <th className="row1">S5</th>
            <th className="row1">Supply</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data3).map((row, index) => {
            return (
              <tr>
                {/*<td>{index}</td>*/}
                <td></td>
                {/* <td>{row.data.Name}</td> */}

                <td>SGPA</td>
                <td>{data3[row].S1}</td>
                <td>{data3[row].S2}</td>
                <td>{data3[row].S3}</td>
                <td>{data3[row].S4}</td>
                <td>{data3[row].S5}</td>
                <td>{data3[row].RS}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
  
export default Studentoverall1;