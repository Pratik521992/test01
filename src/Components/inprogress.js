import React, { Component } from 'react';
import InprogItems from './InprogItem';
import { ClipLoader } from 'react-spinners';
import InprogItem from './InprogItem';


class Inprog extends Component {


  handleClick(){
    this.props.P1click();
    
}
handleClick2(){
    this.props.P3click();
    
}
    render(){

        let temp; 
      

       
         
        if(this.props.Apidata){
           
            
           
            temp = this.props.Apidata.map( mapdata => {

                return(
                     < InprogItem key ={mapdata.number} data={mapdata} />
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
export default Inprog;