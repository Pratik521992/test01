import React, { Component } from 'react';
import APIItem from './APIItem';
import { ClipLoader } from 'react-spinners';


class APIdatas extends Component {


 
handleClick2(){
    this.props.P3click();
    
}
    render(){

        let temp; 
      /////////
        if(this.props.Apidata){
           
            
           
            temp = this.props.Apidata.map( mapdata => {

                return(
                     < APIItem key ={mapdata.number} data={mapdata} />
                )
            })
        }
        const toload = this.props.isLoading;
        let load = null;
        if(!toload){ load = <section className="">
       
            {temp}
        
       
    </section>} 
    else {  load =  <div><div class="loading-icon"></div></div>}

        return (
            <div >
                {load}
            
            </div>
        )         
    }


}
export default APIdatas;