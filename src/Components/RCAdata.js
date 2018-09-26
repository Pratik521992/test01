import React, { Component } from 'react';
import RCAItem from './RCAItem';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import best from './best';


class RCAdatas extends Component {

    handleClick(){
        this.props.P3click();
    }
    render(){

        let temp; 

       
         
        if(this.props.rcadata){
            

            temp = this.props.rcadata.map( mapdata => {

                return(
                     < RCAItem key ={mapdata.id} data={mapdata} />
                )
            })
        }
        
Charts(FusionCharts);

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'jsonurl',
  dataSource: 'data.json', /* see data tab */
};
   

        return (
            <div >
                
                <section className="bottom-container">
                <header className="chart">
                <h1>chart here</h1>
                <ReactFC {...chartConfigs} />
                </header>
                <div className="best-a">
                    <h4>best1</h4>

                </div> 
                <div className="best-b">
                    <h4>best2</h4>
                </div>
                <div className="best-c">
                    <h4>best3</h4>
                </div>    
                </section>
               
            
            </div>
        )         
    }


}

export default RCAdatas;