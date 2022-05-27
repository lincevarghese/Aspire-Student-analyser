import "./Form.css"

import React from "react";
import {
  getDatabase,
  ref,
  onValue,
  startAt,
  orderByChild,
  query,
} from "firebase/database";
import { Table } from "react-bootstrap";
const db = getDatabase();
export class Attendance1 extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    };
  }
  componentDidMount() {
    const dbRef = ref(db, "Attendance/");
    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
      this.setState({ tableData: records });
    });
  }
  render() {
    return (
      <>
        <h1 className="heading">Attendance</h1>
        <Table className="Attendance">
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Roll No</th>
              <th>Name</th>
              <th>CS201</th>
              <th>CS203</th>
              <th>CS205</th>
              <th>CS207</th>
              <th>CS209</th>
              <th>CS265</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map((row, index) => {
              return (
                <tr>
                  {/*<td>{index}</td>*/}
                  <td>{row.data.RollNo}</td>
                  <td>{row.data.Name}</td>
                  {/* <td>{row.data.Name}</td> */}
                  <td>{row.data.cs201}</td>
                  <td>{row.data.cs203}</td>
                  <td>{row.data.cs205}</td>
                  <td>{row.data.cs207}</td>
                  <td>{row.data.cs209}</td>
                  <td>{row.data.cs265}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
}