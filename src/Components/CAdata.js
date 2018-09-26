import React, { Component } from 'react';
import CAItem from './CAItem';


class CAdatas extends Component {

    handleClick(){
        this.props.P3click();
    }
    render(){

        let temp; 

        console.log(this.props.cadata)
         
        if(this.props.cadata){
            

            temp = this.props.cadata.map( mapdata => {

                return(
                     < CAItem key ={mapdata.id} data={mapdata} />
                )
            })
        }
   

        return (
            <div >
                
                    <header className="showcase">
                    <div className="info">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Number</th>
                                <th scope="col">Opened At</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Assigned to</th>
                                <th scope="col">incident_state</th>
                                <th scope="col">Response Status</th>
                                <th scope="col">Restore Status</th>
                            </tr>
                        </thead>
                        {temp}
                        </table>
                            
                </div>
                    </header>
                   
               
            
            </div>
        )         
    }


}

export default CAdatas;