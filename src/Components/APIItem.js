import React, { Component } from 'react';

class APIItem extends Component {

    render() {


        

        return (
        <section className="top-container">  


            <header className="top-box-h-normal">
                <i className="fas fa-2x">OPEN</i>
                
               
            </header>    
            <header className="top-box-h-normal">
                <i className="fa fa-1x">P1</i>
                
                <p className="price" > {this.props.data.p1count}</p>
            </header>
            <header className="top-box-h-normal">
                <i className="fa fa-1x">P2</i>
                <p className="price" > {this.props.data.p2count}</p>
            </header>
            <header className="top-box-h-normal">
                <i className="fa fa-1x">P3</i>
                <p className="price" >{this.props.data.p3count}</p>
            </header>
            <header className="top-box-h-normal">
                <i className="fa fa-1x">P4</i>
                <p className="price" > {this.props.data.p4count} </p>
            </header>
            <header className={ (this.props.data.total>200) ? 'top-box-h-breach' : (this.props.data.total>.9*200)? 'top-box-h-amber' : 'top-box-h-normal'}>
                <i className="fas  fa-1x">Total</i>
                <p className="price" > {this.props.data.total} </p>
            </header>       
       
        </section>       
            
        )
    }

}
export default APIItem;