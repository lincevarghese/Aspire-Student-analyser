
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "../Graphs/Internal1/Internal1.css";
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
import { db } from "../../Firebase/Config";
function Graph() {
  
  const [data,setData]=useState({});

  const { id } = useParams();
  useEffect(() => {
    const dbRef1 = ref(db, `Mark1/${id}`);
    onValue(dbRef1, (snapshot) => {
      if (snapshot.val() != null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
    
  }, [id]);
  console.log("user", data); 
  
 

  return (
    <div className="I1-card I1-margin I1-margin-top I1-white">
      <div className="I1-container I1-white">
        <h4>
          <b>Internal Assessment</b>
        </h4>
        <div className="chart">
          <Bar
            data={{
          labels: [
      "CS201",
      "CS203",
      "CS205",
      "CS207",
      "CS209",
      "CS265",
    ],
    datasets: [
      {
        label: "Internal 1",
        data: [data.cs201, data.cs203, data.cs205, data.cs207, data.cs209, data.cs265, 0, 50],
        backgroundColor: [
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
        ],
      },],
            }}
    
            options={{}}
          />
        </div>
      </div>
    </div>
  );
}

export default Graph;
