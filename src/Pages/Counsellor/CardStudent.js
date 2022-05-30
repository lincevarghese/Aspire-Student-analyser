import "../../components/List/Form.css";
import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/Config";
import { ref, onValue, orderByChild, query, startAt, remove } from "firebase/database";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";

function CardStudent() {
  const [data, setData] = useState({});
  useEffect(() => {
    const dbRef = query(ref(db, "Weak/"), orderByChild("RS"), startAt(3));
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

  const onDelete=(row)=>{
  remove(ref(db,`Weak/${row}`));
  toast.success("Counselling Completed", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  };
      

  return (
    <div>
      <>
        <ToastContainer />
        <Table className="single_sub3">
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
              <th>Backlogs</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((row, index) => {
              return (
                <tr key={row}>
                  <td>{data[row].RollNo}</td>
                  <td>{data[row].Name}</td>
                  <td>{data[row].S1}</td>
                  <td>{data[row].S2}</td>
                  <td>{data[row].S3}</td>
                  <td>{data[row].S4}</td>
                  <td>{data[row].S5}</td>
                  <td>{data[row].RS}</td>
                  {/*
                        <td>{index}</td>					  
						 <td>{row.data.Name}</td>
                          */}
                  <td>
                    <Link to={`/counsellor/students/${data[row].RollNo}`}>
                      <button className="buttonclick2">View Profile</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="buttonclick2"
                      onClick={() => onDelete(row)}
                    >
                      Completed
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    </div>
  );
}

export default CardStudent;
