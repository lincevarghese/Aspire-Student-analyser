import "./Form.css";
import React from "react";
import {
  getDatabase,
  ref,
  onValue,
  startAt,
  orderByChild,
  query,
  limitToFirst,
} from "firebase/database";
import { Table } from "react-bootstrap";

const db = getDatabase();
export class RealtimeDataSingle1 extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    };
  }
  componentDidMount() {
    const dbRef = (ref(db, "Subject1/"));
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
      <div>
        {/*
    <table className="single_sub">
      <tr>
        <th>
          <h3 align="center">402 Data Mining</h3>
        </th>
      </tr>
</table>*/}
        <Table className="single_sub1">
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Roll No</th>
              <th>Name</th>
              <th>Attendance</th>
              <th>Internal1</th>
              <th>Internal2</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map((row, index) => {
              return (
                <tr>
                
                  <td>{row.data.RollNo}</td>
                  <td>{row.data.Name}</td> 
                  <td>{row.data.attendance}</td>
                  <td>{row.data.internal1}</td>
                  <td>{row.data.internal2}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
