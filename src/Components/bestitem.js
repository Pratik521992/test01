import React, { Component } from 'react';

class Bestitem extends Component {

    render() {


        

        return (
        <section className="best-container">  


                <div className="logo"><i className="fas fa-thumbs-up fa-1.5x" aria-hidden="true"></i></div>
                <div className="rank">
                
                <p className="fas fa-1.5x" > {this.props.data.best}</p>
                 </div>
         
                <div className="name">
                <p className="fas fa-2x" >  {this.props.data.number}</p></div>
           
                  
       
        </section>       
            
        )
    }

}
export default Bestitem;