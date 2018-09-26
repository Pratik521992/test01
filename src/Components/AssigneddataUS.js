import React, { Component } from 'react';
import AssignedItem from './AssigneditemUS';
import { ClipLoader } from 'react-spinners';


class Assigneddata extends Component {


  handleClick(){
    this.props.P1click();
    
}
handleClick2(){
    this.props.P3click();
    
}
    render(){

        let temp; 
      

        console.log(this.props.assdata)
         
        if(this.props.assdata){
           
            
            console.log(this.props.assdata.records);
            temp = this.props.assdata.map( mapdata => {

                return(
                     < AssignedItem key ={mapdata.number} data={mapdata} />
                )
            })
        }
        const toload = this.props.isLoading;
        let load = null;
        if(!toload){ load = <section className="">
       
            {temp}
        
       
    </section>} 
   
        return (
            <div >
                {load}
            
            </div>
        )         
    }


}
export default Assigneddata;