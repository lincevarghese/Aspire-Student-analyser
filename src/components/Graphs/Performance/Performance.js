import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './Performance.css'

class Performance extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        datasets:[
          {
            label:'SGPA',
            data:[
              6.5,
              7.3,
              6.9,
              8.7,
              8.3,
              9.0,
              0
            ],
            borderColor :"rgb(204, 7, 243)",
            fill:true,
            backgroundColor:"rgb(205, 203, 206)"
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
  }

  render(){
    return (
      <div className="w3-row">
      <div className="w3-col l4">
      <div className="w3-card w3-margin w3-margin-top w3-white">
      <div className="w3-container w3-white">
      <h4><b>Grade Report</b></h4>
      <div className="chart">
        <Line
          data={this.state.chartData}
          //width={5}
          //height={10}
          options={{
            title:{
              display:this.props.displayTitle,
              fontSize:25
            },
          }}
        />
      </div>
      </div>
      </div>
      </div>
      </div>

    )
  }
}

export default Performance;
