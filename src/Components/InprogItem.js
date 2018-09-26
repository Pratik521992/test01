import React, { Component } from 'react';

class InprogItems extends Component {

    render() {


        

        return (
        <section className="top-container">  


            <header className="top-box-h-normal">
                <i className="fas fa-2x">IN PROGRESS</i>
                
               
            </header>    
            <header className="top-box-h-normal">
                <i className="fa fa-1x">P1</i>
                
                <p className="price" > {this.props.data.p1Inprogresscount}</p>
            </header>
            <header className="top-box-h-normal">
                <i className="fa fa-1x">P2</i>
                <p className="price" > {this.props.data.p2Inprogresscount}</p>
            </header>
            <header className="top-box-h-normal">
                <i className="fa fa-1x">P3</i>
                <p className="price" >{this.props.data.p3Inprogresscount}</p>
            </header>
            <header className="top-box-h-normal">
                <i className="fa fa-1x">P4</i>
                <p className="price" > {this.props.data.p4Inprogresscount} </p>
            </header>
            <header className={ (this.props.data.total>200) ? 'top-box-h-breach' : (this.props.data.total>.9*200)? 'top-box-h-amber' : 'top-box-h-normal'}>
                <i className="fas  fa-1x">Total</i>
                <p className="price" > {this.props.data.p1Inprogresscounttot} </p>
            </header>       
       
        </section>       
            
        )
    }

}
export default InprogItems;