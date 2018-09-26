import React, {
    Component
  } from 'react';

import {Bar, Line} from 'react-chartjs-2';


class Chart extends Component{

    constructor(){
        super();
        this.state = {
          chartData:{}
        }
      }
    
      componentWillMount(){
        this.getChartData();
      }
    
      getChartData(){
        // Ajax calls here
        this.setState({
          chartData:{
            labels: ['', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY','MONDAY'],
            datasets:[
              {
                label:'Population',
                data:[
                  0,
                  48,
                  57,
                  50,
                  60,
                  61
                  
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        });
      }
    
      render() {
        return (
          <div >
            
            <Bar data={this.state.chartData} options={{
                title:{
                    display:true,
                    text:'INCIDENT TREND',
                    fontSize:25
                },
                legend:{
                    display:true,
                    position:'botton'
                }
            }} />
          </div>
        );
      }
    }
    

export default Chart;