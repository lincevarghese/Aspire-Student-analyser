import "./Form.css";

import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  getDatabase,
  ref,
  onValue,
  startAt,
  orderByChild,
  orderByValue,
  query,
  equalTo,
} from "firebase/database";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { db } from "../../Firebase/Config";
function Results() {
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const dbRef1 = ref(db, 'Grade/');
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
  }, [id]);
  console.log("user", data1);
  useEffect(() => {
    const dbRef2 = query(ref(db, "Grade/"),orderByChild('CGPA'),startAt(8.5));
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
  }, [id]);
  console.log("data2", data2);
  useEffect(() => {
    const dbRef3 = query(ref(db, "Grade/"), orderByChild("RS"), startAt(3));
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
  }, [id]);
  console.log("grade", data3);
  return (
    <>
      <Table className="single_sub">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Roll No</th>
            <th>Name</th>
            <th>S1</th>
            <th>S2</th>
            <th>S3</th>
            <th>S4</th>
            <th>S5</th>
            <th>CGPA</th>
            <th>Backlogs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data1.S1}</td>
            <td>{data1.S2}</td>
            <td>{data1.S3}</td>
            <td>{data1.S4}</td>
            <td>{data1.S5}</td>
            <td>{data1.CGPA}</td>
            <td>{data1.RS}</td>
          </tr>
        </tbody>

        <thead>
          <table className="stud_bright">
            <tr colspan={5}>
              <th>
                <h2>Bright Students</h2>
              </th>
            </tr>
          </table>
        </thead>
        <Table className="stud_bright">
          <tr>
            <th rowSpan={2}>Roll No.</th>
            <th rowSpan={2}>Student Name</th>
          </tr>
          <tbody>
            <tr>
              <td>{data2.RollNo}</td>
              <td>{data2.Name}</td>
            </tr>
          </tbody>
        </Table>

        <thead>
          <tr className="row3">
            {/* <th>#</th> */}
            <th></th>
            <th></th>
            <th>End Semester</th>
            <th>S1</th>
            <th>S2</th>
            <th>S3</th>
            <th>S4</th>
            <th>S5</th>
            <th>Supply</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/*<td>{index}</td>*/}
            <td></td>
            {/* <td>{row.data.Name}</td> */}
            <td></td>
            <td>SGPA</td>
            <td>{data3.S1}</td>
            <td>{data3.S2}</td>
            <td>{data3.S3}</td>
            <td>{data3.S4}</td>
            <td>{data3.S5}</td>
            <td>{data3.RS}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Results;
