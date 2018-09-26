import React, { Component } from 'react';

import { ClipLoader } from 'react-spinners';
import Bestitem from './bestitem';
import BarChart from "react-svg-bar-chart";
import Chart from './bar';





class Best extends Component {


  handleClick(){
    this.props.P1click();
    
}
handleClick2(){
    this.props.P3click();
    
}
    render(){

        let temp; 
      

     
         
        if(this.props.bestdata){
           
            
           
            temp = this.props.bestdata.map( mapdata => {

                return(
                     < Bestitem key ={mapdata.number} data={mapdata} />
                )
            })
        }
        var data = [];
       data = this.props.chartdata;
        
   
    
        return (
            <div >
               <section className="bottom-container">
               <header >
               <Chart />
               </header>
               <div className="best-a">
                   <div className="btn"> TOP Performers </div>
                   
                    <br />
                    {temp}
               </div> 
              
               </section>
            </div>
        )         
    }


}
export default Best;