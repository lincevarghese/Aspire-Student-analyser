import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import './Attendance.css';

const state = {
  chartData: {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "CS201",
        data: [83, 17],
        backgroundColor: [
          "rgba(22,98,208,0.6)",
          "rgb(213,233,242)",
          "rgb(236, 137, 56)",
        ],
      },
    ],
  },
};

export default function Attendance1()
  {
    return (
      <div className="AT-card1 AT-margin AT-margin-top AT-white">
        <div className="AT-container AT-white">
          <h4>
            <b>Attendance: CS201</b>
          </h4>
          <div className="chart">
            <Doughnut data={state.chartData} options={{}} />
          </div>
        </div>
      </div>
    );
}