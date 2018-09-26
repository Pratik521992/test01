import React, { Component } from 'react';

class AssignedItem extends Component {

    render() {


        

        return (
        <section className="top-container">  

            <header className="top-box-d-cool">
                <i className="fas fa-2x">ASSIGNED</i>
               
            </header>
            <header className="top-box-d-cool">
                <i className="fa fa-1x">P1</i>
                <p className="price" > {this.props.data.p1asscount}</p>
            </header>
            <header className="top-box-d-cool">
                <i className="fa fa-1x">P2</i>
                <p className="price" > {this.props.data.p2asscount}</p>
            </header>
            <header className="top-box-d-cool">
                <i className="fa fa-1x">P3</i>
                <p className="price" >{this.props.data.p3asscount}</p>
            </header>
            <header className="top-box-d-cool">
                <i className="fa fa-1x">P4</i>
                <p className="price" > {this.props.data.p4asscount} </p>
            </header>
            <header className={ (this.props.data.totass>100) ? 'top-box-d-breach' : (this.props.data.totass>.9*100)? 'top-box-d-amber' : 'top-box-d-cool'}>
               
                <i className="fas  fa-1x">Total</i>
                <p className="price" > {this.props.data.totass} </p>
            </header>       
       
        </section>       
            
        )
    }

}
export default AssignedItem;