import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import './Internal2.css'


class Internal2 extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Subject 1','Subject 2','Subject 3','Subject 4','Subject 5','Subject 6'],
        datasets:[
          {
            label:'Internal 2',
            data:[
              45,
              30,
              41,
              42,
              40,
              38,
              0
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 206, 86, 0.6)'
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
        <div className="w3-col l4">
    <div className="w3-card w3-margin w3-margin-top w3-white">
      <div className="w3-container w3-white">
        <h4><b>Internal Assessment 2</b></h4>
      <div className="chart">
        <Bar
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
      
    )
  }
}

export default Internal2;
