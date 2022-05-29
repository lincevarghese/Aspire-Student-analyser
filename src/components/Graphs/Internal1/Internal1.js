import React from 'react';
import {Bar} from 'react-chartjs-2';
import './Internal1.css';

const state = {
  chartData: {
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
        data: [29, 30, 32, 21, 26, 22, 0, 50],
        backgroundColor: [
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
        ],
      },
      {
        label: "Internal 2",
        data: [25, 26, 30, 27, 26, 28, 0, 50],
        backgroundColor: [
          "rgb(73,85,137)",
          "rgb(73,85,137)",
          "rgb(73,85,137))",
          "rgb(73,85,137)",
          "rgb(73,85,137)",
          "rgb(73,85,137)",
        ],
      },
    ],
  },
};

export default function Internal1()
{
    return (
     
    <div className="I1-card I1-margin I1-margin-top I1-white">
      <div className="I1-container I1-white">
        <h4><b>Internal Assessment</b></h4>
      <div className="chart">
        <Bar
          data={state.chartData}
          options={{  }}
        />
      </div>
      </div>
      </div>
      
      
    );
  }
