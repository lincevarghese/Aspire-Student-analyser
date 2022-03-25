import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import './Attendance.css';

class Attendance extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
            labels: ['Present', 'Absent'],
            datasets:[
              {
                label:'Attendance',
                data:[
                  75,
                  25,
                ],
                backgroundColor:[
                  'rgb(8, 199, 247)',
                  'rgb(181, 174, 207)',
                  'rgb(236, 137, 56)'
                  
                
                ]
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
          <h4><b>Attendance</b></h4>
      <div className="chart">

        <Doughnut
          data={this.state.chartData}
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

export default Attendance;
