import React, { Component } from 'react';
import Ageitems from './ageitemUS';
import { ClipLoader } from 'react-spinners';


class age extends Component {


  handleClick(){
    this.props.P1click();
    
}
handleClick2(){
    this.props.P3click();
    
}
    render(){

        let temp; 
      

        console.log(this.props.age)
         
        if(this.props.age){
           
            
            console.log(this.props.age.records);
            temp = this.props.age.map( mapdata => {

                return(
                     < Ageitems key ={mapdata.number} data={mapdata} />
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
export default age;