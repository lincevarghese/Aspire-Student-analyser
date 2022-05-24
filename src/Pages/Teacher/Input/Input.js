import { storage } from "../../../Firebase/Config";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import {toast,ToastContainer } from "react-toastify";
import "./Input.css";
import { getDatabase, ref, set } from "firebase/database";
import "react-toastify/dist/ReactToastify.css";



function Input() {
  const notify = () =>
    toast.success("File Uploaded Successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const db = getDatabase();
  const [items, setItems] = useState([]);
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      setItems(d);
    });
  };
  function writeToDatabase1() {
    items.map((d) =>
      set(ref(db, "Mark1/" + d.Name), {
        Name: d.Name,
        cs201: d.cs201,
        cs203: d.cs203,
        cs205: d.cs205,
        cs207: d.cs207,
        cs209: d.cs209,
        cs265: d.cs265,
      })
    );
  }
  function writeToDatabase2() {
    items.map((d) =>
      set(ref(db, "Mark2/" + d.Name), {
        Name: d.Name,
        Attendance: d.Attendance,
        Mark: d.Mark,
      })
    );
  }
  function writeToDatabase3() {
    items.map((d) =>
      set(ref(db, "Grade/" + d.Name), {
        Name: d.Name,
        Attendance: d.Attendance,
        Mark: d.Mark,
      })
    );
  }
  function writeToDatabase4() {
    items.map((d) =>
      set(ref(db, "Attendance/" + d.Name), {
        Name: d.Name,
        Attendance: d.Attendance,
        Mark: d.Mark,
      })
    );
  }
  return (
    <div>
      <ToastContainer/>
      <div className="cards wrapper">
        <div className="card card-1">
          <h2 className="card__title">Internal Marks 1</h2>
          <p className="card__apply">
            <br></br>
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
              }}
            />
            <button
              onClick={() => {
                writeToDatabase1();
                notify();
              }}
            >
              Submit
            </button>
            
          </p>
        </div>
        <div className="card card-1">
          <h2 className="card__title">Internal Marks 2</h2>
          <p className="card__apply">
            <br></br>
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
              }}
            />
            <button
              onClick={() => {
                writeToDatabase2();
                notify();
              }}
            >
              Submit
            </button>
          </p>
        </div>
        <div className="card card-1">
          <h2 className="card__title">Grade</h2>
          <p className="card__apply">
            <br></br>
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
              }}
            />
            <button
              onClick={() => {
                writeToDatabase3();
                notify();
              }}
            >
              Submit
            </button>
          </p>
        </div>
        <div className="card card-1">
          <h2 className="card__title">Attendance</h2>
          <p className="card__apply">
            <br></br>
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
              }}
            />
            <button
              onClick={() => {
                writeToDatabase4();
                notify();
              }}
            >
              Submit
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Input;
